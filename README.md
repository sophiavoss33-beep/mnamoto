# MNA Moto Website

Production-ready Next.js 15 website for MNA Moto — Victoria's premier motorcycle and outdoor power equipment dealer.

## Tech Stack

- **Framework:** Next.js 15 (App Router, static generation)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React
- **Fonts:** Space Grotesk + Manrope (Google Fonts via `<link>`)

---

## Deploy in 5 Minutes

### Option A — Vercel CLI (recommended)
```bash
npm install
npm i -g vercel
vercel
```
Follow the prompts. Done.

### Option B — GitHub → Vercel Dashboard
1. `git init && git add . && git commit -m "Initial commit"`
2. Push to GitHub
3. Go to [vercel.com/new](https://vercel.com/new) → Import repo
4. Framework auto-detected as Next.js → click **Deploy**

### Option C — Local preview
```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## Project Structure

```
mnamoto/
├── app/
│   ├── layout.tsx              # Root layout, fonts, SEO meta, Schema.org
│   ├── globals.css             # Tailwind + custom keyframes
│   ├── page.tsx                # Homepage (all sections assembled)
│   ├── motorcycles/page.tsx    # Motorcycles listing
│   ├── motorcycles/new/        # New bikes (stub, ready to expand)
│   ├── motorcycles/used/       # Used bikes (stub)
│   ├── motorcycles/atv/        # ATVs & UTVs (stub)
│   ├── motorcycles/youth/      # Youth bikes (stub)
│   ├── workshop/
│   │   ├── page.tsx            # Workshop overview (stub)
│   │   └── book/page.tsx       # ✅ Booking form (fully built)
│   ├── contact/page.tsx        # ✅ Contact page + enquiry form
│   ├── outdoor-power/          # Power equipment (stub)
│   ├── parts/                  # Parts & gear (stub)
│   ├── finance/                # Finance (stub)
│   ├── brands/                 # Brands (stub)
│   ├── about/                  # About us (stub)
│   ├── faq/                    # FAQ (stub)
│   └── ...legal pages
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky nav, mega menus, mobile drawer
│   │   └── Footer.tsx          # Full footer with links + socials
│   ├── sections/
│   │   ├── Hero.tsx            # Full-screen hero with real showroom photo
│   │   ├── QuickLinks.tsx      # 6-slot icon quick-nav bar
│   │   ├── FeaturedBikes.tsx   # 3-up bike cards (YCF, CFMOTO, Sunday)
│   │   ├── BrandsStrip.tsx     # Animated scrolling brand ticker
│   │   ├── ShowroomGallery.tsx # Bento photo grid from supplied images
│   │   ├── Workshop.tsx        # Dark workshop section with services list
│   │   ├── GearSection.tsx     # 3-up gear categories with photos
│   │   ├── Finance.tsx         # Finance overview + live calculator
│   │   ├── Reviews.tsx         # 6 customer review cards
│   │   ├── NewsletterCTA.tsx   # Orange newsletter bar + Why MNA grid
│   │   └── ContactStrip.tsx    # Hours, phone, email, directions
│   ├── forms/
│   │   ├── BookingForm.tsx     # Full workshop booking (validated)
│   │   └── ContactForm.tsx     # General enquiry (validated)
│   └── ui/
│       └── BackToTop.tsx       # Scroll-to-top button
│
├── public/images/
│   ├── bikes/
│   │   ├── ycf-125se-mx.jpg        # YCF 125SE MX in paddock
│   │   ├── sunday-x124se.jpg       # Sunday X 124SE range
│   │   └── cfmoto-atv-range.jpg    # CFMOTO ATV pricing display
│   ├── showroom/
│   │   ├── showroom-floor.jpg      # GASGAS + CFMOTO on showroom floor
│   │   ├── parts-wall.jpg          # RHK parts wall
│   │   └── power-equipment.jpg     # Indoor power equipment section
│   ├── gear/
│   │   ├── helmets-goggles.jpg     # Thor/Fox helmets + 100% goggles
│   │   ├── riding-gear-wall.jpg    # Fox boots and helmet wall
│   │   └── thor-jerseys.jpg        # Thor jersey rack
│   └── store/
│       └── storefront.jpg          # MNA Moto shopfront exterior
│
├── lib/utils.ts                # cn() utility
├── vercel.json                 # Vercel deployment config
├── .gitignore
└── README.md

```

---

## Before Going Live — Checklist

### Replace placeholders
- [ ] Search `07 XXXX XXXX` → real phone number
- [ ] Search `info@mnamoto.com.au` → real email (if different)
- [ ] Search `Main Street, Victoria` → real street address
- [ ] Search `ABN XX XXX XXX XXX` → real ABN
- [ ] Update `metadataBase` in `app/layout.tsx` → production URL

### Google Maps
In `app/contact/page.tsx`, replace the map placeholder div with:
```jsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_ID"
  width="100%" height="280" style={{border:0}} allowFullScreen
  loading="lazy" referrerPolicy="no-referrer-when-downgrade"
  title="MNA Moto location"
/>
```

### Forms
The booking and contact forms currently console-log data. Wire them to:
- Your email provider (Resend, SendGrid, Nodemailer)
- Or a form service (Formspree, Netlify Forms)

Create `app/api/booking/route.ts` and `app/api/contact/route.ts` as API routes.

### Google Reviews
Replace static reviews in `Reviews.tsx` with a live widget:
- [Elfsight Google Reviews](https://elfsight.com/google-reviews-widget/)
- Or the Google Places API

### Analytics
Add to `app/layout.tsx`:
```tsx
// Google Analytics 4
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
```

---

## Brands Stocked
KTM · Husqvarna · GASGAS · CFMOTO · YCF · Sunday · Thor · Fox Racing · 100% · RHK · Motorex · Oregon · Greenworks

## Authorised Dealer For
KTM · Husqvarna · GASGAS · CFMOTO · YCF · Sunday

---

© MNA Moto. Website built by Claude.
