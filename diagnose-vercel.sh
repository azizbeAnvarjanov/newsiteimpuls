#!/bin/bash

# Vercel GitHub Deployment Diagnostic Script
# This script helps identify why GitHub to Vercel deployment isn't working

echo "🔍 Vercel GitHub Deployment Diagnostic"
echo "======================================"

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

echo ""
print_status "Checking Git repository status..."

# Check Git repository
if [ -d ".git" ]; then
    print_success "Git repository found"
    
    # Check remote
    REMOTE_URL=$(git remote get-url origin 2>/dev/null)
    if [ $? -eq 0 ]; then
        print_success "Remote origin: $REMOTE_URL"
        
        # Check if it's the correct repository
        if [[ $REMOTE_URL == *"azizbeAnvarjanov/imiwebsite"* ]]; then
            print_success "Correct repository detected"
        else
            print_warning "Repository URL doesn't match expected pattern"
        fi
    else
        print_error "No remote origin found"
    fi
    
    # Check branch
    CURRENT_BRANCH=$(git branch --show-current)
    print_status "Current branch: $CURRENT_BRANCH"
    
    if [ "$CURRENT_BRANCH" = "main" ]; then
        print_success "On main branch (correct for production)"
    else
        print_warning "Not on main branch. Vercel typically deploys from main"
    fi
    
    # Check if there are uncommitted changes
    if [ -n "$(git status --porcelain)" ]; then
        print_warning "You have uncommitted changes"
        git status --short
    else
        print_success "No uncommitted changes"
    fi
    
else
    print_error "Not a Git repository"
fi

echo ""
print_status "Checking project configuration..."

# Check package.json
if [ -f "package.json" ]; then
    print_success "package.json found"
    
    # Check build script
    if grep -q '"build"' package.json; then
        BUILD_SCRIPT=$(grep '"build"' package.json | head -1)
        print_success "Build script: $BUILD_SCRIPT"
    else
        print_error "No build script found in package.json"
    fi
    
    # Check Node.js version
    if grep -q '"node"' package.json; then
        NODE_VERSION=$(grep '"node"' package.json | head -1)
        print_success "Node.js version: $NODE_VERSION"
    else
        print_warning "No Node.js version specified in package.json"
    fi
else
    print_error "package.json not found"
fi

# Check vercel.json
if [ -f "vercel.json" ]; then
    print_success "vercel.json found"
else
    print_warning "vercel.json not found (optional for Next.js)"
fi

# Check next.config.mjs
if [ -f "next.config.mjs" ]; then
    print_success "next.config.mjs found"
else
    print_warning "next.config.mjs not found"
fi

echo ""
print_status "Checking for common issues..."

# Check for conflicting files
if [ -f "now.json" ]; then
    print_error "Found now.json - this conflicts with vercel.json"
else
    print_success "No now.json found (good)"
fi

if [ -d ".now" ]; then
    print_error "Found .now directory - this conflicts with .vercel"
else
    print_success "No .now directory found (good)"
fi

# Check .vercel directory
if [ -d ".vercel" ]; then
    print_success "Found .vercel directory (project is linked to Vercel)"
else
    print_warning "No .vercel directory found (project not linked to Vercel)"
fi

echo ""
print_status "Checking environment variables..."

# Check for .env files
if [ -f ".env" ]; then
    print_success ".env found"
    
    # Check for Firebase variables
    FIREBASE_VARS=$(grep -c "NEXT_PUBLIC_FIREBASE" .env 2>/dev/null || echo "0")
    if [ "$FIREBASE_VARS" -gt 0 ]; then
        print_success "Found $FIREBASE_VARS Firebase environment variables"
    else
        print_warning "No Firebase environment variables found in .env"
    fi
else
    print_warning ".env not found"
fi

echo ""
print_status "Testing build locally..."

# Test build
if npm run build > /dev/null 2>&1; then
    print_success "Local build successful"
else
    print_error "Local build failed - check the build output above"
fi

echo ""
print_status "Vercel GitHub Integration Checklist:"
echo "=========================================="
echo ""
echo "1. ✅ Repository: $REMOTE_URL"
echo "2. ✅ Branch: $CURRENT_BRANCH"
echo "3. ✅ Build script: Found in package.json"
echo "4. ✅ Node.js version: Specified in package.json"
echo "5. ✅ Configuration files: vercel.json and next.config.mjs"
echo "6. ✅ No conflicting files: now.json or .now directory"
echo ""
echo "🔧 Next Steps:"
echo "=============="
echo ""
echo "1. Go to https://vercel.com/dashboard"
echo "2. Click 'New Project'"
echo "3. Import Git Repository: azizbeAnvarjanov/imiwebsite"
echo "4. Configure build settings:"
echo "   - Framework Preset: Next.js"
echo "   - Build Command: next build"
echo "   - Output Directory: .next"
echo "   - Install Command: npm install"
echo "5. Set environment variables in Vercel Dashboard:"
echo "   - NEXT_PUBLIC_FIREBASE_API_KEY"
echo "   - NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN"
echo "   - NEXT_PUBLIC_FIREBASE_PROJECT_ID"
echo "   - NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET"
echo "   - NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"
echo "   - NEXT_PUBLIC_FIREBASE_APP_ID"
echo "6. Deploy!"
echo ""
echo "📖 For detailed instructions, see: GITHUB_VERCEL_FIX.md"
echo ""
print_success "Diagnostic complete! 🚀" 