# L&B Aesthetic Suppliers — Project Documentation

## Stack
- **Astro 4** (static output — `output: 'static'`)
- **Tailwind CSS** via `@astrojs/tailwind`
- **Decap CMS** (formerly Netlify CMS) — loaded from CDN in `/public/admin/index.html`
- **Netlify Forms** — order and contact form submissions (no payment gateway)
- **Netlify Identity** — CMS authentication
- **Google Fonts** — Playfair Display (headings) + DM Sans (body)

## Directory Structure

```
src/
  components/
    NavBar.astro          — Sticky top navigation, mobile hamburger menu
    HeroSection.astro     — Full-width hero with featured product cards
    AboutSection.astro    — Brand intro + trust signals
    ShopSection.astro     — Product grid with category filter tabs
    ProductCard.astro     — Individual product card with qty/variants/add-to-order
    OrderSidebar.astro    — Floating order basket, checkout form, confirmation + bank details
    HowToOrderSection.astro — 4-step process explanation
    ContactSection.astro  — Contact info + Netlify contact form
    Footer.astro          — Nav links, socials, business info
  content/
    config.ts             — Astro content collection schemas (products + settings)
    products/             — 30 JSON product files (one per product)
    settings/
      site.json           — Business name, contact details, bank details, social URLs
  layouts/
    Layout.astro          — Base HTML layout (fonts, meta, Netlify Identity script)
  pages/
    index.astro           — Single-page app, loads all content collections
public/
  admin/
    index.html            — Decap CMS entry point
    config.yml            — Decap CMS collections config (Products + Site Settings)
  images/products/        — Product images (upload via CMS or manually)
  lbaestheticsuppliers-logo.jpg — Client logo (referenced in NavBar + Footer)
```

## Colour Palette & Design System

Brand gradient: coral orange → hot pink → magenta → purple → blue-violet
```css
background: linear-gradient(135deg, #FF6B4A 0%, #FF3E7E 30%, #D4148A 55%, #8B1FC8 80%, #5B21B6 100%);
```
Cream backgrounds: `#FAF7F4` (light) / `#F2EDE8` (dark)

Tailwind custom utilities defined in `tailwind.config.mjs`:
- `bg-brand-gradient` — the full gradient
- `bg-brand-gradient-soft` — transparent/pastel version for backgrounds
- `font-serif` → Playfair Display
- `font-sans` → DM Sans

## How to Add a Product

**Via CMS:** Go to `/admin`, log in with Netlify Identity, click Products → New Product.

**Manually:** Create a new `.json` file in `src/content/products/` following this shape:
```json
{
  "name": "Product Name",
  "description": "Product description.",
  "category": "Gloves & PPE",
  "price": 9.99,
  "priceTBC": true,
  "image1": "/images/products/my-image.jpg",
  "image2": "/images/products/my-image-2.jpg",
  "hasVariants": false,
  "stockStatus": "In Stock",
  "featured": false,
  "sku": "SKU-001"
}
```

Valid categories: `Gloves & PPE`, `Skincare & Retail`, `Equipment & Tools`,
`Waxing & Hair Removal`, `Lash & Brow`, `Hygiene & Sterilisation`

## How to Update Bank Details

Edit `src/content/settings/site.json` directly, or via CMS → Site Settings.
Bank details are embedded in the order confirmation message shown to customers after ordering.

## Order Flow

1. Customer adds products to order (client-side JS in `OrderSidebar.astro`)
2. Customer fills in name, email, phone, address — submits form
3. Form posts to Netlify Forms (`order-enquiry`) — no server required
4. Netlify notifies `orders@lbaestheticsuppliers.com` with order details
5. Customer sees on-page confirmation with order summary + bank transfer instructions
6. Customer pays via bank transfer using their name as reference
7. Store owner dispatches on payment confirmation

## Netlify Setup Checklist

On first deploy:
1. Enable **Netlify Identity** in Site Settings → Identity
2. Enable **Git Gateway** in Identity → Services
3. Set registration to **Invite only** (Identity → Registration)
4. Invite yourself as admin to access `/admin`
5. Set form notification email in Forms → order-enquiry → Settings → Email notifications
6. Replace placeholder bank details in `src/content/settings/site.json`
7. Add the real logo file as `public/lbaestheticsuppliers-logo.jpg`

## Build & Dev

```bash
npm install
npm run dev        # dev server at http://localhost:4321
npm run build      # static output to /dist
npm run preview    # preview built site
```

## Placeholder Content

All placeholder content is marked with `// TODO: replace with real content before going live`
comments. Key items:
- `src/content/settings/site.json` — bank details, phone, address
- All 30 product prices have `priceTBC: true`
- Product images are SVG placeholders — replace with real photos
- About section copy in `AboutSection.astro`
