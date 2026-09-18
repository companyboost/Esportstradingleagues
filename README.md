# Esports Trading website

Next.js 16 (App Router, TypeScript) port of the single-file prototype `../index-v2.html`.

## Run it

```bash
npm install      # first time only
npm run dev      # http://localhost:3000
npm run build    # production build (all pages prerender as static)
npm run start    # serve the production build
```

## Pages

| Route | File |
| --- | --- |
| `/` | `app/page.tsx` |
| `/league` | `app/league/page.tsx` |
| `/league-payouts` | `app/league-payouts/page.tsx` |
| `/pvp` | `app/pvp/page.tsx` |
| `/pvp-payouts` | `app/pvp-payouts/page.tsx` |
| `/about` | `app/about/page.tsx` |

`app/layout.tsx` wraps every page with the nav, the "Ready to enter the arena" call to action and the footer.

## Components (`components/`)

- `Nav.tsx` (client): sticky header, active link, mobile menu.
- `Footer.tsx`: call to action and the rounded glow footer with the large logo.
- `Bracket.tsx`: `Bracket` week-by-week tracker and the `Cells` field grid.
- `EtpsCalculator.tsx` (client): slider calculator for `ETPS = Return % − (0.5 × Max Drawdown %)`. Starts on the Alpha 13 vs Bravo 12 example.
- `LiveMatch.tsx` (client): demo matchup driven by simulated data, labelled as a demo in the UI.
- `HeroVideo.tsx` (client): muted looping hero video with the still image as fallback.
- `Sections.tsx`: `SectionHead`, `Formula`, `EntryFee`, `Podium`, `PrizePool`, `NextStrip`.
- `Icon.tsx`: `Icon`, `Arrow` and the `IconSprite` rendered once in the layout.
- `Effects.tsx` (client): reveal on scroll with stagger, count-up numbers, cursor spotlight, magnetic buttons, card tilt, looping words. It works on class names and data attributes, so pages stay server components.

## Styling

All styles live in `app/globals.css`, ported from the prototype and keyed on plain class names. Tailwind is still imported and available; the site rules are unlayered, so they take priority over Tailwind's base layer.

- Accent `#edfc0d` is the logo yellow. Background is `#0e0e0e`.
- Large display text is sized with container query units (`cqi`) so it cannot spill out of its card. Keep that pattern when adding cards.
- Motion respects `prefers-reduced-motion`.
- Add `rv` to reveal an element on scroll (`from-left`, `from-right`, `zoom` are variants). Add `data-stagger` to a grid to reveal its children one after another.

## Assets (`public/`)

- `images/logo.svg` (vector, from `../Archive/V1-yellow-E-transparent.svg`), `images/hero.jpg`, `images/arena.jpg`
- `media/hero.mp4` (720p, muted, about 1.4 MB)
- `fonts/`: Syne, Inter, JetBrains Mono, plus `archivo-digits.woff2`, which replaces only digits and `$ , . %` so numbers sit at an even height.
- `app/icon.png` is the browser tab icon.

Copy comes from `../Esports Trading Website Content.docx`.
