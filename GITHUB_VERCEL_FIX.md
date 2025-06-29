# 🔧 Fix GitHub to Vercel Deployment Issues

## 🚨 Common Issues & Solutions

### Issue 1: Repository Not Connected to Vercel

**Problem**: Your GitHub repository isn't connected to Vercel for automatic deployments.

**Solution**:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Click "Import Git Repository"
4. Find and select `azizbeAnvarjanov/imiwebsite`
5. If not listed, click "Configure GitHub App" and authorize Vercel

### Issue 2: Vercel GitHub App Not Installed

**Problem**: Vercel doesn't have access to your GitHub repository.

**Solution**:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Settings" → "Git"
3. Click "Install Vercel for GitHub"
4. Authorize Vercel to access your repositories
5. Select `azizbeAnvarjanov/imiwebsite` repository

### Issue 3: Build Configuration Issues

**Problem**: Vercel doesn't know how to build your Next.js project.

**Solution**:

1. In Vercel project settings, ensure:
   - **Framework Preset**: Next.js
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
   - **Root Directory**: `./` (leave empty)

### Issue 4: Environment Variables Missing

**Problem**: Build fails because Firebase environment variables are not set.

**Solution**:

1. In Vercel project settings, go to "Environment Variables"
2. Add these variables:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

## 🚀 Step-by-Step Fix Guide

### Step 1: Verify GitHub Repository

```bash
# Check your repository is properly connected
git remote -v
# Should show: origin  https://github.com/azizbeAnvarjanov/imiwebsite.git

# Push latest changes
git add .
git commit -m "Fix Vercel deployment configuration"
git push origin main
```

### Step 2: Connect Repository to Vercel

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Click "New Project"**
3. **Import Git Repository**:
   - Search for `azizbeAnvarjanov/imiwebsite`
   - Click "Import"
4. **Configure Project**:
   - **Project Name**: `imiwebsite` (or your preferred name)
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (leave empty)
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

### Step 3: Set Environment Variables

1. **In Vercel project settings**:

   - Go to "Settings" → "Environment Variables"
   - Add each Firebase variable:

   ```
   NEXT_PUBLIC_FIREBASE_API_KEY
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
   NEXT_PUBLIC_FIREBASE_PROJECT_ID
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
   NEXT_PUBLIC_FIREBASE_APP_ID
   ```

2. **Set for all environments**:
   - Production: ✅
   - Preview: ✅
   - Development: ✅

### Step 4: Deploy

1. **Click "Deploy"** in Vercel
2. **Wait for build to complete**
3. **Check deployment logs** for any errors

### Step 5: Enable Automatic Deployments

1. **In Vercel project settings**:
   - Go to "Git" section
   - Ensure "Auto Deploy" is enabled
   - Set "Production Branch" to `main`

## 🔍 Troubleshooting

### If Build Fails

1. **Check Vercel Build Logs**:

   - Go to your project in Vercel Dashboard
   - Click on the failed deployment
   - Check "Build Logs" for errors

2. **Common Build Errors**:
   - **Missing dependencies**: Add to `package.json`
   - **Environment variables**: Set in Vercel settings
   - **Node.js version**: Already set to 22 in `package.json`

### If Repository Not Found

1. **Check GitHub Permissions**:

   - Go to GitHub Settings → Applications → Authorized OAuth Apps
   - Ensure Vercel has access to your repositories

2. **Reinstall Vercel GitHub App**:
   - Go to Vercel Dashboard → Settings → Git
   - Click "Configure" next to GitHub
   - Re-authorize and select repositories

### If Deployments Don't Trigger

1. **Check Branch Settings**:

   - Ensure "Production Branch" is set to `main`
   - Verify you're pushing to the correct branch

2. **Check Auto Deploy Settings**:
   - Go to Vercel project settings → Git
   - Ensure "Auto Deploy" is enabled

## ✅ Verification Checklist

After following the steps above, verify:

- [ ] Repository is connected to Vercel
- [ ] Environment variables are set
- [ ] Build configuration is correct
- [ ] Auto deploy is enabled
- [ ] Production branch is set to `main`
- [ ] Push to GitHub triggers Vercel deployment
- [ ] Build completes successfully
- [ ] Website is accessible at Vercel URL

## 🎯 Quick Fix Commands

```bash
# 1. Ensure all changes are committed
git add .
git commit -m "Fix Vercel deployment"
git push origin main

# 2. Check if Vercel CLI is installed
vercel --version

# 3. If not installed, install it
npm install -g vercel

# 4. Link to Vercel project (if needed)
vercel link

# 5. Deploy manually (if needed)
vercel --prod
```

## 📞 Support

If you still have issues:

1. **Check Vercel Status**: https://vercel-status.com/
2. **Vercel Documentation**: https://vercel.com/docs
3. **GitHub Actions Logs**: Check your repository's Actions tab
4. **Vercel Support**: Contact Vercel support if needed

## 🎉 Success Indicators

Your GitHub to Vercel deployment is working when:

- ✅ Push to `main` branch triggers Vercel deployment
- ✅ Build completes without errors
- ✅ Website is accessible at your Vercel URL
- ✅ Environment variables are working
- ✅ All functionality operates correctly

---

**Your project is ready for GitHub to Vercel deployment!** 🚀
