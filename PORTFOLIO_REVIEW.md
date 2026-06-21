# Portfolio Review — Advice & Critique

Date: 2026-06-21
Stack: React 18 + Vite SPA, GitHub Pages deploy, data-driven projects/profile, custom reveal+motion hooks, GeoQuiz mini-game.

Ranked by payoff.

## Bugs / correctness

1. ~~**Two parallel asset trees**~~ ✅ DONE — Consolidated into `public/assets/images/`. All cover refs in `src/data/projects.js` and `src/data/profile.js` updated. `public/assets/img/` deleted.

2. ~~**Dead legacy files**~~ ✅ DONE — Deleted `isaveit.html`, `menuscanorder.html`, `nontonnyaman.html`, `seeksupply.html` from repo root.

3. ~~**GeoQuiz copy undersells it**~~ ✅ DONE — Updated `short`, `facts`, `overview`, and `features` in `projects.js` to reflect all 3 modes: Guess the Flag, Flag to Country, Country Shape.

4. ~~**MenuScanOrder cover = external Unsplash URL**~~ ✅ DONE — Replaced with local `/assets/images/menuscanorder/img-01.png`.

5. ~~**Architecture heading hardcoded**~~ ✅ DONE — Added `leftTitle`/`rightTitle` to `arch` object in `projects.js`. `ProjectDetail.jsx` now reads from data instead of hardcoded string.

## SEO (cheap, high value for portfolio)

6. ~~**Every route shares one `<title>`/meta**~~ ✅ DONE — Created `src/hooks/useTitle.js`. All pages set per-route `document.title`: Home → "Raihan Sukmana", Work/About/GeoQuiz/404 → "[Page] — Raihan Sukmana", project detail → "[Project] — Raihan Sukmana".

7. ~~**No `robots.txt` / `sitemap.xml`**~~ ✅ DONE — Added both to `public/`. Sitemap covers all 10 routes. robots.txt points crawlers to sitemap.

8. ~~**og:image is portrait**~~ ✅ DONE (partial) — Fixed broken URL (`/assets/img/` → `/assets/images/raihan.jpg`). Per-project og:image not achievable on static GitHub Pages SPA without prerendering — social crawlers don't execute JS. Would need `vite-plugin-ssg` or similar to go further.

## Content / wording

9. ~~**"BHAG"** in SeekSupply overview~~ ✅ DONE — Replaced with "a big, ambitious goal" in `projects.js`.

10. ~~**Metrics "2 CS degrees"**~~ ✅ DONE — Changed to "Computing degrees" in `profile.js`.

11. ~~**Contact block on every page**~~ ✅ DONE — `SiteFooter` now reads `useLocation` and suppresses the contact `<section>` on `/geoquiz`. Footer bar still renders everywhere.

## Perf / polish (minor)

12. ~~**No `width`/`height` on cover/portrait imgs**~~ ✅ DONE — Added `aspect-ratio: 3/2` to `.pd-cover` and `aspect-ratio: 3/4` to `.pd-hero-side-cover` in `pages.css`. `.hero-photo` already had `aspect-ratio: 3/3.7`. Browser now reserves space before images load, eliminating CLS.

13. ~~**Reveal engine unthrottled scroll**~~ ✅ DONE — Migrated `src/hooks/useReveals.js` to `IntersectionObserver` (`rootMargin: '0px 0px -8% 0px'`). Safety sweeps retained for font-load edge cases. Removed `scroll`/`resize` event listeners.

14. ~~**Unused heavy assets**~~ ✅ DONE — Deleted `video/exhibition.mp4`, `Image.png`, `Introduction.png`, `Logo.JPG`, `IMG_5523.png`, `IMG_8194.heic`, `IMG_8194.jpg`, and all 7 `ourverse/IMG_08*.PNG` raw files.
