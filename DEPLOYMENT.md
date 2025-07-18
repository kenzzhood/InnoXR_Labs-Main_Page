# Deployment Guide

This guide covers different deployment options for the InnoXR Labs website.

## 🚀 Quick Deploy Options

### Netlify (Recommended)

1. **Connect Repository**:
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

3. **Deploy**:
   - Click "Deploy site"
   - Your site will be live in minutes!

### Vercel

1. **Import Project**:
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`

3. **Deploy**:
   - Click "Deploy"
   - Automatic deployments on every push!

### GitHub Pages

1. **Enable Pages**:
   - Go to repository Settings > Pages
   - Source: "Deploy from a branch"
   - Branch: `main` / `/ (root)`

2. **Add Deploy Action** (create `.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             cache: 'npm'
             
         - name: Install dependencies
           run: npm ci
           
         - name: Build
           run: npm run build
           
         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

## 🔧 Environment Variables

If you need environment variables:

1. **Create `.env.example`**:
   ```
   VITE_API_URL=https://api.example.com
   VITE_CONTACT_EMAIL=contact@innoxrlabs.com
   ```

2. **Platform-specific setup**:
   - **Netlify**: Site settings > Environment variables
   - **Vercel**: Project settings > Environment Variables
   - **GitHub Pages**: Repository settings > Secrets and variables

## 🌐 Custom Domain

### Netlify
1. Go to Site settings > Domain management
2. Add custom domain
3. Configure DNS records as shown

### Vercel
1. Go to Project settings > Domains
2. Add your domain
3. Configure DNS records

### GitHub Pages
1. Add `CNAME` file to `public/` folder with your domain
2. Configure DNS records:
   - `A` record: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record: `yourusername.github.io`

## 📊 Performance Optimization

### Build Optimization
```json
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu']
        }
      }
    }
  }
})
```

### Image Optimization
- Use WebP format when possible
- Implement lazy loading
- Optimize image sizes for different breakpoints

## 🔍 Monitoring

### Analytics
- Google Analytics
- Vercel Analytics
- Netlify Analytics

### Performance
- Lighthouse CI
- Web Vitals monitoring
- Error tracking with Sentry

## 🚨 Troubleshooting

### Common Issues

1. **Build fails**:
   - Check Node.js version (use 18+)
   - Clear node_modules and reinstall
   - Check for TypeScript errors

2. **Assets not loading**:
   - Verify base URL configuration
   - Check asset paths are relative
   - Ensure assets are in public folder

3. **Routing issues**:
   - Configure redirects for SPA
   - Add `_redirects` file for Netlify
   - Configure `vercel.json` for Vercel

### Platform-specific Fixes

**Netlify**:
```
# _redirects file
/*    /index.html   200
```

**Vercel**:
```json
// vercel.json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## 📈 CI/CD Pipeline

Example GitHub Actions workflow:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v2.0
        with:
          publish-dir: './dist'
          production-branch: main
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

Happy deploying! 🚀