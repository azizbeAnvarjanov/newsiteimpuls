# 🔥 Firebase App Hosting Deployment Fix

## 🚨 Problem Identified

The error you encountered was:

```
Error resolving secret version with name=projects/lmsplatform-34183/secrets/firebase-api-key/versions/latest
```

This happened because your `apphosting.yaml` was trying to use secrets that don't exist in Cloud Secret Manager.

## ✅ Solution Applied

### 1. Fixed Environment Variable Names

**Before (❌ Broken):**

```yaml
- variable: NEXT_PUBLIC_FIREBASE_P_ID
  secret: firebase-project-id

- variable: NEXT_PUBLIC_STORAGE_BUCKET
  secret: firebase-storage-bucket

- variable: NEXT_PUBLIC_M_SENDER_ID
  secret: firebase-messaging-sender-id
```

**After (✅ Fixed):**

```yaml
- variable: NEXT_PUBLIC_FIREBASE_PROJECT_ID
  value: lmsplatform-34183

- variable: NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
  value: lmsplatform-34183.appspot.com

- variable: NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
  value: "546025729505"
```

### 2. Switched from Secrets to Direct Values

Instead of using Cloud Secret Manager secrets (which don't exist), I switched to using direct values in `apphosting.yaml`. This is simpler and works immediately.

### 3. Updated GitHub Actions

Fixed the environment variable names in the GitHub Actions workflow to match the corrected names.

## 🚀 How to Deploy Now

### Option 1: Manual Deployment (Recommended for testing)

1. **Login to Firebase:**

   ```bash
   npx firebase-tools login
   ```

2. **Deploy using the script:**
   ```bash
   ./deploy-apphosting.sh
   ```

### Option 2: GitHub Actions Deployment

1. **Update GitHub Secrets** (if you want to use secrets instead of direct values):

   Go to your GitHub repository → Settings → Secrets and variables → Actions

   Add these secrets with the correct names:

   ```
   NEXT_PUBLIC_FIREBASE_API=AIzaSyBC39k0GVssvBfKjk8XWzHmS5ChleZdPoY
   NEXT_PUBLIC_FIREBASE_DOMAIN=lmsplatform-34183.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=lmsplatform-34183
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=lmsplatform-34183.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=546025729505
   NEXT_PUBLIC_FIREBASE_APP_ID=1:546025729505:web:ee7f9fbd5da85c8fc1b6a0
   FIREBASE_SERVICE_ACCOUNT=your-service-account-json
   FIREBASE_PROJECT_ID=lmsplatform-34183
   ```

2. **Push to main branch** - Automatic deployment will trigger

## 📋 Files Updated

1. **`apphosting.yaml`** - Fixed environment variable names and switched to direct values
2. **`apphosting.staging.yaml`** - Commented out until staging environment is set up
3. **`.github/workflows/firebase-apphosting-deploy.yml`** - Updated environment variable names
4. **`deploy-apphosting.sh`** - Created deployment script
5. **`src/app/firebase.js`** - Fixed environment variable names (from previous fix)

## 🔒 Security Note

The Firebase configuration values are now directly in `apphosting.yaml`. This is acceptable because:

- These are public Firebase config values (they're exposed in client-side code anyway)
- They're not sensitive secrets like private keys
- This approach is simpler and more reliable

## 🎯 Next Steps

1. **Test the deployment:**

   ```bash
   ./deploy-apphosting.sh
   ```

2. **Monitor the deployment:**

   - Check Firebase Console: https://console.firebase.google.com/project/lmsplatform-34183/apphosting
   - Your app will be available at: https://lmsplatform-34183.web.app

3. **If you want to use secrets later:**
   - Create secrets in Cloud Secret Manager
   - Update `apphosting.yaml` to use `secret:` instead of `value:`
   - Grant access to App Hosting backend

## 🐛 Troubleshooting

### If deployment still fails:

1. **Check Firebase CLI version:**

   ```bash
   npx firebase-tools --version
   ```

2. **Verify login:**

   ```bash
   npx firebase-tools projects:list
   ```

3. **Check project access:**

   ```bash
   npx firebase-tools use lmsplatform-34183
   ```

4. **Manual deployment:**
   ```bash
   npx firebase-tools deploy --only apphosting --project lmsplatform-34183
   ```

## 📞 Support

If you encounter any issues:

1. Check the Firebase Console for detailed error messages
2. Verify your Firebase project has App Hosting enabled
3. Ensure you have the necessary permissions on the Firebase project

---

**Your Firebase App Hosting deployment should now work correctly!** 🎉
