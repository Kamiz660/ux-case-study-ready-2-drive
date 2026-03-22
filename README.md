# Ready2Drive PEI UX Case Study

A UX case study website that presents the Ready2Drive PEI redesign with clear storytelling, decision rationale, and before/after evidence.

## Live Site

[https://ux-case-study-ready-2-drive.vercel.app/](https://ux-case-study-ready-2-drive.vercel.app/)

## What This Repo Shows

- Project context and problem framing
- Audit findings and competitor analysis
- Strategy and key UI decisions (with visual evidence)
- Final redesigned screens
- Expected impact and reflection

## Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS
- shadcn/ui-style components

## Project Structure

- `src/app/page.tsx` - case study page composition
- `src/data/case-study-ready2drive.ts` - typed case study content
- `src/components/case-study/*` - navigation, reveal, detail, and gallery components
- `public/case-studies/ready2drive/*` - case study images

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Quality Checks

```bash
npm run lint
npm run build
```

## Deployment

Configured for Vercel using `vercel.json`.

Deploy flow:

1. Push this repo to GitHub/GitLab/Bitbucket
2. Import into Vercel
3. Deploy with defaults (`npm ci`, `npm run build`)


