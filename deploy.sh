#!/bin/bash

# Vercel Deployment Script
# This script automates the deployment process with proper checks

set -e  # Exit on any error

echo "🚀 Starting Vercel Deployment Process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
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

# Check if Vercel CLI is installed
print_status "Checking Vercel CLI installation..."
if ! command -v vercel &> /dev/null; then
    print_warning "Vercel CLI not found. Installing..."
    npm install -g vercel
    print_success "Vercel CLI installed successfully"
else
    print_success "Vercel CLI is already installed"
fi

# Install dependencies
print_status "Installing dependencies..."
npm install
print_success "Dependencies installed successfully"

# Run linting
print_status "Running ESLint..."
npm run lint
print_success "Linting completed"

# Run build
print_status "Building the application..."
npm run build
print_success "Build completed successfully"

# Check for .vercel directory
if [ -d ".vercel" ]; then
    print_status "Found existing .vercel configuration"
else
    print_status "No .vercel configuration found - will create on first deployment"
fi

# Check for conflicting files
print_status "Checking for conflicting configuration files..."
if [ -f "now.json" ]; then
    print_error "Found now.json - this conflicts with vercel.json. Please remove now.json"
    exit 1
fi

if [ -d ".now" ]; then
    print_error "Found .now directory - this conflicts with .vercel. Please remove .now"
    exit 1
fi

print_success "No conflicting configuration files found"

# Check environment variables
print_status "Checking environment variables..."
if [ ! -f ".env.local" ]; then
    print_warning "No .env.local file found. Make sure to set environment variables in Vercel Dashboard:"
    echo "  - NEXT_PUBLIC_FIREBASE_API_KEY"
    echo "  - NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN"
    echo "  - NEXT_PUBLIC_FIREBASE_PROJECT_ID"
    echo "  - NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET"
    echo "  - NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"
    echo "  - NEXT_PUBLIC_FIREBASE_APP_ID"
fi

# Deploy to Vercel
print_status "Deploying to Vercel..."
echo ""
print_status "Follow the prompts to complete deployment:"
echo "  1. Link to existing project or create new"
echo "  2. Set production domain (optional)"
echo "  3. Configure environment variables if needed"
echo ""

vercel --prod

print_success "Deployment completed!"
echo ""
print_status "Next steps:"
echo "  1. Check your deployment URL"
echo "  2. Verify all pages load correctly"
echo "  3. Test functionality"
echo "  4. Configure custom domain if needed"
echo "  5. Set up GitHub integration for automatic deployments"
echo ""
print_success "🎉 Your website is now live on Vercel!" 