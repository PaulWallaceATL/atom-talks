# Migration Notes: HTML to Next.js with Payload CMS

## Overview

Your GenAI HTML website has been successfully converted to a Next.js application with Payload CMS integration. This document outlines what has been completed and what you can do next.

## ✅ What's Been Completed

### 1. Project Setup
- ✅ Next.js 15 with App Router initialized
- ✅ TypeScript configuration
- ✅ SASS/SCSS support configured
- ✅ Bootstrap 5 integrated
- ✅ All styles migrated from `genai-dev/src/scss/` to `nextjs-site/src/styles/`
- ✅ All images copied to `nextjs-site/public/images/`

### 2. Payload CMS Integration
- ✅ Payload CMS installed and configured
- ✅ MongoDB adapter set up
- ✅ Admin panel routes created (`/admin`)
- ✅ API routes created (`/api`)
- ✅ Collections defined:
  - Users (with authentication)
  - Pages
  - Blog Posts
  - Use Cases
  - Testimonials
  - Pricing Plans

### 3. Components Converted
The following React components have been created from the original HTML:

- ✅ `Navbar` - Navigation with dropdown menus
- ✅ `Hero1` - Hero section with animated typing
- ✅ `Features1` - Features showcase
- ✅ `Features3` - Alternative features layout
- ✅ `Pricing1` - Pricing plans section
- ✅ `FAQ` - Frequently asked questions accordion
- ✅ `CTA1` - Call-to-action section
- ✅ `Footer` - Footer with links
- ✅ `ClientScripts` - Client-side JavaScript initialization

### 4. Pages Created
- ✅ `/` (Home page) - Fully functional with all sections
- ✅ `/about` - About page with team section
- ✅ `/blog` - Blog listing page with example posts
- ✅ `/contact` - Contact form page
- ✅ `/pricing` - Pricing plans page
- ✅ `/admin` - Payload CMS admin panel

### 5. Deployment Configuration
- ✅ Vercel configuration (`vercel.json`)
- ✅ Environment variable setup
- ✅ `.gitignore` configured properly
- ✅ Comprehensive deployment guide (`DEPLOYMENT.md`)
- ✅ README with setup instructions

## 📋 What You Can Do Next

### Immediate Next Steps

1. **Start the Development Server:**
   ```bash
   cd nextjs-site
   npm install
   npm run dev
   ```

2. **Set Up Environment Variables:**
   - Copy `.env.example` to `.env.local`
   - Add your MongoDB connection string
   - Generate a secure `PAYLOAD_SECRET`

3. **Create Your First Admin User:**
   - Visit `http://localhost:3000/admin`
   - Fill out the registration form
   - Start managing content!

### Pages You Can Add

The following pages from the original HTML site haven't been created yet, but you can easily add them following the patterns in the existing pages:

#### Authentication Pages
- `/login` - User login page
- `/register` - User registration page
- `/forgot-password` - Password recovery page

#### Content Pages
- `/use-cases` - Use cases listing page
- `/use-cases/[slug]` - Individual use case details
- `/blog/[slug]` - Individual blog post page

#### Alternative Layouts
- `/index-2` - Alternative homepage layout
- `/about-lite` - Light version of about page
- `/blog-lite` - Light version of blog page
- `/contact-lite` - Light version of contact page
- `/pricing-lite` - Light version of pricing page

### Creating New Pages

Here's a template for creating new pages:

```tsx
// src/app/your-page/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Your Page Title - GenAI',
  description: 'Your page description',
};

export default function YourPage() {
  return (
    <div className="wrapper d-flex flex-column justify-between">
      <Navbar dark={true} extraClassList="bg-dark" />

      <main className="flex-grow-1">
        {/* Page Header */}
        <section className="py-10 py-lg-15 bg-striped">
          <div className="container">
            <div className="text-center">
              <h3 className="text-white mb-2">Page Title</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-center fs-sm">
                  <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Your Page</li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* Your Content Here */}
        
      </main>

      <Footer dark={true} extraClassList="bg-striped pt-10 pt-lg-15" />
    </div>
  );
}
```

### Creating New Components

If you need additional components from the original HTML:

1. Look at the HTML file in `genai-dev/src/html/_components/`
2. Create a new file in `nextjs-site/src/components/`
3. Convert the HTML to JSX
4. Replace conditional attributes with React's conditional rendering
5. Use Next.js `Image` component for images
6. Use Next.js `Link` component for internal links

Example of converting conditional classes:

```tsx
// Original HTML with @@if conditions:
<div class="@@if(context.dark){text-white}@@if(!context.dark){text-dark}">

// Converted to React:
<div className={dark ? 'text-white' : 'text-dark'}>
```

## 🔧 Customization Guide

### Modifying Styles

1. **Global styles:**
   - Edit `src/styles/globals.scss`

2. **Bootstrap variables:**
   - Edit `src/styles/_variables.scss`
   - Customize colors, fonts, spacing, etc.

3. **Component styles:**
   - Edit files in `src/styles/components/`

### Adding Content via Payload CMS

1. Log into the admin panel at `/admin`
2. Navigate to the collection you want to manage
3. Click "Create New" to add content
4. Your content will be stored in MongoDB

### Fetching Content from Payload CMS

To use content from Payload CMS in your pages:

```tsx
// This would be a server component in Next.js
async function getBlogPosts() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/blog-posts`);
  const data = await response.json();
  return data.docs;
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  
  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
```

## 🚀 Deployment Checklist

Before deploying to production:

- [ ] Set up MongoDB Atlas account
- [ ] Create production database
- [ ] Generate secure `PAYLOAD_SECRET`
- [ ] Push code to GitHub/GitLab/Bitbucket
- [ ] Create Vercel account
- [ ] Import project to Vercel
- [ ] Add environment variables in Vercel
- [ ] Deploy!
- [ ] Create first admin user in production
- [ ] Test all functionality
- [ ] Set up custom domain (optional)

See `DEPLOYMENT.md` for detailed instructions.

## 📚 Key Differences from HTML Version

### Routing
- **HTML:** `about.html`, `blog.html`, etc.
- **Next.js:** `/about`, `/blog` (no .html extension)

### Images
- **HTML:** `<img src="assets/images/logo.svg">`
- **Next.js:** `<Image src="/images/logo.svg" width={165} height={50} />`

### Links
- **HTML:** `<a href="about.html">`
- **Next.js:** `<Link href="/about">`

### Scripts
- **HTML:** Scripts in `<script>` tags
- **Next.js:** ClientScripts component loads everything

### Data
- **HTML:** Static content in HTML files
- **Next.js + Payload:** Dynamic content from MongoDB via Payload CMS API

## 🐛 Common Issues & Solutions

### Issue: MongoDB connection error
**Solution:** 
- Verify your `DATABASE_URI` is correct
- Check MongoDB is running (if local)
- Verify IP whitelist in MongoDB Atlas (if cloud)

### Issue: Admin panel not loading
**Solution:**
- Clear browser cache
- Check console for errors
- Verify Payload CMS routes are set up correctly

### Issue: Images not loading
**Solution:**
- Ensure images are in `public/images/`
- Check image paths (they should start with `/images/`)
- Verify image files exist and have correct extensions

### Issue: Styles not working
**Solution:**
- Check SCSS compilation
- Verify `globals.scss` is imported in `layout.tsx`
- Clear `.next` directory and rebuild: `rm -rf .next && npm run dev`

## 📖 Additional Resources

- See `README.md` for setup instructions
- See `DEPLOYMENT.md` for deployment guide
- Original HTML files are in `genai-dev/` directory
- Styles migrated from `genai-dev/src/scss/` to `nextjs-site/src/styles/`

## 🎉 What's Great About This Setup

1. **No More .html URLs:** Clean, SEO-friendly URLs
2. **Dynamic Content:** Manage everything through Payload CMS
3. **Type Safety:** TypeScript catches errors before runtime
4. **Performance:** Next.js optimizations (image optimization, code splitting, etc.)
5. **Scalable:** Easy to add new pages and features
6. **Modern Stack:** Built with latest technologies
7. **Easy Deployment:** One-click deployment to Vercel
8. **SEO Optimized:** Built-in Next.js SEO features

## Need Help?

- Check the [Next.js Documentation](https://nextjs.org/docs)
- Check the [Payload CMS Documentation](https://payloadcms.com/docs)
- Look at existing pages and components for examples
- All original HTML files are preserved in `genai-dev/` for reference

Happy coding! 🚀

