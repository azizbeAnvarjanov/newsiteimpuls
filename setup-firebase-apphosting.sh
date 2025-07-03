#!/bin/bash

# Firebase App Hosting Setup Script for Next.js Project
# This script helps initialize Firebase App Hosting for deployment

set -e  # Exit on any error

echo "🔥 Firebase App Hosting Setup Script for Next.js Project"
echo "========================================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
print_status "Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 22 or higher."
    exit 1
fi

NODE_VERSION=$(node -v)
print_success "Node.js version: $NODE_VERSION"

# Check if npm is installed
print_status "Checking npm installation..."
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed."
    exit 1
fi

# Check if Firebase CLI is installed
print_status "Checking Firebase CLI installation..."
if ! command -v firebase &> /dev/null; then
    print_warning "Firebase CLI not found. Installing..."
    npm install -g firebase-tools
    print_success "Firebase CLI installed successfully"
else
    print_success "Firebase CLI is already installed"
fi

# Check Firebase CLI version
FIREBASE_VERSION=$(firebase --version)
print_success "Firebase CLI version: $FIREBASE_VERSION"

# Check if user is logged in to Firebase
print_status "Checking Firebase authentication..."
if ! firebase projects:list &> /dev/null; then
    print_warning "Not logged in to Firebase. Please login..."
    firebase login
else
    print_success "Already logged in to Firebase"
fi

# List available projects
print_status "Available Firebase projects:"
firebase projects:list

echo ""
print_status "Next steps for Firebase App Hosting setup:"
echo "================================================"
echo ""
echo "1. 🔧 Initialize Firebase App Hosting:"
echo "   firebase init apphosting"
echo ""
echo "2. 📝 Configure the following when prompted:"
echo "   - Select your Firebase project"
echo "   - Choose region for your backend"
echo "   - Set up GitHub connection"
echo "   - Configure deployment settings"
echo ""
echo "3. 🔑 Create Firebase Secrets:"
echo "   firebase apphosting:secrets:set firebase-api-key"
echo "   firebase apphosting:secrets:set firebase-auth-domain"
echo "   firebase apphosting:secrets:set firebase-project-id"
echo "   firebase apphosting:secrets:set firebase-storage-bucket"
echo "   firebase apphosting:secrets:set firebase-messaging-sender-id"
echo "   firebase apphosting:secrets:set firebase-app-id"
echo ""
echo "4. 🗝️  Set up GitHub Secrets (if using GitHub Actions):"
echo "   - Go to your GitHub repository → Settings → Secrets and variables → Actions"
echo "   - Add the secrets listed in FIREBASE_APPHOSTING_SETUP.md"
echo ""
echo "5. 🚀 Deploy:"
echo "   - Push to main branch to trigger automatic deployment"
echo "   - Or run manually: firebase deploy --only apphosting"
echo ""
print_success "Setup script completed! 🎉" 