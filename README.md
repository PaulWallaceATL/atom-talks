# AtomTalks - AI Agent Platform

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FPaulWallaceATL%2Fatom-talks)

A modern AI Agent platform landing page built with Next.js 15, TypeScript, and enhanced with [ReactBits](https://reactbits.dev/) animations.

## 🚀 Features

- ✅ **Next.js 15** with App Router for optimal performance
- ✅ **TypeScript** for type safety
- ✅ **ReactBits Animations** - Beautiful, interactive UI components
- ✅ **Framer Motion** for smooth animations
- ✅ **Bootstrap 5** for responsive design
- ✅ **SCSS** for powerful styling
- ✅ **100% Static** - No database required!
- ✅ **SEO Optimized** with proper metadata
- ✅ **Dark Mode** native support
- ✅ **Vercel Ready** - Deploy in 60 seconds

## 🎨 Ultra-Premium Features

### ReactBits Components
Premium animations from [ReactBits](https://reactbits.dev/):
- **ParticlesBackground**, **FloatingElements**, **GradientBlob**
- **GridBackground**, **MeshGradient**, **DotPattern**
- **CardSpotlight**, **GlowingCard**, **ShimmerButton**
- **TypewriterText**, **FadeInSection**

### 🚀 NEW: Ultra-Premium Interactions
- **CustomCursor** - Context-aware cursor with spring physics
- **MagneticButton** - Buttons that attract your cursor
- **InteractiveParticles** - Mouse-reactive particle system
- **SplitText** - Advanced text reveal animations
- **ParallaxSection** - Multi-layer parallax effects
- **BentoGrid** - Modern asymmetric grid layouts
- **ScrollProgress** - Beautiful progress indicators
- **PageTransition** - Smooth page transitions
- **PremiumShowcase** - Interactive feature demonstrations

### 🎨 Advanced Effects
- **3D Transforms** - Depth and tilt interactions
- **Liquid Animations** - Morphing organic shapes
- **Holographic Effects** - Shimmer and shine
- **Neon Glows** - Pulsing light effects
- **Noise Textures** - Premium grain overlays
- **Gradient Meshes** - Multi-layer color systems

## 🛠️ Tech Stack

- **Framework:** Next.js 15.2.3
- **Language:** TypeScript 5
- **Styling:** Bootstrap 5.3 + SCSS + Custom Animations
- **Animations:** Framer Motion + ReactBits
- **Deployment:** Vercel
- **Package Manager:** npm

## 🏃 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/PaulWallaceATL/atom-talks.git
cd atom-talks

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### That's It! No Database Setup Required 🎉

This is a fully static site - no MongoDB, no backend, just beautiful Next.js pages.

## 📁 Project Structure

```
atom-talks/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── contact/            # Contact page
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/             # React components
│   │   ├── reactbits/          # ReactBits animation components
│   │   ├── Hero1.tsx           # Hero section
│   │   ├── Features1.tsx       # Features grid
│   │   ├── Pricing1.tsx        # Pricing plans
│   │   ├── FAQ.tsx             # FAQ accordion
│   │   ├── Navbar.tsx          # Navigation
│   │   └── Footer.tsx          # Footer
│   └── styles/                 # SCSS stylesheets
└── public/
    └── images/                 # Static assets
```

## 🎯 Pages

- **Home** (`/`) - Landing page with hero, features, pricing, and FAQ
- **Contact** (`/contact`) - Contact form with animated UI

## 🎨 UI/UX Features

### Animations

- **Scroll-triggered animations** - Content fades in as you scroll
- **3D card tilts** - Interactive hover effects on cards
- **Particle networks** - Animated particles with connection lines
- **Typewriter text** - Smooth typing animation in hero
- **Gradient morphing** - Dynamic gradient backgrounds
- **Shimmer buttons** - Eye-catching button effects

### Design Elements

- **Mesh gradients** - Modern, flowing backgrounds
- **Dot patterns** - Subtle animated textures
- **Glowing effects** - Cards that glow on hover
- **Floating elements** - Ambient background animations
- **Grid overlays** - Sophisticated grid patterns

## 🚀 Deploy to Vercel (60 Seconds!)

### Option 1: One-Click Deploy

Click the "Deploy with Vercel" button above.

### Option 2: Manual Deploy

1. **Push to GitHub** (already done ✅)

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import `PaulWallaceATL/atom-talks`
   - Choose a project name (e.g., `atomtalks-platform`)

3. **Configure (Optional):**
   - Framework: Next.js (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Environment Variables:**
   
   Only one variable needed (optional):
   
   ```
   NEXT_PUBLIC_SERVER_URL=https://your-project.vercel.app
   ```
   
   You can add this after deployment and redeploy.

5. **Click Deploy** - That's it! ✅

### Post-Deployment

1. After deployment, copy your Vercel URL (e.g., `atomtalks-platform.vercel.app`)
2. Add environment variable: `NEXT_PUBLIC_SERVER_URL=https://atomtalks-platform.vercel.app`
3. Redeploy (optional - for metadata links)

## 🔧 Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server  
npm run lint     # Run ESLint
```

## 🎨 Customization

### Update Content

Edit component files directly:
- **Hero text:** `src/components/Hero1.tsx`
- **Features:** `src/components/Features1.tsx`, `Features2.tsx`, `Features3.tsx`
- **Pricing:** `src/components/Pricing1.tsx`
- **FAQ:** `src/components/FAQ.tsx`

### Modify Styles

- **Global styles:** `src/styles/globals.scss`
- **Variables:** `src/styles/_variables.scss`
- **Components:** `src/styles/components/`
- **Animations:** `src/styles/animations.scss`

### Add More ReactBits

Browse [reactbits.dev](https://reactbits.dev/) for more components. Copy the TypeScript + CSS variant into `src/components/reactbits/`.

## 🌟 Key Features

### Intelligent AI Agent Platform

- **Deploy in 24 Hours** - Production-ready RAG agents
- **Zero Engineering** - No coding required
- **Emotional Intelligence** - 53-point emotion detection
- **Voice + Chat** - Dual-interface support
- **Dual Persona** - Sales and support in one agent

## 📊 Performance

- ✅ **100% Static** - No database calls
- ✅ **Fast Load Times** - Optimized images and code splitting
- ✅ **SEO Friendly** - Proper metadata and structure
- ✅ **Mobile Responsive** - Works on all devices
- ✅ **Accessibility** - WCAG compliant

## 🔗 Links

- **Website:** https://atomtalks-platform.vercel.app (after deployment)
- **GitHub:** https://github.com/PaulWallaceATL/atom-talks
- **ReactBits:** https://reactbits.dev/

## 💻 Built With

- [Next.js](https://nextjs.org/)
- [ReactBits](https://reactbits.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [Bootstrap](https://getbootstrap.com/)
- [TypeScript](https://www.typescriptlang.org/)

## 📄 License

Proprietary - All rights reserved AtomTalks © 2025

---

**Made with ❤️ by the AtomTalks team**

**Questions?** Contact us at hello@atomtalks.com
