# M MANI & CO - Chartered Accountants Website

A premium, modern, and fully ICAI-compliant website for M MANI & CO, a chartered accountancy firm based in Bengaluru, Karnataka.

## ✨ Features

### Compliance-First Design
- **Strictly ICAI-compliant** (pre-April 1, 2026 rules)
- No prohibited content (testimonials, awards, rankings, superiority claims)
- Pure pull-mode, factual, and dignified tone
- Future-ready feature flag for post-2026 regulatory changes

### Premium User Experience
- Modern, elegant design with generous white space
- Mobile-first responsive layout
- Smooth animations and transitions
- Sticky navigation with active page highlighting
- Floating WhatsApp button for easy contact

### Comprehensive Content
- **Home**: Hero section, practice areas showcase, regulatory updates preview
- **About**: Firm overview, professional values, geographic reach
- **Services**: Accordion-based service explorer with detailed information
- **Resources**: Tax updates, educational insights, downloadable checklists
- **Tools**: Privacy-first calculators (income tax, HRA, GST, TDS reminders)
- **Contact**: Multi-channel contact options with secure enquiry form
- **Legal**: Disclaimer, Privacy Policy, Terms of Use

### Technical Excellence
- Built with Next.js 14 (App Router) and TypeScript
- Tailwind CSS for styling
- SEO-optimized with proper metadata
- Accessibility-minded (WCAG considerations)
- Performance-optimized (target Lighthouse score ≥ 90)
- No external paid APIs

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0.0 or higher
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd mmanico-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```

   The `.env.local` file contains:
   ```env
   NEXT_PUBLIC_POST_2026_RULES=false
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_FIRM_NAME="M MANI & CO"
   NEXT_PUBLIC_FIRM_EMAIL=info@mmanico.com
   NEXT_PUBLIC_FIRM_PHONE="+91 96328 18089"
   NEXT_PUBLIC_WHATSAPP_NUMBER="919632818089"
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

The development server includes:
- Hot reload on file changes
- TypeScript error checking
- Tailwind CSS compilation

### Building for Production

Create an optimized production build:

```bash
npm run build
```

This command:
- Compiles TypeScript
- Optimizes assets
- Generates static pages where possible
- Creates production bundles

### Running Production Build Locally

After building, you can run the production build locally:

```bash
npm start
```

This starts the Next.js production server on [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```
mmanico-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── disclaimer/        # Disclaimer page
│   │   ├── privacy/           # Privacy policy page
│   │   ├── resources/         # Resources page
│   │   ├── services/          # Services page
│   │   ├── terms/             # Terms of use page
│   │   ├── tools/             # Tools page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   │
│   └── components/            # React components
│       ├── contact/           # Contact form components
│       ├── home/              # Home page components
│       ├── layout/            # Layout components (Header, Footer, WhatsApp)
│       ├── resources/         # Resources tab components
│       ├── services/          # Services accordion component
│       └── tools/             # Calculator components
│
├── public/                    # Static assets
├── .env.example              # Environment variables template
├── .env.local                # Local environment variables (git-ignored)
├── next.config.mjs           # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## 🎨 Design System

### Colors
- **Primary**: Blue tones for professional trust
- **Neutral**: Grayscale for text and backgrounds
- **Accent**: Contextual colors for badges and alerts

### Typography
- **Font**: Inter (sans-serif) for clean, modern readability
- **Hierarchy**: Clear heading levels with balanced spacing

### Components
- Consistent button styles
- Card-based content presentation
- Accessible form inputs with proper labels
- Responsive navigation with mobile menu

## 🔒 ICAI Compliance

This website strictly adheres to ICAI Code of Ethics and website guidelines:

### ✅ Included (Compliant)
- Firm name and location
- Contact information (phone, email, WhatsApp)
- Factual service descriptions
- Educational content and resources
- Professional regulatory updates with official links
- Privacy-first tools with disclaimers

### ❌ Excluded (Non-compliant)
- ~~Testimonials or client names~~
- ~~Awards, rankings, ISO certifications~~
- ~~"Best", "leading", "expert" claims~~
- ~~Professional fees or discounts~~
- ~~FRN/membership numbers on public display~~
- ~~Government logos or empanelment claims~~
- ~~Comparison with other firms~~

## 🔧 Future-Ready Feature Flag

The `NEXT_PUBLIC_POST_2026_RULES` environment variable controls features that may become permissible after April 1, 2026:

**When `false` (default - current compliance):**
- No newsletter signup
- No email capture on downloads
- No push notifications

**When `true` (post-2026, if regulations change):**
- Optional newsletter subscription
- Email-gated downloads
- Content update notifications

⚠️ **Important**: Only enable after confirming new ICAI rules permit these features.

## 📱 Responsive Design

The website is fully responsive across:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)

## ♿ Accessibility

Accessibility features include:
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Sufficient color contrast
- Responsive text sizing

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Import repository in Vercel
3. Set environment variables
4. Deploy

### Other Platforms
This is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any Node.js hosting service

## 📝 Customization

### Updating Firm Information
Edit values in `.env.local`:
```env
NEXT_PUBLIC_FIRM_NAME="Your Firm Name"
NEXT_PUBLIC_FIRM_EMAIL=your@email.com
NEXT_PUBLIC_FIRM_PHONE="+91 XXXXXXXXXX"
NEXT_PUBLIC_WHATSAPP_NUMBER="91XXXXXXXXXX"
```

### Adding Content
- **Services**: Edit `src/components/services/ServiceAccordion.tsx`
- **Updates**: Edit `src/components/home/UpdatesPreview.tsx` and `src/components/resources/UpdatesTab.tsx`
- **Insights**: Edit `src/components/home/InsightsPreview.tsx` and `src/components/resources/InsightsTab.tsx`
- **Downloads**: Edit `src/components/resources/DownloadsTab.tsx`

### Styling
Global styles: `src/app/globals.css`
Tailwind config: `tailwind.config.ts`

## 📧 Contact Form Integration

The contact form currently logs data to console. To integrate with a backend:

1. Create an API route at `src/app/api/contact/route.ts`
2. Configure email service (SendGrid, AWS SES, etc.)
3. Update form submission in `src/components/contact/ContactForm.tsx`

Example API route structure:
```typescript
export async function POST(request: Request) {
  const data = await request.json();
  // Send email or store in database
  return Response.json({ success: true });
}
```

## 🔍 SEO

Each page includes:
- Unique meta titles and descriptions
- Proper heading hierarchy
- Semantic HTML
- Clean URL structure

For further SEO optimization:
- Add `robots.txt` and `sitemap.xml`
- Configure Open Graph images
- Implement structured data (JSON-LD)

## 📊 Analytics

To add analytics (Google Analytics, Plausible, etc.):
1. Create `src/components/Analytics.tsx`
2. Add analytics script/component to `src/app/layout.tsx`
3. Ensure compliance with privacy policy

## 🛡️ Security

Security considerations:
- No sensitive data in client-side code
- Environment variables for configuration
- Form validation
- Security headers (configure in `next.config.mjs`)
- HTTPS enforcement (production)

## 📄 License

This project is proprietary software developed for M MANI & CO.

## 🤝 Support

For technical support or questions:
- Email: info@mmanico.com
- Phone: +91 96328 18089

---

**Built with ❤️ for M MANI & CO**

*Premium. Professional. Compliant.*
