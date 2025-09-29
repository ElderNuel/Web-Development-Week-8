# Strait2Biz — Multipage Responsive Website

## Overview
This project is a responsive multipage website built with HTML5, CSS3 and JavaScript. It demonstrates semantic markup, responsive design, basic accessibility, and client-side interactivity.

## Pages
- `index.html` — Home page with hero slider and services
- `about.html` — About / timeline
- `contact.html` — Contact form with client-side validation

## File structure
/project-root
├─ index.html
├─ about.html
├─ contact.html
├─ /css
│  └─ style.css
├─ /js
│  └─ main.js
├─ /images
│  ├─ hero1.jpg
│  ├─ hero2.jpg
│  └─ logo.png
└─ README.md

## Features
- Responsive layout with mobile navigation
- Accessible semantic HTML elements
- Image slider (auto + controls)
- Contact form client-side validation
- Scroll reveal animations
- Clean, modular code ready for deployment

## How to run locally
1. Clone repository:
   ```bash
   git clone <repo-url>
   cd repo-name
Open index.html in your browser (no build step required).

Deployment
You can deploy this project as a static site using:

GitHub Pages — push to main branch and enable Pages in repo settings (set root to /).

Netlify — drag-and-drop or connect repo; build command: none; publish directory: /.

Vercel — import repo, framework: static.

(Deployment instructions are included in the assignment docs.)

Notes
For sending real messages from the contact form, integrate a backend or a form provider (Netlify Forms, Formspree, EmailJS).

Replace placeholder images in /images with your assets.

## Live URL
https://eldernuelwk8.netlify.app

## License
### MIT

# 5. Deployment steps (concise)

### GitHub Pages (recommended for static)
1. Create a GitHub repo and push your project.
2. In repo → Settings → Pages: choose branch `main` and folder `/ (root)`. Save.
3. Wait a minute; your site will be available at `https://<username>.github.io/<repo>/`.
4. Verify all pages load and links are relative (they are in the code above).

### Netlify
1. Create an account at Netlify.
2. Click “Import from Git” → connect your Git provider → select repo.
3. Build command: *leave empty* (static); Publish directory: `/`.
4. Deploy. Use Netlify forms or serverless functions if you need form handling.

### Vercel
1. Sign in to Vercel → Import Project → pick repo.
2. Framework: “Other” (static). Build command: empty. Output directory: `/`.
3. Deploy.

---

# 6. Testing & validation checklist
- [ ] HTML validates (use validator.w3.org for spot check)
- [ ] CSS passes quick linting (style is modular)
- [ ] Mobile friendly (Google DevTools: responsive sizes)
- [ ] Keyboard accessible: nav toggle works via keyboard
- [ ] Contact form validation works and returns success message
- [ ] Links between pages work (use relative paths)
- [ ] Images optimized (compress large images before deploy)

---

# 7. Optional additions (nice-to-have)
- Add meta tags for SEO/social (Open Graph, Twitter cards)
- Add a service worker (offline support) — only if you want PWA basics
- Use Font Display swap & preloads for fonts for faster paint
- Add a favicon and accessible logo alt text variations
- Integrate Netlify Forms or Formspree for real message delivery
