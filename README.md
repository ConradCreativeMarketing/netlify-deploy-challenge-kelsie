# Conrad Creative — Netlify Deploy Challenge Starter

A minimal, high‑polish Astro + React + Tailwind starter showcasing:
- **Edge personalization** (Netlify Edge Function)
- **AI Pitch Coach** (Netlify Function with AI Gateway placeholder)
- **Build Log** transparency panel

## Quick start
```bash
pnpm i
pnpm dev
```

## Deploy to Netlify
1. Push to GitHub.
2. Connect repo in Netlify.
3. Set env vars as needed:
   - `AI_GATEWAY_URL`
   - `AI_GATEWAY_TOKEN`
   - (Optional for build log) `NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID`

## Personalization
Use `/?industry=ecommerce` or `/?industry=realestate` to see hero copy adapt.

## Notes
- Replace demo metrics and case blurbs with your real results.
- Swap logo.svg with brand asset.
- Wire `ai-pitch-coach` to Netlify AI Gateway when ready.
