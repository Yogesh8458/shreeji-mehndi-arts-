# Shreeji mehndi arts - Luxury Bridal & Festive Henna Studio

A modern, high-performance Progressive Web Application (PWA) and website for **Shreeji mehndi arts**, located at LIG Atal Dwar, Indore.

---

## 🚀 Quick Deployment Guide (Deploy in 2 Minutes)

### Option 1: Deploy on Vercel (Recommended & 100% Free)
1. Push this project to GitHub (using AI Studio's **Export to GitHub** button in the top right, or git push).
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New Project"** and import your repository.
4. Set the following build settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**. Your website is live worldwide with free SSL!

---

### Option 2: Deploy on Netlify (Drag & Drop or Git)
1. Run `npm install` and then `npm run build` on your computer.
2. A `dist/` folder will be created.
3. Log in to [netlify.com](https://netlify.com).
4. Drag and drop the `dist/` folder into Netlify Drop.
5. Your site is instantly live!

---

### Option 3: Deploy on Hostinger / cPanel / Shared Hosting
1. Run `npm run build`.
2. Open the `dist/` folder.
3. Upload all files inside `dist/` into your hosting server's `public_html/` directory.
4. Ensure your `.htaccess` redirects routes to `index.html` for single-page routing:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## 💻 Local Development Setup

To run the project on your local laptop or computer:

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Build for Production:**
   ```bash
   npm run build
   ```

---

## 📱 Features Included
- **12 Master Samples Catalog**: Matching actual WhatsApp designs (Dulha-Dulhan Varmala, Lokes & Sangi Couple Names, Rajwada Mor & Haathi, Hathphool, etc.).
- **Certified Master Henna Artist Section**: Showcasing mentorship under National Artist Anwar Patel & Lions Club of Indore Ahilya award.
- **Client Photo Sync**: Local file uploader allowing instant updates from mobile phone.
- **Interactive Price Estimator**: Instant cost calculations with WhatsApp pre-fill.
- **Appointment Booking Engine**: Real-time validation and WhatsApp message generator.
- **PWA Ready**: Works offline, installable as a mobile app on Android and iOS ("Add to Home Screen").
- **Dark Henna Stain Guide**: Step-by-step pre and post-henna care instructions.

---

## 📍 Business Information
- **Brand**: Shreeji mehndi arts
- **Location**: LIG Atal Dwar, Indore, Madhya Pradesh
- **Contact**: +91 9244796126
- **WhatsApp**: [Chat Directly](https://wa.me/919244796126)
