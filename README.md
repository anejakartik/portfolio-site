# Portfolio Site — Kartik Aneja

Next.js + Tailwind starter for GitHub Pages / Vercel. Dark theme, MDX-based blog, project pages, and resume CTA.

Quick start:

```bash
npm install
npm run dev
```

Deploy: connect repo to Vercel and set build `npm run build`.

Structure:
- src/pages (MDX pages)
- src/components (Hero, ProjectCard, Timeline)
- public (images, resume.pdf)

Notes: This is a scaffold. Replace content in `src/pages` and `data` with your projects and resume.

## Deploy & demo notes

Deploy to Vercel: connect this repo to Vercel and set framework to Next.js. Build command: `npm run build`.

Calendly: replace the placeholder URL in `src/components/CalendlyEmbed.tsx` or in `/schedule` with your Calendly link.

Demo GIFs: use the `scripts/record_demo.sh` helper in project repos to record terminal demos with `asciinema` and convert to GIF using `asciinema2gif`.