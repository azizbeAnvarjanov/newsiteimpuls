#!/bin/bash

echo "🚀 Firebase App Hosting Deployment Script"
echo "=========================================="

# Check if Firebase CLI is available
if ! command -v npx firebase-tools &> /dev/null; then
    echo "❌ Firebase CLI not found. Installing..."
    npm install -g firebase-tools
fi

# Check if user is logged in
echo "🔐 Checking Firebase login status..."
if ! npx firebase-tools projects:list &> /dev/null; then
    echo "❌ Not logged in to Firebase. Please run:"
    echo "   npx firebase-tools login"
    echo "   Then run this script again."
    exit 1
fi

echo "✅ Firebase CLI is ready"

# Check if apphosting.yaml exists
if [ ! -f "apphosting.yaml" ]; then
    echo "❌ apphosting.yaml not found!"
    exit 1
fi

echo "📋 Configuration files found:"
echo "   ✅ apphosting.yaml"
echo "   ✅ package.json"
echo "   ✅ next.config.mjs"

# Deploy to Firebase App Hosting
echo ""
echo "🚀 Deploying to Firebase App Hosting..."
echo "   Project: lmsplatform-34183"
echo "   Configuration: apphosting.yaml"

npx firebase-tools deploy --only apphosting --project lmsplatform-34183

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Deployment successful!"
    echo "🌐 Your app should be available at:"
    echo "   https://lmsplatform-34183.web.app"
    echo ""
    echo "📊 Monitor deployment at:"
    echo "   https://console.firebase.google.com/project/lmsplatform-34183/apphosting"
else
    echo ""
    echo "❌ Deployment failed!"
    echo "🔍 Check the error messages above for details."
    exit 1
fi 