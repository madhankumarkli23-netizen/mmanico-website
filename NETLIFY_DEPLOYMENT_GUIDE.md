# Netlify Deployment Guide for M MANI & CO Website

## 🚀 Quick Deployment Steps

### Option 1: Deploy via GitHub (Recommended)

#### Step 1: Push to GitHub
1. Create a new repository on GitHub: https://github.com/new
   - Name: `mmanico-website` (or any name you prefer)
   - Make it **Private** (recommended for business websites)
   - Do NOT initialize with README, .gitignore, or license

2. Push your local repository to GitHub:
```bash
cd /Users/manimuru/Library/CloudStorage/OneDrive-Personal\(2\)/mmanico-website
git remote add origin https://github.com/YOUR_USERNAME/mmanico-website.git
git branch -M main
git push -u origin main
```

#### Step 2: Deploy on Netlify
1. Go to https://app.netlify.com/
2. Click **"Add new site"** → **"Import an existing project"**
3. Click **"Deploy with GitHub"**
4. Authorize Netlify to access your GitHub account
5. Select your repository: `mmanico-website`
6. Configure build settings (should auto-detect):
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Node version:** `18`
7. Click **"Deploy site"**

### Option 2: Deploy via Drag & Drop (Quick Test)

⚠️ **Note:** This method has limitations for Next.js applications. GitHub method is strongly recommended.

1. Build the project locally:
```bash
cd /Users/manimuru/Library/CloudStorage/OneDrive-Personal\(2\)/mmanico-website
npm install
npm run build
```

2. Go to https://app.netlify.com/drop
3. Drag and drop the `.next` folder

**Limitation:** This won't work properly for Next.js dynamic features. Use GitHub method instead.

### Option 3: Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Deploy from your project directory:
```bash
cd /Users/manimuru/Library/CloudStorage/OneDrive-Personal\(2\)/mmanico-website
netlify deploy --prod
```

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [x] Git repository initialized
- [x] All files committed
- [x] `netlify.toml` configuration file created
- [x] CA logo file (`ca-india-logo.png`) in `/public` folder
- [ ] Contact email verified (currently: info@mmanico.com)
- [ ] Phone number verified (currently: +91 96328 18089)
- [ ] Environment variables configured (if any)

---

## ⚙️ Netlify Configuration

Your project includes a `netlify.toml` file with the following settings:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "18"
```

---

## 🔧 Custom Domain Setup (Optional)

After deployment, to use your own domain:

1. In Netlify dashboard, go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `mmanico.com` or `www.mmanico.com`)
4. Follow DNS configuration instructions provided by Netlify
5. Update your domain's DNS records at your registrar

### Example DNS Records:
```
Type    Name    Value
A       @       75.2.60.5
CNAME   www     your-site.netlify.app
```

---

## 🌐 Environment Variables (if needed)

If your site requires environment variables:

1. In Netlify dashboard: **Site settings** → **Environment variables**
2. Add variables:
   - `NEXT_PUBLIC_SITE_URL`: Your production URL
   - `CONTACT_EMAIL`: info@mmanico.com
   - `PHONE_NUMBER`: +919632818089

---

## 📊 Post-Deployment Tasks

After successful deployment:

1. **Test the live site:**
   - Check all pages load correctly
   - Test contact form submission
   - Verify CA logo displays properly
   - Test all calculators and tools
   - Check mobile responsiveness

2. **Set up analytics (optional):**
   - Google Analytics
   - Netlify Analytics

3. **Enable HTTPS:**
   - Automatically enabled by Netlify
   - Force HTTPS redirect: **Site settings** → **Domain management** → Enable "Force HTTPS"

4. **Set up form notifications:**
   - **Site settings** → **Forms** → **Form notifications**
   - Add email: info@mmanico.com

---

## 🔄 Continuous Deployment

Once connected to GitHub:

- **Automatic deployments:** Every push to `main` branch triggers a new deployment
- **Preview deployments:** Pull requests create preview URLs
- **Rollback:** Can rollback to any previous deployment in Netlify dashboard

---

## 📱 Mobile Testing URLs

After deployment, test on:
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Mobile devices (iOS Safari, Android Chrome)
- Tablet devices

---

## 🆘 Troubleshooting

### Build Fails
- Check build logs in Netlify dashboard
- Verify Node version is 18 or higher
- Ensure all dependencies are listed in `package.json`

### Images Not Loading
- Verify `ca-india-logo.png` is in `/public` folder
- Check image paths start with `/` (e.g., `/ca-india-logo.png`)

### 404 Errors
- Ensure `netlify.toml` has correct redirects
- Check Next.js page routes are correct

### Contact Form Not Working
- Enable Netlify Forms in dashboard
- Add `netlify` attribute to form (already configured)

---

## 📞 Support

- Netlify Docs: https://docs.netlify.com/
- Next.js Docs: https://nextjs.org/docs
- Netlify Support: support@netlify.com

---

## 🎉 Your Deployment URL

After deployment, Netlify will provide:
- **Netlify subdomain:** `https://your-site-name.netlify.app`
- **Custom domain (if configured):** `https://mmanico.com`

---

**Deployed with Netlify**
Website: M MANI & CO - Chartered Accountants
Technology: Next.js 14, TypeScript, Tailwind CSS
