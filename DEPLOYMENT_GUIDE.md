# Dashiell LLC Website Deployment Guide

This guide provides comprehensive instructions for deploying the Dashiell LLC Next.js website to production environments. The website is built with Next.js 15.3.0 using the App Router architecture.

## Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Deploying to Vercel (Recommended)](#deploying-to-vercel-recommended)
3. [Alternative Deployment Options](#alternative-deployment-options)
   - [Netlify](#netlify)
   - [AWS Amplify](#aws-amplify)
   - [Traditional Hosting](#traditional-hosting)
4. [Post-Deployment Steps](#post-deployment-steps)

## Pre-Deployment Checklist

Before deploying your Next.js application, complete the following checklist to ensure optimal performance and functionality:

### Build Optimization

1. **Run production build locally**:
   ```bash
   npm run build
   ```
   Verify that the build completes without errors and check the build output for optimization opportunities.

2. **Test the production build**:
   ```bash
   npm run start
   ```
   Navigate to http://localhost:3000 and verify all pages and functionality work as expected.

3. **Check bundle size**:
   Review the build output to identify large bundles that might need optimization.

### Code Quality

1. **Run linting**:
   ```bash
   npm run lint
   ```
   Fix any linting errors before deployment.

2. **Check TypeScript errors**:
   Ensure there are no TypeScript errors in your codebase.

### Testing

1. **Cross-browser testing**: Test the website in multiple browsers (Chrome, Firefox, Safari, Edge).
2. **Mobile responsiveness**: Test on various device sizes to ensure responsive design works correctly.
3. **Functionality testing**: Test all interactive elements, forms, and navigation.
4. **Performance testing**: Use Lighthouse or similar tools to check performance metrics.

### SEO and Metadata

1. **Verify metadata**: Check that all pages have appropriate titles, descriptions, and Open Graph tags.
2. **Check robots.txt**: Ensure robots.txt is configured correctly if needed.
3. **Sitemap**: Generate and verify sitemap.xml if needed.

## Deploying to Vercel (Recommended)

Vercel is the platform created by the team behind Next.js and offers the most seamless deployment experience.

### Account Setup

1. **Create a Vercel account**:
   - Go to [vercel.com](https://vercel.com) and sign up for an account
   - You can sign up using GitHub, GitLab, Bitbucket, or email

### Connecting to a Git Repository

1. **Push your code to a Git repository**:
   - Create a repository on GitHub, GitLab, or Bitbucket
   - Initialize Git in your project if not already done:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     ```
   - Add your remote repository:
     ```bash
     git remote add origin <repository-url>
     git push -u origin main
     ```

2. **Import your repository to Vercel**:
   - From the Vercel dashboard, click "Add New..." → "Project"
   - Select your Git provider and authorize Vercel if prompted
   - Select the repository containing your Next.js project
   - Vercel will automatically detect that it's a Next.js project

### Deployment Configuration

1. **Configure project settings**:
   - **Project Name**: Enter a name for your project (e.g., "dashiell-llc-website")
   - **Framework Preset**: Vercel should automatically detect Next.js
   - **Root Directory**: Leave as `.` if your project is at the root of the repository
   - **Build Command**: The default `next build` is correct
   - **Output Directory**: Leave blank as Next.js handles this automatically
   - **Install Command**: The default `npm install` is correct

2. **Advanced settings** (if needed):
   - Click "Show advanced" to access additional configuration options
   - **Node.js Version**: Set to the version you're using locally (recommended: 18.x or newer)

3. **Deploy**:
   - Click "Deploy" to start the deployment process
   - Vercel will clone your repository, install dependencies, build the project, and deploy it

### Environment Variables (if needed)

Although the current project doesn't use environment variables, if you add them in the future:

1. **Add environment variables**:
   - In the Vercel dashboard, go to your project
   - Navigate to "Settings" → "Environment Variables"
   - Add each environment variable with its key and value
   - Select the environments where each variable should be available (Production, Preview, Development)

2. **Types of environment variables**:
   - **Plain Text**: Regular environment variables
   - **Secret**: Sensitive information that will be encrypted
   - **System**: Variables provided by Vercel

### Domain Setup

1. **Add a custom domain**:
   - In the Vercel dashboard, go to your project
   - Navigate to "Settings" → "Domains"
   - Click "Add" and enter your domain name (e.g., dashiellllc.com)
   - Follow the instructions to configure your DNS settings:
     - Option 1: Use Vercel as your nameserver
     - Option 2: Add DNS records to your current DNS provider

2. **Configure DNS**:
   - If using your existing DNS provider, add the required records:
     - For apex domain (dashiellllc.com): Add an A record pointing to Vercel's IP
     - For www subdomain: Add a CNAME record pointing to your Vercel deployment URL

3. **SSL/TLS Certificate**:
   - Vercel automatically provisions and renews SSL certificates for your domains
   - No additional configuration is required

### Continuous Deployment

Vercel automatically sets up continuous deployment:

1. **Automatic deployments**:
   - When you push changes to your repository, Vercel automatically deploys them
   - Each pull request gets a preview deployment

2. **Configure deployment settings** (optional):
   - Go to "Settings" → "Git"
   - Configure production branch, preview branches, and other Git-related settings

## Alternative Deployment Options

### Netlify

Netlify is another excellent platform for deploying Next.js applications with similar features to Vercel.

#### Deployment Steps

1. **Create a Netlify account**:
   - Go to [netlify.com](https://netlify.com) and sign up

2. **Connect your repository**:
   - Click "New site from Git"
   - Select your Git provider and repository

3. **Configure build settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next` (or `.netlify/functions-internal/server` if using SSR)
   - **Advanced build settings**: Add environment variables if needed

4. **Deploy site**:
   - Click "Deploy site"

5. **Configure for SSR** (important for Next.js App Router):
   - Create a `netlify.toml` file in your project root:
     ```toml
     [build]
       command = "npm run build"
       publish = ".next"
     
     [[plugins]]
       package = "@netlify/plugin-nextjs"
     ```
   - Install the Netlify Next.js plugin:
     ```bash
     npm install -D @netlify/plugin-nextjs
     ```

6. **Custom domain setup**:
   - In the Netlify dashboard, go to "Domain settings"
   - Click "Add custom domain" and follow the instructions

### AWS Amplify

AWS Amplify provides a powerful platform for deploying and hosting Next.js applications with AWS infrastructure.

#### Deployment Steps

1. **Set up an AWS account**:
   - Go to [aws.amazon.com](https://aws.amazon.com) and create an account if you don't have one

2. **Install and configure the Amplify CLI** (optional):
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

3. **Deploy via Amplify Console**:
   - Go to the [AWS Amplify Console](https://console.aws.amazon.com/amplify/home)
   - Click "New app" → "Host web app"
   - Connect your Git provider and select your repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Output directory**: `.next`
   - Add the following to your `amplify.yml` configuration:
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm ci
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: .next
         files:
           - '**/*'
       cache:
         paths:
           - node_modules/**/*
     ```
   - For SSR support, add the following to your `next.config.ts`:
     ```typescript
     // Add to your existing config
     experimental: {
       outputFileTracing: true,
     }
     ```

4. **Custom domain setup**:
   - In the Amplify Console, go to "Domain management"
   - Click "Add domain" and follow the instructions

### Traditional Hosting

For more control or specific requirements, you can deploy your Next.js application to traditional hosting environments.

#### Option 1: Node.js Server

1. **Build your application**:
   ```bash
   npm run build
   ```

2. **Transfer files to your server**:
   - Upload the following directories/files to your server:
     - `.next/`
     - `node_modules/` (or install dependencies on the server)
     - `package.json`
     - `package-lock.json`
     - `public/`
     - Any other files needed for your application

3. **Install dependencies on the server** (if not uploaded):
   ```bash
   npm ci --production
   ```

4. **Start the Next.js server**:
   ```bash
   npm run start
   ```

5. **Set up a process manager** (recommended):
   - Install PM2:
     ```bash
     npm install -g pm2
     ```
   - Start your application with PM2:
     ```bash
     pm2 start npm --name "dashiell-website" -- start
     ```
   - Configure PM2 to start on system boot:
     ```bash
     pm2 startup
     pm2 save
     ```

6. **Set up a reverse proxy** (recommended):
   - Install and configure Nginx or Apache
   - Example Nginx configuration:
     ```nginx
     server {
         listen 80;
         server_name dashiellllc.com www.dashiellllc.com;
         
         location / {
             proxy_pass http://localhost:3000;
             proxy_http_version 1.1;
             proxy_set_header Upgrade $http_upgrade;
             proxy_set_header Connection 'upgrade';
             proxy_set_header Host $host;
             proxy_cache_bypass $http_upgrade;
         }
     }
     ```

7. **Set up SSL** (recommended):
   - Use Let's Encrypt with Certbot to obtain and configure SSL certificates

#### Option 2: Static Export (for static sites only)

Note: This option is only suitable if your site doesn't use Server-Side Rendering (SSR) or API routes.

1. **Add export script to package.json**:
   ```json
   "scripts": {
     "export": "next build && next export"
   }
   ```

2. **Generate static files**:
   ```bash
   npm run export
   ```

3. **Upload the `out` directory** to any static hosting service:
   - AWS S3 + CloudFront
   - GitHub Pages
   - Nginx/Apache web server

## Post-Deployment Steps

### Verifying the Deployment

1. **Check all pages and functionality**:
   - Visit your deployed website
   - Test all interactive elements
   - Verify all pages load correctly
   - Test responsive design on different devices

2. **Check for console errors**:
   - Open browser developer tools
   - Look for any JavaScript errors or warnings

3. **Verify redirects and custom routes**:
   - Test all redirects configured in `next.config.ts`
   - Ensure dynamic routes work correctly

### Setting Up Analytics

1. **Google Analytics**:
   - Create a Google Analytics account if you don't have one
   - Get your measurement ID (G-XXXXXXXXXX)
   - Add the Google Analytics script to your application:
     - Create a custom document in `pages/_document.tsx` or
     - Use a third-party package like `@next/third-parties`

2. **Vercel Analytics** (if using Vercel):
   - Enable Vercel Analytics in the Vercel dashboard
   - Install the required package:
     ```bash
     npm install @vercel/analytics
     ```
   - Add the analytics component to your app:
     ```tsx
     // In app/layout.tsx
     import { Analytics } from '@vercel/analytics/react';
     
     export default function RootLayout({ children }) {
       return (
         <html lang="en">
           <body>
             {children}
             <Analytics />
           </body>
         </html>
       );
     }
     ```

3. **Other analytics options**:
   - Plausible Analytics (privacy-focused)
   - Fathom Analytics (privacy-focused)
   - Mixpanel (for more detailed user behavior tracking)

### Monitoring Performance

1. **Set up monitoring tools**:
   - **Vercel Analytics** (if using Vercel)
   - **Google Search Console**: Register your site to monitor search performance
   - **Sentry**: For error tracking and performance monitoring
     ```bash
     npm install @sentry/nextjs
     ```

2. **Configure Core Web Vitals monitoring**:
   - Use tools like Lighthouse, PageSpeed Insights, or Web Vitals library
   - Monitor LCP, FID, and CLS metrics

3. **Set up uptime monitoring**:
   - UptimeRobot (free tier available)
   - Pingdom
   - StatusCake

### Ongoing Maintenance

1. **Regular updates**:
   - Keep Next.js and other dependencies updated
   - Monitor security advisories

2. **Backup strategy**:
   - Ensure your code is backed up (Git repository)
   - Consider database backups if applicable

3. **Performance optimization**:
   - Regularly review performance metrics
   - Optimize images and assets
   - Consider implementing a CDN if not already using one

## Conclusion

This deployment guide covers the essential steps for deploying your Dashiell LLC Next.js website to production. Vercel is the recommended platform for the smoothest deployment experience, but the alternative options provided can also be effective depending on your specific requirements.

For ongoing support and updates, refer to the official Next.js documentation at [nextjs.org/docs](https://nextjs.org/docs).