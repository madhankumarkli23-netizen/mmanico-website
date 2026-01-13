# Quick Start Guide

## Immediate Setup (3 Steps)

### 1. Navigate to Project
```bash
cd "/Users/manimuru/Library/CloudStorage/OneDrive-Personal(2)/mmanico-website"
```

### 2. Install Dependencies (if not already done)
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

**✅ Website will be live at: http://localhost:3000**

---

## All Available Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm start` | Run production build locally |
| `npm run lint` | Check code for issues |

---

## Quick Navigation

Once the dev server is running, visit:

- **Home**: http://localhost:3000
- **About**: http://localhost:3000/about
- **Services**: http://localhost:3000/services
- **Resources**: http://localhost:3000/resources
- **Tools**: http://localhost:3000/tools
- **Contact**: http://localhost:3000/contact

---

## Testing Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## Common Tasks

### Update Firm Contact Info
Edit `.env.local` file:
```env
NEXT_PUBLIC_FIRM_EMAIL=info@mmanico.com
NEXT_PUBLIC_FIRM_PHONE="+91 96328 18089"
NEXT_PUBLIC_WHATSAPP_NUMBER="919632818089"
```

### Stop Development Server
Press `Ctrl + C` in the terminal

### Clear Build Cache
```bash
rm -rf .next
npm run build
```

---

## Troubleshooting

**Port 3000 already in use?**
```bash
# Use a different port
PORT=3001 npm run dev
```

**Build errors?**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Need help?**
- Check README.md for detailed documentation
- Email: info@mmanico.com
