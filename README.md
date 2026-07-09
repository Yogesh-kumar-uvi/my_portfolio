# Yogesh Kumar — Developer Portfolio (React + Vite + Tailwind)

Real content pulled from your old portfolio (portfolio01 repo) + the premium design/animations built earlier.

## What's included
- Vite + React, Tailwind CSS v4, Framer Motion animations
- Sticky navbar (scroll highlighting, mobile menu, dark/light toggle — remembers choice)
- Hero — typing animation, floating tech icons, resume/hire CTAs
- About — your real bio from portfolio01
- Skills — animated progress bars (React 80%, JS 85%, HTML 90%, etc. — same numbers as before)
- Education — your 3 institutions with dates and descriptions
- Projects — Healthcare Management System, E-Commerce, Weather App, Amazon Clone (with your real live links)
- Experience — Robust Results Pvt Ltd + Striver Infobyte internships
- Testimonials — carousel with your 4 real client reviews (Arjun, Shruti, Rohan, Anil)
- Contact — real EmailJS sending (see setup below), phone, Instagram, X/Twitter, LinkedIn, GitHub

## Run locally
```
npm install
npm run dev
```

## Set up real email sending (EmailJS — free tier is enough)
1. Create a free account at https://www.emailjs.com
2. Email Services tab → connect your Gmail → copy the **Service ID**
3. Email Templates tab → template with `{{from_name}}`, `{{from_email}}`, `{{message}}` → copy the **Template ID**
4. Account → General → copy your **Public Key**
5. `cp .env.example .env` and fill in the 3 values
6. Restart `npm run dev`

Add the same 3 env variables in Vercel's dashboard when you deploy.

## Edit your content
Everything lives in `src/data/portfolioData.js` — profile, skills, education, projects, experience, testimonials.
Update `resumeUrl` to point to your actual resume PDF (drop it in `public/`).

## Still missing vs. the original big spec
- Certificates gallery, GitHub stats/achievements, Blog, Services page, multi-page routing (React Router)
- SEO meta tags, sitemap.xml, robots.txt
- Admin panel (optional, needs a backend)

## Deploy
Push to GitHub → import into Vercel (Vite auto-detected) → add the 3 EmailJS env vars in Vercel settings.
