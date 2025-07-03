# 🔥 Firebase App Hosting Setup Guide

## 📋 What is Firebase App Hosting?

Firebase App Hosting is a **serverless backend service** that automatically builds and deploys your web applications. Unlike Firebase Hosting (static hosting), App Hosting supports:

- ✅ **Server-Side Rendering (SSR)**
- ✅ **API Routes**
- ✅ **Dynamic content**
- ✅ **Next.js full features**
- ✅ **Automatic scaling**
- ✅ **GitHub integration**

## 🚀 Step-by-Step Setup

### Step 1: Prerequisites

1. **Firebase Project**: Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. **GitHub Repository**: Your code should be in a GitHub repository
3. **Firebase CLI**: Install Firebase CLI locally for initial setup

### Step 2: Initialize Firebase App Hosting

```bash
# Install Firebase CLI globally (if not already installed)
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize App Hosting
firebase init apphosting
```

**Configuration Options:**

- **Select your Firebase project**
- **Choose region** (recommended: us-central1)
- **Set up GitHub connection** (enable automatic deployments)
- **Configure deployment settings**:
  - Root directory: `/` (where package.json is located)
  - Live branch: `main`
  - Enable automatic rollouts: `Yes`
  - Backend name: `your-app-name`

### Step 3: Create Firebase Secrets

Firebase App Hosting uses Cloud Secret Manager for sensitive data. Create secrets for your Firebase configuration:

```bash
# Create secrets for Firebase configuration
firebase apphosting:secrets:set firebase-api-key
firebase apphosting:secrets:set firebase-auth-domain
firebase apphosting:secrets:set firebase-project-id
firebase apphosting:secrets:set firebase-storage-bucket
firebase apphosting:secrets:set firebase-messaging-sender-id
firebase apphosting:secrets:set firebase-app-id
```

**For each secret, you'll be prompted to enter the value:**

- `firebase-api-key`: Your Firebase API key
- `firebase-auth-domain`: Your project domain (e.g., `your-project.firebaseapp.com`)
- `firebase-project-id`: Your Firebase project ID
- `firebase-storage-bucket`: Your storage bucket (e.g., `your-project.appspot.com`)
- `firebase-messaging-sender-id`: Your messaging sender ID
- `firebase-app-id`: Your Firebase app ID

### Step 4: Configure apphosting.yaml

The `apphosting.yaml` file is already configured for your project. It includes:

```yaml
runConfig:
  cpu: 2
  memoryMiB: 1024
  maxInstances: 10
  minInstances: 0
  concurrency: 80

env:
  # Firebase Configuration
  - variable: NEXT_PUBLIC_FIREBASE_API
    secret: firebase-api-key
    availability:
      - BUILD
      - RUNTIME

  # ... other Firebase variables

scripts:
  buildCommand: npm run build
  runCommand: npm start
```

### Step 5: Set up GitHub Secrets (Optional)

If you want to use GitHub Actions for additional CI/CD, set these secrets in your GitHub repository:

**Go to**: GitHub Repository → Settings → Secrets and variables → Actions

**Add these secrets:**

```
FIREBASE_PROJECT_ID=your-firebase-project-id
FIREBASE_SERVICE_ACCOUNT={"type":"service_account",...}

NEXT_PUBLIC_FIREBASE_API=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_P_ID=your-project-id
NEXT_PUBLIC_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_M_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

## 🔧 Configuration Files

### apphosting.yaml

```yaml
runConfig:
  cpu: 2
  memoryMiB: 1024
  maxInstances: 10
  minInstances: 0
  concurrency: 80

env:
  # Firebase Configuration
  - variable: NEXT_PUBLIC_FIREBASE_API
    secret: firebase-api-key
    availability:
      - BUILD
      - RUNTIME

  - variable: NEXT_PUBLIC_FIREBASE_DOMAIN
    secret: firebase-auth-domain
    availability:
      - BUILD
      - RUNTIME

  - variable: NEXT_PUBLIC_FIREBASE_P_ID
    secret: firebase-project-id
    availability:
      - BUILD
      - RUNTIME

  - variable: NEXT_PUBLIC_STORAGE_BUCKET
    secret: firebase-storage-bucket
    availability:
      - BUILD
      - RUNTIME

  - variable: NEXT_PUBLIC_M_SENDER_ID
    secret: firebase-messaging-sender-id
    availability:
      - BUILD
      - RUNTIME

  - variable: NEXT_PUBLIC_FIREBASE_APP_ID
    secret: firebase-app-id
    availability:
      - BUILD
      - RUNTIME

  # Next.js Configuration
  - variable: NODE_ENV
    value: production
    availability:
      - BUILD
      - RUNTIME

  # Application Configuration
  - variable: APP_ENV
    value: production
    availability:
      - BUILD
      - RUNTIME

# Build and run scripts for Next.js
scripts:
  buildCommand: npm run build
  runCommand: npm start
```

## 🚀 Deployment Methods

### Method 1: Automatic GitHub Deployment (Recommended)

1. **Push to main branch** - Automatic deployment triggers
2. **Monitor deployment** in Firebase Console
3. **Check logs** if needed

### Method 2: Manual Deployment

```bash
# Deploy to production
firebase deploy --only apphosting

# Deploy to staging (if configured)
firebase deploy --only apphosting:staging
```

### Method 3: GitHub Actions (Additional CI/CD)

The workflow file `.github/workflows/firebase-apphosting-deploy.yml` provides:

- ✅ Build testing
- ✅ Linting
- ✅ Separate staging/production deployments
- ✅ Deployment notifications

## 🔒 Security Features

- ✅ **Secrets Management**: All sensitive data in Cloud Secret Manager
- ✅ **Environment Variables**: Secure access control
- ✅ **HTTPS**: Automatic SSL/TLS
- ✅ **IAM**: Role-based access control
- ✅ **VPC Support**: Network isolation if needed

## 📊 Monitoring and Management

### Firebase Console

- **App Hosting Dashboard**: Monitor deployments and performance
- **Logs**: View application and build logs
- **Metrics**: Performance and usage statistics

### CLI Commands

```bash
# List backends
firebase apphosting:backends:list

# View backend details
firebase apphosting:backends:get BACKEND_ID

# View logs
firebase apphosting:backends:logs BACKEND_ID

# Delete backend
firebase apphosting:backends:delete BACKEND_ID
```

## 🐛 Troubleshooting

### Common Issues

1. **Build Fails**:

   - Check Node.js version (requires 22.x)
   - Verify all dependencies are installed
   - Check build logs in Firebase Console

2. **Secrets Not Found**:

   - Ensure secrets are created in Cloud Secret Manager
   - Verify secret names match apphosting.yaml
   - Check permissions for App Hosting service

3. **Deployment Fails**:

   - Verify Firebase CLI version (13.15.4+)
   - Check project permissions
   - Review deployment logs

4. **Environment Variables Missing**:
   - Ensure all secrets are set
   - Check availability settings in apphosting.yaml
   - Verify variable names match your code

### Debug Commands

```bash
# Test Firebase connection
firebase projects:list

# Check App Hosting status
firebase apphosting:backends:list

# View detailed logs
firebase apphosting:backends:logs BACKEND_ID --limit=50

# Test local build
npm run build
```

## 🎯 Quick Start Commands

```bash
# 1. Run setup script
./setup-firebase-apphosting.sh

# 2. Initialize App Hosting
firebase init apphosting

# 3. Set secrets
firebase apphosting:secrets:set firebase-api-key
# ... repeat for all secrets

# 4. Deploy
firebase deploy --only apphosting
```

## 📈 Performance Optimization

### Resource Configuration

- **CPU**: 2 cores (good for most Next.js apps)
- **Memory**: 1024 MiB (sufficient for SSR)
- **Concurrency**: 80 requests per instance
- **Min Instances**: 0 (cost optimization)
- **Max Instances**: 10 (auto-scaling)

### Cost Optimization

- Set `minInstances: 0` for cost savings
- Use `maxInstances` to control costs
- Monitor usage in Firebase Console
- Consider staging environment for testing

## 🎉 Success Indicators

Your Firebase App Hosting deployment is working when:

- ✅ Backend created successfully
- ✅ GitHub integration working
- ✅ Automatic deployments trigger on push
- ✅ Website accessible at App Hosting URL
- ✅ All functionality working correctly
- ✅ Environment variables accessible
- ✅ Firebase services connected

---

**Your Next.js app is now ready for Firebase App Hosting deployment!** 🚀
