

## Vizag Electro — Premium Electrical Services Website

### Overview
A modern, dark-themed, glassmorphism-styled React SPA for **Vizag Electro - The EEE Services**, featuring smooth Framer Motion animations, HLS hero video, and WhatsApp contact integration.

### Design System
- **Background:** #010101 (near black)
- **Accent Gradient:** from-[#FA93FA] via-[#C967E8] to-[#983AD6]
- **Gold accent (from logo):** #D4A825 for highlights
- **Typography:** Modern sans-serif, bold headings, clean body text
- **UI Style:** Glassmorphism cards (semi-transparent bg, backdrop-blur, subtle borders)

### Pages & Structure

#### 1. **Home Page**
- **Announcement pill:** "Used by homeowners. Trusted by professionals."
- **Hero section:** Large tagline "Your Vision. Our Electrical Precision." with gradient text, subtext about powering homes/offices/hospitals/schools, "Book a Service" CTA button
- **Hero video:** HLS stream via hls.js with MP4 fallback, mix-blend-screen, gradient overlay
- **Infinite logo slider** below video (animated brand logos)
- **Services preview cards** (8 categories) with "View All Services" button
- **24 Hour Emergency Service** highlight banner

#### 2. **Services Page**
- 8 service category cards with background images, glassmorphism overlay
- Categories: Appliance Installation & Repair, Fans, Lighting, Switch/Socket/Smart Home, Inverter & Stabilizer, MCB/Submeter/Wiring, Home Automation, General Services
- Each card links to a **dynamic detail page** showing all sub-services, related products, and a "Back to Services" button

#### 3. **Products Page**
- Products grouped by category (Fans, Lighting, Appliances, Switch/Socket/Smart Home, Inverter & Stabilizer, MCB/Submeter/Wiring, General Professional Services)
- Each product has a card with hover animation and an "Add" button
- **"Add" redirects to Contact page** with the product pre-selected in the dropdown

#### 4. **About Page**
- Company overview (Residential, Commercial, Industrial services)
- **Why Choose Us** section: Affordable price, Excellent customer service, Safe work practices, Quality workmanship, 24 Hour Emergency Service
- Call-to-action: "FOR MORE INFO CALL 7981188798"

#### 5. **Contact Page**
- Business details card (address, phone, email, hours)
- **Contact form:** Name, Email, Mobile (required), Service dropdown (optional), Product dropdown (optional), Message (required)
- On submit → redirect to WhatsApp (7981188798) with prefilled message
- **UC Cover section:** Safety First, Insurance Protection, Verified Experts, Standardized Process
- **Important Notes:** Diagnosis fee, spare parts cost, final estimate, pre-existing issues, warranty terms

### Navigation & Footer
- **Navbar:** Logo + brand name, links to all pages, mobile hamburger menu
- **Footer:** Quick Links, Services Links, Contact Info with icons, copyright "© {year} Vizag Electro", "Made with ❤️ by StaffArc" with logo + link

### Technical Implementation
- Copy uploaded logo to project assets
- Install framer-motion, hls.js, clsx, tailwind-merge
- Lazy-load all pages for performance
- Scroll-to-top on route change
- Add vercel.json for SPA routing
- All service/product data stored in TypeScript data files for easy maintenance
- Dynamic routing: `/services/:categorySlug` for each service detail page

### Animations (Framer Motion)
- Page transitions (fade + slide)
- Scroll reveal on sections
- Hover effects on cards
- Infinite horizontal logo slider
- Staggered card entry animations

