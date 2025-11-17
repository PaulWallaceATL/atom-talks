# Quick Start Guide

Get your GenAI Next.js site running in 5 minutes!

## Prerequisites

- Node.js 18 or higher
- MongoDB (local or MongoDB Atlas account)

## Steps

### 1. Install Dependencies

```bash
cd nextjs-site
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the `nextjs-site` directory:

```bash
# Copy the example file
cp .env.example .env.local
```

Edit `.env.local` and set:

```env
PAYLOAD_SECRET=your-secure-secret-key-at-least-32-characters-long
DATABASE_URI=mongodb://localhost:27017/genai
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

**To generate a secure secret:**

```bash
# On macOS/Linux:
openssl rand -base64 32

# Or use an online generator:
# https://generate-secret.vercel.app/32
```

### 3. Start MongoDB

**Option A: Local MongoDB**

```bash
# macOS/Linux
mongod

# Windows
"C:\Program Files\MongoDB\Server\<version>\bin\mongod.exe"
```

**Option B: MongoDB Atlas (Cloud)**

1. Sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get your connection string
4. Update `DATABASE_URI` in `.env.local`

### 4. Run the Development Server

```bash
npm run dev
```

### 5. Open Your Browser

- **Website:** [http://localhost:3000](http://localhost:3000)
- **Admin Panel:** [http://localhost:3000/admin](http://localhost:3000/admin)

### 6. Create Your First Admin User

1. Visit [http://localhost:3000/admin](http://localhost:3000/admin)
2. Fill out the registration form
3. Start managing content!

## That's It! 🎉

Your site is now running. Check out these pages:

- Home: [http://localhost:3000](http://localhost:3000)
- About: [http://localhost:3000/about](http://localhost:3000/about)
- Blog: [http://localhost:3000/blog](http://localhost:3000/blog)
- Contact: [http://localhost:3000/contact](http://localhost:3000/contact)
- Pricing: [http://localhost:3000/pricing](http://localhost:3000/pricing)
- Admin: [http://localhost:3000/admin](http://localhost:3000/admin)

## Next Steps

1. **Customize Content:**
   - Log into the admin panel
   - Create blog posts, testimonials, pricing plans, etc.

2. **Add More Pages:**
   - See `MIGRATION_NOTES.md` for guidance
   - Follow the pattern in existing pages

3. **Deploy to Production:**
   - See `DEPLOYMENT.md` for full instructions
   - Deploy to Vercel in minutes!

## Troubleshooting

### MongoDB Connection Error

**Error:** `MongoServerError: connection refused`

**Solution:**
- Make sure MongoDB is running
- Check your `DATABASE_URI` in `.env.local`
- For MongoDB Atlas, verify IP whitelist settings

### Port Already in Use

**Error:** `Port 3000 is already in use`

**Solution:**
```bash
# Kill the process using port 3000
# macOS/Linux:
lsof -ti:3000 | xargs kill -9

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port:
npm run dev -- -p 3001
```

### Build Errors

**Solution:**
```bash
# Clear the Next.js cache and rebuild
rm -rf .next
npm run dev
```

### Need More Help?

- See `README.md` for detailed documentation
- See `MIGRATION_NOTES.md` for migration details
- See `DEPLOYMENT.md` for deployment guide

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

Happy coding! 🚀

