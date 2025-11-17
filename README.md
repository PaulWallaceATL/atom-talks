# GenAI - Next.js with Payload CMS

A modern AI content writing and copywriting website built with Next.js 15, TypeScript, Payload CMS, and Bootstrap 5.

## Features

- ✅ Next.js 15 with App Router
- ✅ TypeScript for type safety
- ✅ Payload CMS for content management
- ✅ MongoDB for database
- ✅ Bootstrap 5 for styling
- ✅ SCSS support
- ✅ SEO optimized
- ✅ Responsive design
- ✅ Dark mode support
- ✅ Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- MongoDB database (local or MongoDB Atlas)

### Installation

1. **Clone and install dependencies:**

```bash
cd nextjs-site
npm install
```

2. **Set up environment variables:**

Create a `.env.local` file in the root directory:

```env
# Payload CMS
PAYLOAD_SECRET=your-secret-key-here-change-in-production
DATABASE_URI=mongodb://localhost:27017/genai

# For MongoDB Atlas (production):
# DATABASE_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/genai?retryWrites=true&w=majority

# Next.js
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

3. **Start MongoDB (if running locally):**

```bash
# macOS/Linux
mongod

# Windows
"C:\Program Files\MongoDB\Server\<version>\bin\mongod.exe"
```

4. **Run the development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

5. **Access Payload CMS Admin:**

Navigate to [http://localhost:3000/admin](http://localhost:3000/admin) to access the Payload CMS admin panel.

On first visit, you'll be prompted to create an admin user.

## Project Structure

```
nextjs-site/
├── src/
│   ├── app/               # Next.js app router pages
│   │   ├── (payload)/     # Payload CMS routes
│   │   │   ├── admin/     # Admin panel
│   │   │   └── api/       # API routes
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # React components
│   └── styles/           # SCSS styles
├── public/               # Static assets
│   └── images/          # Images and icons
├── payload.config.ts    # Payload CMS configuration
├── next.config.ts       # Next.js configuration
└── package.json         # Dependencies
```

## Payload CMS Collections

The project includes the following collections:

- **Users**: Admin users with authentication
- **Pages**: Custom pages with rich text content
- **Blog Posts**: Blog articles with categories and tags
- **Use Cases**: Product use case examples
- **Testimonials**: Customer reviews and testimonials
- **Pricing Plans**: Pricing tiers and features

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Pages

1. Create a new file in `src/app/[page-name]/page.tsx`
2. Import necessary components from `src/components/`
3. Follow the pattern from existing pages like `src/app/page.tsx`

Example:

```tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NewPage() {
  return (
    <div className="wrapper d-flex flex-column justify-between">
      <Navbar dark={true} extraClassList="bg-dark" />
      
      <main className="flex-grow-1">
        {/* Your page content */}
      </main>
      
      <Footer dark={true} extraClassList="bg-striped pt-10 pt-lg-15" />
    </div>
  );
}
```

### Creating New Components

1. Create a new file in `src/components/ComponentName.tsx`
2. Define props interface
3. Export the component

Example:

```tsx
interface ComponentProps {
  dark?: boolean;
  extraClassList?: string;
}

export default function Component({ dark = false, extraClassList = '' }: ComponentProps) {
  return (
    <section className={extraClassList}>
      {/* Component content */}
    </section>
  );
}
```

## Deployment

### Deploy to Vercel

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Import project in Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your repository

3. **Configure environment variables in Vercel:**
   - `PAYLOAD_SECRET`: A secure random string
   - `DATABASE_URI`: Your MongoDB Atlas connection string
   - `NEXT_PUBLIC_SERVER_URL`: Your Vercel deployment URL

4. **Deploy:**
   - Vercel will automatically build and deploy your site
   - The site will be available at your-project.vercel.app

### MongoDB Atlas Setup (for production)

1. Create a free account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get your connection string
4. Add it to your Vercel environment variables

### Important Notes for Production

- Always use a strong, unique `PAYLOAD_SECRET`
- Use MongoDB Atlas or another managed MongoDB service
- Enable IP whitelist in MongoDB Atlas (allow all IPs: 0.0.0.0/0 for Vercel)
- Set up proper CORS if using custom domains

## Customization

### Styling

- Global styles: `src/styles/globals.scss`
- Component styles: `src/styles/components/`
- Bootstrap variables: `src/styles/_variables.scss`

### Payload CMS

- Configuration: `payload.config.ts`
- Add new collections by modifying the config file
- Customize admin panel in the config

### Images

- Place images in `public/images/`
- Reference them as `/images/filename.ext` in your code
- Next.js will automatically optimize images

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Payload CMS Documentation](https://payloadcms.com/docs)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Vercel Documentation](https://vercel.com/docs)

## Support

For issues and questions:
- Check the [Next.js GitHub](https://github.com/vercel/next.js)
- Check the [Payload CMS Disc](https://discord.com/invite/payload)

## License

This project is based on the GenAI HTML template and has been converted to Next.js with Payload CMS integration.
