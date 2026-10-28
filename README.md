# Studio.G® — Creative Studio Website

A responsive, five-page static website concept for Studio.G, a Pune-based creative studio. Inspired by immersive, experimental agency sites, but with original Studio.G branding and copy.

## Pages
- `index.html` — Home / animated hero / circular portfolio
- `work.html` — Portfolio with category filters
- `services.html` — Film, product/event shoots, social media and website development
- `studio.html` — Studio story and process
- `contact.html` — Project enquiry form that prepares an email draft

## Run locally
Open `index.html` in a modern browser, or run a local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Before publishing
1. Replace the sample Unsplash photos with Studio.G's own work and optimized images/videos.
2. In `contact.html`, replace `hello@studio-g.example` with your actual business email in both the contact details and mailto handler in `app.js`.
3. Replace Instagram and LinkedIn placeholder links in the footer with Studio.G's profiles.
4. Update the SEO title/description and add your real business contact details.
5. Test on mobile and deploy the folder to your preferred static host (Netlify, Vercel, GitHub Pages, or your own hosting).

This is a static front-end starter. The contact form opens the visitor's email app; it does not send/store submissions on a server.
