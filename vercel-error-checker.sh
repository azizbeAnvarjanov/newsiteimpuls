#!/bin/bash

# Comprehensive Vercel Error Checker
# This script checks for ALL potential Vercel deployment errors

echo "🔍 Comprehensive Vercel Error Checker"
echo "====================================="

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
print_status "Checking for ALL potential Vercel errors..."

# Initialize counters
ERRORS=0
WARNINGS=0
SUCCESSES=0

# 1. Missing public directory
print_status "1. Checking for missing public directory..."
if [ -d "public" ]; then
    print_success "Public directory exists"
    ((SUCCESSES++))
else
    print_error "Public directory missing"
    ((ERRORS++))
fi

# 2. Missing build script
print_status "2. Checking for missing build script..."
if grep -q '"build"' package.json; then
    BUILD_SCRIPT=$(grep '"build"' package.json | head -1)
    print_success "Build script found: $BUILD_SCRIPT"
    ((SUCCESSES++))
else
    print_error "No build script found in package.json"
    ((ERRORS++))
fi

# 3. Conflicting configuration files
print_status "3. Checking for conflicting configuration files..."
if [ -f "now.json" ]; then
    print_error "Found now.json - conflicts with vercel.json"
    ((ERRORS++))
else
    print_success "No now.json found"
    ((SUCCESSES++))
fi

if [ -d ".now" ]; then
    print_error "Found .now directory - conflicts with .vercel"
    ((ERRORS++))
else
    print_success "No .now directory found"
    ((SUCCESSES++))
fi

if [ -f ".nowignore" ]; then
    print_error "Found .nowignore - conflicts with .vercelignore"
    ((ERRORS++))
else
    print_success "No .nowignore found"
    ((SUCCESSES++))
fi

# 4. Recursive commands
print_status "4. Checking for recursive commands..."
if grep -r "vercel build\|vercel dev" . --exclude-dir=node_modules --exclude-dir=.git --exclude="*.md" --exclude="*.sh" > /dev/null 2>&1; then
    print_error "Found recursive vercel commands"
    ((ERRORS++))
else
    print_success "No recursive vercel commands found"
    ((SUCCESSES++))
fi

# 5. Mixed routing properties
print_status "5. Checking for mixed routing properties..."
if grep -q '"routes"' vercel.json 2>/dev/null; then
    if grep -q '"rewrites\|redirects\|headers\|cleanUrls\|trailingSlash"' vercel.json 2>/dev/null; then
        print_error "Mixed routing properties found"
        ((ERRORS++))
    else
        print_success "Routes property used correctly"
        ((SUCCESSES++))
    fi
else
    print_success "No mixed routing properties"
    ((SUCCESSES++))
fi

# 6. Conflicting functions and builds
print_status "6. Checking for conflicting functions and builds..."
if grep -q '"functions"' vercel.json 2>/dev/null && grep -q '"builds"' vercel.json 2>/dev/null; then
    print_error "Both functions and builds configured"
    ((ERRORS++))
else
    print_success "No conflicting functions/builds"
    ((SUCCESSES++))
fi

# 7. Invalid route patterns
print_status "7. Checking for invalid route patterns..."
if [ -f "vercel.json" ]; then
    # Check for common invalid patterns
    if grep -q 'source.*(?!' vercel.json 2>/dev/null; then
        print_warning "Potential invalid negative lookahead pattern"
        ((WARNINGS++))
    else
        print_success "Route patterns appear valid"
        ((SUCCESSES++))
    fi
else
    print_success "No vercel.json to check"
    ((SUCCESSES++))
fi

# 8. Node.js version
print_status "8. Checking Node.js version..."
if grep -q '"node"' package.json; then
    NODE_VERSION=$(grep '"node"' package.json | head -1)
    print_success "Node.js version specified: $NODE_VERSION"
    ((SUCCESSES++))
else
    print_warning "No Node.js version specified"
    ((WARNINGS++))
fi

# 9. pnpm engine issues
print_status "9. Checking for pnpm engine issues..."
if grep -q '"pnpm"' package.json; then
    print_warning "pnpm engine specified - potential issues"
    ((WARNINGS++))
else
    print_success "No pnpm engine specified"
    ((SUCCESSES++))
fi

# 10. Yarn dynamic require issues
print_status "10. Checking for yarn dynamic require issues..."
if grep -q '"type": "module"' package.json; then
    print_warning "Module type specified - potential yarn issues"
    ((WARNINGS++))
else
    print_success "No module type specified"
    ((SUCCESSES++))
fi

# 11. Edge Config issues
print_status "11. Checking for Edge Config issues..."
if grep -r "EDGE_CONFIG" . --exclude-dir=node_modules --exclude-dir=.git --exclude="*.md" --exclude="*.sh" > /dev/null 2>&1; then
    print_warning "Edge Config found - check connection strings"
    ((WARNINGS++))
else
    print_success "No Edge Config found"
    ((SUCCESSES++))
fi

# 12. Global Vercel packages
print_status "12. Checking for global Vercel packages..."
if grep -q "@vercel/speed-insights\|@vercel/analytics" package.json; then
    print_success "Vercel packages properly referenced"
    ((SUCCESSES++))
else
    print_success "No Vercel packages found"
    ((SUCCESSES++))
fi

# 13. Build test
print_status "13. Testing build locally..."
if npm run build > /dev/null 2>&1; then
    print_success "Local build successful"
    ((SUCCESSES++))
else
    print_error "Local build failed"
    ((ERRORS++))
fi

# 14. Environment variables
print_status "14. Checking environment variables..."
if [ -f ".env" ]; then
    FIREBASE_VARS=$(grep -c "NEXT_PUBLIC_FIREBASE" .env 2>/dev/null || echo "0")
    if [ "$FIREBASE_VARS" -gt 0 ]; then
        print_success "Found $FIREBASE_VARS Firebase environment variables"
        ((SUCCESSES++))
    else
        print_warning "No Firebase environment variables found"
        ((WARNINGS++))
    fi
else
    print_warning "No .env file found"
    ((WARNINGS++))
fi

# 15. Git repository status
print_status "15. Checking Git repository status..."
if [ -d ".git" ]; then
    REMOTE_URL=$(git remote get-url origin 2>/dev/null)
    if [ $? -eq 0 ]; then
        print_success "Git repository connected: $REMOTE_URL"
        ((SUCCESSES++))
    else
        print_error "No remote origin found"
        ((ERRORS++))
    fi
    
    CURRENT_BRANCH=$(git branch --show-current)
    if [ "$CURRENT_BRANCH" = "main" ]; then
        print_success "On main branch (correct for production)"
        ((SUCCESSES++))
    else
        print_warning "Not on main branch: $CURRENT_BRANCH"
        ((WARNINGS++))
    fi
else
    print_error "Not a Git repository"
    ((ERRORS++))
fi

# 16. Vercel configuration
print_status "16. Checking Vercel configuration..."
if [ -f "vercel.json" ]; then
    print_success "vercel.json found"
    ((SUCCESSES++))
else
    print_warning "No vercel.json found (optional for Next.js)"
    ((WARNINGS++))
fi

if [ -d ".vercel" ]; then
    print_success "Project linked to Vercel"
    ((SUCCESSES++))
else
    print_warning "Not linked to Vercel yet"
    ((WARNINGS++))
fi

echo ""
echo "====================================="
echo "📊 COMPREHENSIVE CHECK RESULTS"
echo "====================================="
echo ""
echo "✅ Successes: $SUCCESSES"
echo "⚠️  Warnings: $WARNINGS"
echo "❌ Errors: $ERRORS"
echo ""

if [ $ERRORS -eq 0 ]; then
    print_success "🎉 NO CRITICAL ERRORS FOUND!"
    echo ""
    echo "Your project is ready for Vercel deployment!"
    echo ""
    if [ $WARNINGS -gt 0 ]; then
        print_warning "⚠️  $WARNINGS warnings found - review above for recommendations"
    fi
else
    print_error "❌ $ERRORS critical errors found - fix before deployment"
    echo ""
    echo "Please address the errors above before deploying to Vercel."
fi

echo ""
echo "🚀 Next Steps:"
echo "1. Go to https://vercel.com/dashboard"
echo "2. Click 'New Project'"
echo "3. Import your GitHub repository"
echo "4. Configure build settings"
echo "5. Set environment variables"
echo "6. Deploy!"
echo ""
print_success "Check complete! 🎯" 