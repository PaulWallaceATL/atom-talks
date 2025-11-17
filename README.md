# AtomTalks - AI Agent Platform

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FPaulWallaceATL%2Fatom-talks)

A modern AI Agent platform built with Next.js 15, TypeScript, Payload CMS, and enhanced with [ReactBits](https://reactbits.dev/) animations.

## 🚀 Features

- ✅ **Next.js 15** with App Router for optimal performance
- ✅ **TypeScript** for type safety
- ✅ **Payload CMS** for headless content management
- ✅ **ReactBits Animations** - Beautiful, interactive UI components
- ✅ **Framer Motion** for smooth animations
- ✅ **Bootstrap 5** for responsive design
- ✅ **SCSS** for powerful styling
- ✅ **MongoDB** integration for data storage
- ✅ **SEO Optimized** with proper metadata
- ✅ **Dark Mode** native support
- ✅ **Vercel Ready** - Deploy in minutes

## 🎨 ReactBits Components

The site features premium animations from ReactBits including:

- **ParticlesBackground** - Connected particle networks
- **FloatingElements** - Ambient gradient orbs
- **GradientBlob** - Morphing gradient shapes
- **GridBackground** - Animated grid patterns
- **MeshGradient** - Flowing gradient meshes
- **DotPattern** - Animated dot backgrounds
- **CardSpotlight** - 3D tilt effects on hover
- **GlowingCard** - Cards with animated glow
- **ShimmerButton** - Buttons with shimmer effects
- **TypewriterText** - Smooth typewriter animations
- **FadeInSection** - Scroll-triggered fade-ins

## 🛠️ Tech Stack

- **Framework:** Next.js 15.2.3
- **Language:** TypeScript 5
- **Styling:** Bootstrap 5.3 + SCSS + Custom Animations
- **Animations:** Framer Motion + ReactBits
- **CMS:** Payload CMS 3.x
- **Database:** MongoDB
- **Deployment:** Vercel
- **Package Manager:** npm

## 🏃 Quick Start

### Prerequisites

- Node.js 18 or higher
- MongoDB (local or MongoDB Atlas)

### Installation

```bash
# Clone the repository
git clone https://github.com/PaulWallaceATL/atom-talks.git
cd atom-talks

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Start MongoDB (if running locally)
mongod

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file:

```env
# Payload CMS
PAYLOAD_SECRET=your-secret-key-at-least-32-characters
DATABASE_URI=mongodb://localhost:27017/atomtalks

# Next.js
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

## 📁 Project Structure

```
atom-talks/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── (payload)/          # Payload CMS routes
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
├── public/
│   └── images/                 # Static assets
├── payload.config.ts           # Payload CMS config
└── vercel.json                 # Vercel deployment config
```

## 🎯 Key Pages

- **Home** (`/`) - Landing page with hero, features, pricing, and FAQ
- **Contact** (`/contact`) - Contact form with animated UI
- **Admin** (`/admin`) - Payload CMS admin panel
- **API** (`/api`) - Payload CMS API routes

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

## 🚀 Deployment

### Deploy to Vercel

1. **Click the Deploy button** above, or:

2. **Manual deployment:**
   ```bash
   # Push to GitHub
   git push origin main
   
   # Import to Vercel
   # Go to vercel.com
   # Import your repository
   # Add environment variables
   # Deploy!
   ```

3. **Environment Variables on Vercel:**
   - `PAYLOAD_SECRET` - Secure random string (32+ chars)
   - `DATABASE_URI` - MongoDB Atlas connection string
   - `NEXT_PUBLIC_SERVER_URL` - Your Vercel URL

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 📊 Payload CMS Collections

- **Users** - Admin authentication
- **Pages** - Dynamic pages
- **Blog Posts** - Article management
- **Use Cases** - Product use cases
- **Testimonials** - Customer reviews
- **Pricing Plans** - Pricing tiers

Access the admin panel at `/admin` after deployment.

## 🔧 Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🎨 Customization

### Update Content

1. **Via Code:** Edit component files in `src/components/`
2. **Via CMS:** Use Payload CMS admin at `/admin`

### Modify Styles

- **Global styles:** `src/styles/globals.scss`
- **Variables:** `src/styles/_variables.scss`
- **Components:** `src/styles/components/`

### Add ReactBits Components

All ReactBits components are in `src/components/reactbits/`. To add more:

1. Visit [reactbits.dev](https://reactbits.dev/)
2. Copy component code (TypeScript + CSS variant)
3. Add to `src/components/reactbits/`
4. Import and use in your pages

## 📖 Documentation

- [Quick Start Guide](./QUICK_START.md)
- [Migration Notes](./MIGRATION_NOTES.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [Company Info](./COMPANY_INFO.md)

## 🌟 Key Features

### Intelligent AI Agent Platform

- **Deploy in 24 Hours** - Production-ready RAG agents
- **Zero Engineering** - No coding required
- **Emotional Intelligence** - 53-point emotion detection
- **Voice + Chat** - Dual-interface support
- **Dual Persona** - Sales and support in one agent

## 🤝 Contributing

This is a proprietary project for AtomTalks. For questions or support, contact hello@atomtalks.com.

## 📄 License

Proprietary - All rights reserved AtomTalks © 2025

## 🔗 Links

- **Website:** http://localhost:3000 (local dev)
- **GitHub:** https://github.com/PaulWallaceATL/atom-talks
- **ReactBits:** https://reactbits.dev/

## 💻 Built With

- [Next.js](https://nextjs.org/)
- [Payload CMS](https://payloadcms.com/)
- [ReactBits](https://reactbits.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [Bootstrap](https://getbootstrap.com/)
- [MongoDB](https://www.mongodb.com/)

---

**Made with ❤️ by the AtomTalks team**
