# Deployment Guide

## Production Checklist

Before deploying to production, ensure:

- [ ] All environment variables are configured correctly
- [ ] Contact form is connected to email service or backend API
- [ ] Analytics (if needed) is properly configured
- [ ] Domain name is ready
- [ ] SSL certificate will be configured (usually automatic with hosting platforms)
- [ ] ICAI compliance has been reviewed
- [ ] All content has been proofread
- [ ] Mobile responsiveness tested
- [ ] Browser compatibility tested (Chrome, Safari, Firefox, Edge)

---

## Option 1: Vercel (Recommended - Easiest)

Vercel is the recommended platform for Next.js applications.

### Steps:

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/mmanico-website.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub account
   - Select the repository
   - Configure environment variables:
     ```
     NEXT_PUBLIC_POST_2026_RULES=false
     NEXT_PUBLIC_FIRM_NAME=M MANI & CO
     NEXT_PUBLIC_FIRM_EMAIL=info@mmanico.com
     NEXT_PUBLIC_FIRM_PHONE=+91 96328 18089
     NEXT_PUBLIC_WHATSAPP_NUMBER=919632818089
     ```
   - Click "Deploy"

3. **Custom Domain**
   - After deployment, go to project settings
   - Add your custom domain (e.g., mmanico.com)
   - Update DNS records as instructed
   - SSL is automatic

### Benefits:
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments on git push
- ✅ Preview deployments for branches
- ✅ Free for small projects

---

## Option 2: Netlify

### Steps:

1. **Build the project locally**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Install Netlify CLI: `npm install -g netlify-cli`
   - Run: `netlify deploy`
   - For production: `netlify deploy --prod`

3. **Or use Netlify UI**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder
   - Configure environment variables in Netlify dashboard
   - Add custom domain in domain settings

---

## Option 3: Traditional VPS (DigitalOcean, AWS, etc.)

### Prerequisites:
- Node.js 18+ installed on server
- Process manager (PM2 recommended)
- Nginx for reverse proxy

### Steps:

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Transfer files to server**
   ```bash
   # Upload via SCP or Git clone on server
   scp -r .next package.json server:/var/www/mmanico
   ```

3. **Install dependencies on server**
   ```bash
   cd /var/www/mmanico
   npm install --production
   ```

4. **Configure PM2**
   ```bash
   # Install PM2
   npm install -g pm2

   # Start application
   pm2 start npm --name "mmanico-website" -- start

   # Set to start on boot
   pm2 startup
   pm2 save
   ```

5. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name mmanico.com www.mmanico.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **Enable HTTPS with Let's Encrypt**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d mmanico.com -d www.mmanico.com
   ```

---

## Post-Deployment Tasks

### 1. Email Integration

Update contact form to actually send emails:

**Option A: Using Resend (Recommended)**
```bash
npm install resend
```

Create `src/app/api/contact/route.ts`:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();

  await resend.emails.send({
    from: 'website@mmanico.com',
    to: 'info@mmanico.com',
    subject: `New Enquiry: ${data.service}`,
    html: `
      <h2>New Website Enquiry</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Service:</strong> ${data.service}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `,
  });

  return Response.json({ success: true });
}
```

**Option B: Using Nodemailer (Self-hosted)**
```bash
npm install nodemailer
```

### 2. Analytics Setup

**Google Analytics:**
Create `src/components/Analytics.tsx`:
```typescript
import Script from 'next/script';

export default function Analytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
```

Add to `src/app/layout.tsx`:
```typescript
import Analytics from '@/components/Analytics';

// In body:
<Analytics />
```

### 3. SEO Enhancements

**Create sitemap.xml:**
```bash
# Add to next.config.mjs
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
};
```

Create `src/app/api/sitemap/route.ts`:
```typescript
export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url><loc>https://mmanico.com</loc><priority>1.0</priority></url>
      <url><loc>https://mmanico.com/about</loc><priority>0.8</priority></url>
      <url><loc>https://mmanico.com/services</loc><priority>0.9</priority></url>
      <url><loc>https://mmanico.com/resources</loc><priority>0.7</priority></url>
      <url><loc>https://mmanico.com/tools</loc><priority>0.7</priority></url>
      <url><loc>https://mmanico.com/contact</loc><priority>0.8</priority></url>
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
```

**Create robots.txt:**
```
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://mmanico.com/sitemap.xml
```

### 4. Performance Optimization

**Add security headers in `next.config.mjs`:**
```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  }
};
```

---

## Monitoring & Maintenance

### Regular Tasks:
- Monitor website uptime
- Check contact form submissions
- Update regulatory content quarterly
- Review analytics monthly
- Renew SSL certificates (if manual)
- Update dependencies quarterly: `npm update`
- Security updates: `npm audit fix`

### Backup Strategy:
- Database backups (if applicable)
- Code in version control (Git)
- Environment variables documented securely
- Regular deployment testing

---

## Domain Configuration

### DNS Records:
```
Type    Name    Value               TTL
A       @       [Your Server IP]    3600
A       www     [Your Server IP]    3600
```

Or for Vercel/Netlify:
```
CNAME   www     cname.vercel-dns.com    3600
```

### Email Configuration (if using custom domain):
Configure MX records for email service provider.

---

## Support

For deployment assistance:
- Email: info@mmanico.com
- Phone: +91 96328 18089
