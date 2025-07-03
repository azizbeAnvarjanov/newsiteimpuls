# 🔥 Firebase Hosting Deployment Setup Guide

## 📋 Prerequisites

1. **Firebase Project**: Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. **GitHub Repository**: Your code should be in a GitHub repository
3. **Firebase CLI**: Install Firebase CLI locally for initial setup

## 🚀 Step-by-Step Setup

### Step 1: Initialize Firebase in Your Project

```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in your project
firebase init hosting

# Select your project and configure:
# - Public directory: out
# - Configure as single-page app: Yes
# - Set up automatic builds: No
```

### Step 2: Create Firebase Service Account

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to **Project Settings** → **Service Accounts**
4. Click **Generate new private key**
5. Download the JSON file
6. **Keep this file secure** - it contains sensitive credentials

### Step 3: Configure GitHub Secrets

Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions**

Add the following secrets:

#### 🔑 Required Secrets for Production

```
FIREBASE_PROJECT_ID=your-firebase-project-id
FIREBASE_SERVICE_ACCOUNT={"type":"service_account","project_id":"...","private_key_id":"...","private_key":"...","client_email":"...","client_id":"...","auth_uri":"...","token_uri":"...","auth_provider_x509_cert_url":"...","client_x509_cert_url":"..."}

NEXT_PUBLIC_FIREBASE_API=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_P_ID=your-project-id
NEXT_PUBLIC_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_M_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

#### 🔑 Optional Secrets for Staging

```
FIREBASE_PROJECT_ID_STAGING=your-staging-firebase-project-id
FIREBASE_SERVICE_ACCOUNT_STAGING={"type":"service_account",...}

NEXT_PUBLIC_FIREBASE_API_STAGING=your-staging-firebase-api-key
NEXT_PUBLIC_FIREBASE_DOMAIN_STAGING=your-staging-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_P_ID_STAGING=your-staging-project-id
NEXT_PUBLIC_STORAGE_BUCKET_STAGING=your-staging-project.appspot.com
NEXT_PUBLIC_M_SENDER_ID_STAGING=your-staging-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID_STAGING=your-staging-app-id
```

### Step 4: Get Firebase Configuration Values

1. **Firebase Project ID**: Found in Firebase Console → Project Settings
2. **Firebase API Key**: Found in Firebase Console → Project Settings → General → Your apps
3. **Auth Domain**: Usually `your-project-id.firebaseapp.com`
4. **Storage Bucket**: Usually `your-project-id.appspot.com`
5. **Messaging Sender ID**: Found in Firebase Console → Project Settings → Cloud Messaging
6. **App ID**: Found in Firebase Console → Project Settings → General → Your apps

### Step 5: Configure Firebase Hosting

The workflow will automatically:

- Build your Next.js application
- Export static files to the `out` directory
- Deploy to Firebase Hosting
- Upload environment configuration to Firebase Storage

## 🔧 Configuration Files

### firebase.json

```json
{
  "hosting": {
    "public": "out",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(js|css)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      }
    ],
    "cleanUrls": true,
    "trailingSlash": false
  },
  "storage": {
    "rules": "storage.rules"
  }
}
```

### storage.rules

```
rules_version = '2';

service firebase.storage {
  match /b/{bucket}/o {
    match /config/{allPaths=**} {
      allow read: if request.auth != null;
      allow write: if false;
    }

    match /public/{allPaths=**} {
      allow read: if true;
      allow write: if false;
    }

    match /{allPaths=**} {
      allow read, write: if false;
    }
  }
}
```

## 🚀 Deployment Workflow

### Automatic Deployment

- **Push to `main` branch**: Deploys to production
- **Push to `develop` branch**: Deploys to staging (if configured)
- **Pull Request**: Runs build and tests

### Manual Deployment

1. Go to **Actions** tab in your GitHub repository
2. Select **"Deploy to Firebase Hosting"** workflow
3. Click **"Run workflow"**
4. Choose environment (production/staging)
5. Click **"Run workflow"**

## 📁 Environment File Management

The workflow automatically:

1. Creates `.env` during build
2. Uploads environment backup to Firebase Storage at `/config/`
3. Maintains separate staging configs at `/config/staging/`

### Accessing Environment Files

```javascript
// In your Firebase app
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const storage = getStorage();
const envRef = ref(storage, "config/.env.backup");
const url = await getDownloadURL(envRef);
```

## 🔒 Security Considerations

1. **Service Account**: Never commit the service account JSON to your repository
2. **Environment Variables**: Use GitHub Secrets for all sensitive data
3. **Storage Rules**: Configure proper access controls in `storage.rules`
4. **HTTPS**: Firebase Hosting automatically provides HTTPS

## 🐛 Troubleshooting

### Common Issues

1. **Build Fails**: Check Node.js version and dependencies
2. **Deployment Fails**: Verify Firebase service account and project ID
3. **Environment Variables Missing**: Ensure all secrets are set in GitHub
4. **Storage Upload Fails**: Check Firebase Storage rules and permissions

### Debug Commands

```bash
# Test Firebase connection locally
firebase projects:list

# Test deployment locally
firebase deploy --only hosting

# Check Firebase CLI version
firebase --version
```

## 📊 Monitoring

After deployment, monitor:

- **Firebase Console**: Hosting dashboard
- **GitHub Actions**: Workflow execution logs
- **Firebase Storage**: Environment file uploads
- **Website**: Live application functionality

## 🎉 Success Indicators

Your Firebase deployment is working when:

- ✅ GitHub Actions workflow completes successfully
- ✅ Website is accessible at your Firebase hosting URL
- ✅ Environment files are uploaded to Firebase Storage
- ✅ All functionality operates correctly
- ✅ HTTPS is working properly

---

**Your Next.js app is now ready for Firebase Hosting deployment!** 🚀
