# Ready2Drive UX Case Study Site

Single-page interview-focused case study website built with:

- Next.js (App Router)
- Tailwind CSS
- shadcn/ui

## Content Source

This project uses `../UX Case Study Rewritten.docx` as the canonical visual source.

Run the one-time image import script:

```bash
npm run import:ready2drive-images
```

This extracts only `word/media/*` assets into:

`public/case-studies/ready2drive`

## Development

```bash
npm run dev
```

Open `http://localhost:3000` to view the site.

## Production Checks

```bash
npm run lint
npm run build
```

## Deploy on Vercel

This project is preconfigured for Vercel with [`vercel.json`](./vercel.json).

1. Push this folder to a Git repository (GitHub/GitLab/Bitbucket).
2. In Vercel, click **Add New... -> Project** and import the repo.
3. Use the default settings:
   - Framework: Next.js
   - Install Command: `npm ci`
   - Build Command: `npm run build`
   - Output Directory: `.next` (auto)
4. Click **Deploy**.

No environment variables are required for this project right now.
