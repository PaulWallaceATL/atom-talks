# Deployment Guide

## Deploying to Vercel

This guide will walk you through deploying your GenAI Next.js application to Vercel with Payload CMS.

### Prerequisites

- A GitHub, GitLab, or Bitbucket account
- A Vercel account (free tier available at [vercel.com](https://vercel.com))
- A MongoDB Atlas account (free tier available at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas))

### Step 1: Set Up MongoDB Atlas

1. **Create a MongoDB Atlas Account:**
   - Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for a free account

2. **Create a New Cluster:**
   - Click "Build a Database"
   - Choose the free tier (M0)
   - Select your preferred region
   - Click "Create Cluster"

3. **Configure Database Access:**
   - Go to "Database Access" in the left sidebar
   - Click "Add New Database User"
   - Create a username and strong password (save these!)
   - Give the user "Read and write to any database" permissions

4. **Configure Network Access:**
   - Go to "Network Access" in the left sidebar
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
   - This is necessary for Vercel's dynamic IPs
   - Click "Confirm"

5. **Get Your Connection String:**
   - Go to "Database" in the left sidebar
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user's password
   - Replace `<dbname>` with `genai` (or your preferred database name)
   - Your final string should look like:
     ```
     mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/genai?retryWrites=true&w=majority
     ```

### Step 2: Push Your Code to Git

1. **Initialize Git (if not already done):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to your Git provider:**
   ```bash
   # For GitHub
   git remote add origin https://github.com/yourusername/your-repo.git
   git branch -M main
   git push -u origin main
   ```

### Step 3: Deploy to Vercel

1. **Import Your Project:**
   - Go to [vercel.com](https://vercel.com) and log in
   - Click "Add New Project"
   - Import your repository from GitHub/GitLab/Bitbucket
   - Select your repository

2. **Configure Project:**
   - Framework Preset: Next.js (should be auto-detected)
   - Root Directory: `./` (or leave as default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

3. **Add Environment Variables:**
   Click "Environment Variables" and add the following:

   **PAYLOAD_SECRET:**
   ```
   Generate a secure random string (at least 32 characters)
   You can use: openssl rand -base64 32
   Or: https://generate-secret.vercel.app/32
   ```

   **DATABASE_URI:**
   ```
   Your MongoDB Atlas connection string from Step 1
   Example: mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/genai?retryWrites=true&w=majority
   ```

   **NEXT_PUBLIC_SERVER_URL:**
   ```
   This will be your Vercel URL
   For now, use: https://your-project-name.vercel.app
   You can update this after deployment
   ```

4. **Deploy:**
   - Click "Deploy"
   - Wait for the build to complete (usually 2-5 minutes)
   - Your site will be live!

### Step 4: Post-Deployment Setup

1. **Update NEXT_PUBLIC_SERVER_URL:**
   - After deployment, copy your actual Vercel URL
   - Go to Project Settings > Environment Variables
   - Update `NEXT_PUBLIC_SERVER_URL` with your actual URL
   - Redeploy the project

2. **Create Your First Admin User:**
   - Visit `https://your-project.vercel.app/admin`
   - Fill out the form to create your first admin user
   - You can now log in and start managing content!

3. **Test Your Deployment:**
   - Visit your site's homepage
   - Visit the admin panel at `/admin`
   - Create some test content
   - Verify everything works as expected

### Step 5: Custom Domain (Optional)

1. **Add Custom Domain in Vercel:**
   - Go to Project Settings > Domains
   - Add your custom domain
   - Follow Vercel's instructions to configure DNS

2. **Update Environment Variable:**
   - Update `NEXT_PUBLIC_SERVER_URL` to your custom domain
   - Redeploy

## Automatic Deployments

Vercel automatically deploys your site when you push to your main branch:

- Push to `main` branch → Production deployment
- Push to other branches → Preview deployment

## Environment Variables for Different Environments

You can set different environment variables for:
- **Production**: Used for main branch deployments
- **Preview**: Used for pull request/branch deployments
- **Development**: Local development only

## Troubleshooting

### Build Fails

1. Check the build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify environment variables are set correctly
4. Try building locally: `npm run build`

### Database Connection Issues

1. Verify MongoDB Atlas connection string is correct
2. Ensure IP whitelist includes 0.0.0.0/0
3. Check database user has correct permissions
4. Verify password in connection string doesn't have special characters (URL encode if needed)

### Admin Panel Not Loading

1. Check browser console for errors
2. Verify `NEXT_PUBLIC_SERVER_URL` is set correctly
3. Clear browser cache and cookies
4. Try incognito/private browsing mode

### 404 Errors

1. Ensure `.next` directory is being built
2. Check `next.config.ts` is properly configured
3. Verify file structure matches expected paths

## Monitoring and Logs

- View logs in Vercel Dashboard > Deployments > [Your Deployment] > Logs
- Set up Vercel Analytics for performance monitoring
- Use MongoDB Atlas monitoring for database performance

## Rolling Back

If something goes wrong:

1. Go to Vercel Dashboard > Deployments
2. Find a previous working deployment
3. Click the three dots menu
4. Select "Promote to Production"

## Security Best Practices

1. **Never commit `.env` files to Git**
2. **Use strong, unique passwords** for MongoDB users
3. **Rotate secrets regularly** (PAYLOAD_SECRET)
4. **Keep dependencies updated**:
   ```bash
   npm update
   npm audit fix
   ```
5. **Enable 2FA** on Vercel and MongoDB Atlas accounts

## Cost Optimization

**Free Tier Limits:**
- Vercel: 100GB bandwidth, 6000 build minutes/month
- MongoDB Atlas: 512MB storage, shared cluster

**Tips:**
- Use Next.js Image Optimization for smaller images
- Implement caching strategies
- Monitor usage in dashboards
- Upgrade to paid tiers if needed

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)
- [MongoDB Atlas Support](https://www.mongodb.com/docs/atlas/)
- [Payload CMS Discord](https://discord.com/invite/payload)
- [Next.js GitHub Discussions](https://github.com/vercel/next.js/discussions)

## Next Steps

After successful deployment:

1. ✅ Set up custom domain
2. ✅ Configure email notifications in Payload
3. ✅ Add more content through the admin panel
4. ✅ Set up analytics (Vercel Analytics, Google Analytics)
5. ✅ Configure SEO settings
6. ✅ Set up backups for MongoDB
7. ✅ Add monitoring and alerting

