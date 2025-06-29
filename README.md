This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 🚀 Status Badges

![Node.js](https://img.shields.io/badge/Node.js-22.x-green)
![Next.js](https://img.shields.io/badge/Next.js-14.1.0-black)
![Security](https://img.shields.io/badge/Security-Headers-Enabled-green)
![Build](https://img.shields.io/badge/Build-Passing-brightgreen)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-blue)

## 🛡️ Security Features

- ✅ **Security Headers** - Comprehensive protection
- ✅ **HTTPS Enforcement** - Automatic SSL/TLS
- ✅ **CSP Protection** - XSS prevention
- ✅ **Rate Limiting** - DDoS protection
- ✅ **Input Validation** - Secure data handling

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Environment Variables

This project uses Firebase for backend services. You need to set up environment variables before running the application.

1. Copy the example environment file:

```bash
cp .env.example .env.local
```

2. Fill in your Firebase configuration values in `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API=your_firebase_api_key_here
NEXT_PUBLIC_FIREBASE_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

You can get these values from your Firebase project console at [https://console.firebase.google.com/](https://console.firebase.google.com/).

## 🚀 Deployment

### Quick Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### GitHub to Vercel Deployment

For automatic deployments with GitHub integration:

1. **Push to GitHub:**

   ```bash
   git add .
   git commit -m "Add security headers and Node.js 22 support"
   git push origin main
   ```

2. **Connect to Vercel:**

   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Configure environment variables
   - Deploy!

3. **Automatic Deployments:**
   - Your project includes GitHub Actions workflow
   - Push to `main` branch triggers automatic deployment
   - See `SECURITY.md` for detailed setup instructions

### Environment Variables for Production

Set these in your Vercel project settings:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Security Features

This application includes comprehensive security measures:

### Security Headers (Enhanced)

- **X-Content-Type-Options**: Prevents MIME type sniffing
- **X-Frame-Options**: Prevents clickjacking attacks (DENY)
- **X-XSS-Protection**: XSS protection for older browsers
- **Content-Security-Policy**: Enhanced CSP with strict resource controls
- **Strict-Transport-Security**: Enforces HTTPS with preload
- **Permissions-Policy**: Comprehensive browser feature controls
- **Cross-Origin-Embedder-Policy**: Prevents cross-origin data leaks
- **Cross-Origin-Opener-Policy**: Isolates browsing context
- **Cross-Origin-Resource-Policy**: Controls cross-origin resource access
- **X-DNS-Prefetch-Control**: Controls DNS prefetching
- **X-Permitted-Cross-Domain-Policies**: Prevents cross-domain policy files

### Rate Limiting & Protection

- **Middleware Rate Limiting**: 100 requests per 15 minutes per IP
- **Suspicious Request Detection**: Blocks known attack patterns
- **User-Agent Filtering**: Blocks malicious bots and scanners
- **Query Parameter Validation**: Prevents XSS and injection attacks

### Firebase Security Rules

- **Firestore Rules**: Located in `firebase-rules/firestore.rules`
- **Storage Rules**: Located in `firebase-rules/storage.rules`

### Vercel Security

- **Automatic HTTPS**: SSL/TLS encryption
- **DDoS Protection**: Built-in protection
- **Global CDN**: Edge caching and security
- **Environment Variables**: Encrypted storage
- **HTTP to HTTPS Redirects**: Automatic secure redirects

### Security Testing

After deployment, test your security:

1. **Security Headers**: https://securityheaders.com/
2. **SSL Labs**: https://www.ssllabs.com/ssltest/
3. **Mozilla Observatory**: https://observatory.mozilla.org/
4. **Pentest-Tools**: https://pentest-tools.com/
5. **Sucuri SiteCheck**: https://sitecheck.sucuri.net/

### Deployment Security

Use the provided deployment script for secure deployments:

```bash
chmod +x deploy.sh
./deploy.sh
```

This script includes:

- Dependency security updates
- Security audit checks
- Linting for code quality
- Secure deployment to Vercel

## Firebase Security Setup

1. **Deploy Firestore Rules**:

```bash
firebase deploy --only firestore:rules
```

2. **Deploy Storage Rules**:

```bash
firebase deploy --only storage
```

## Vercel Deployment Security

1. **Environment Variables**: Set all Firebase config in Vercel dashboard
2. **Custom Domain**: Configure with HTTPS enforcement
3. **Security Headers**: Already configured in `vercel.json`
4. **Rate Limiting**: Configure in Vercel dashboard if needed
