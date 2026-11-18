# Rylan R. Bernardino — Portfolio

React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion · Lucide

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build -> dist/
npm run preview    # serve the production build
```

## Edit content

All copy lives in `src/data/portfolio.ts` (profile, stack, projects, certifications, contacts).
Add a `credentialUrl` to a certification there and its "View credential →" link appears.

## Assets

Put `Picture.png` and `Bernardino-CV.pdf` in `public/`.

## Structure

```
src/
  components/  layout/ (Navbar, Footer, SpineGlow…)  sections/  ui/
  context/     SectionContext (active section + nav "rise" trigger)
  data/        portfolio.ts
  hooks/       useSpine, useSectionNavigation, useMarquee
  types/  utils/
```
