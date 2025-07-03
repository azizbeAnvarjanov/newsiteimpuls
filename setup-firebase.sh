#!/bin/bash

# Firebase Setup Script for Next.js Project
# This script helps initialize Firebase for hosting deployment

set -e  # Exit on any error

echo "🔥 Firebase Setup Script for Next.js Project"
echo "============================================="

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
print_status "Next steps:"
echo "============="
echo ""
echo "1. 🔧 Initialize Firebase in your project:"
echo "   firebase init hosting"
echo ""
echo "2. 📝 Configure the following when prompted:"
echo "   - Select your Firebase project"
echo "   - Public directory: out"
echo "   - Configure as single-page app: Yes"
echo "   - Set up automatic builds: No"
echo ""
echo "3. 🔑 Create Firebase Service Account:"
echo "   - Go to Firebase Console → Project Settings → Service Accounts"
echo "   - Click 'Generate new private key'"
echo "   - Download the JSON file"
echo ""
echo "4. 🗝️  Set up GitHub Secrets:"
echo "   - Go to your GitHub repository → Settings → Secrets and variables → Actions"
echo "   - Add the secrets listed in FIREBASE_DEPLOYMENT_SETUP.md"
echo ""
echo "5. 🚀 Deploy:"
echo "   - Push to main branch to trigger automatic deployment"
echo "   - Or run manually from GitHub Actions tab"
echo ""
print_success "Setup script completed! 🎉" 