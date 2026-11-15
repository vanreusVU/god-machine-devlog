# God Machine: every take stays in

An interactive devlog for **God Machine**, a dark first-person time-loop shooter built by **Pirates** for the 2026 Epic AI MegaJam. The theme was **Director’s Cut**. Five people, five days, and a game where your previous takes become your squad.

## Development

Requires Node.js 22.12+; Node.js 24 LTS is recommended.

```sh
npm ci
npm run dev
```

Open the URL Vite prints, normally <http://localhost:5173>. This is a React + TypeScript frontend. Vite provides the development server and production build; the site has no application server, account system, or database.

```sh
npm run check:content  # Verify the original story and every referenced asset
npm run typecheck     # Check TypeScript
npm run build         # Type-check and generate dist/
npm run preview       # Serve the production build locally
npm run format        # Format application source and configuration
```

## Project structure

```text
src/
  App.tsx                   Site composition
  components/
    Media.tsx               Accessible media players and expanded views
    ReplayLab.tsx           Interactive two-take shield demonstration
    sections/               Individual editorial sections
  content/
    devlog.md               Original final devlog; source of truth
    story.ts                Section extraction and presentation copy
  styles.css                Responsive design and motion preferences
public/
  media/                    Optimized WebP images, posters, and MP4 clips
  store/                    Original cover used for social sharing
scripts/                    Content validation and optional asset preparation
tests/                      Content and replay tests
docs/                       Content policy and migration notes
```

## Editing the story

Edit `src/content/devlog.md` to change the original story. Keep its section headings and `[MEDIA: filename | caption]` markers: `story.ts` uses them to build the full field notes. Edit `story.ts` and the section components for the shorter editorial presentation. The full source remains accessible through the daily field notes and extended-cut sections.

The replay sandbox is an illustrative diagram, **not a recreation of Unreal’s physics or actual game footage**. It uses an eight-second demonstration instead of the game’s 45-second takes. Videos play only when requested, remain silent, and can be paused. Fonts are served locally. The site respects reduced-motion preferences.

## Assets and the local archive

All runtime assets are committed. Normal development needs only Node.js. The original publishing package, review notes, source frames, GIFs, and old Python tooling were preserved locally at `.archive/legacy-itch/`. That directory is deliberately ignored and is **not included in the public repository**.

If you have the original package and need to regenerate optimized media:

```sh
node scripts/prepare-media.mjs /path/to/original/itch
npm run check:content
```

The asset preparation script uses Sharp, preserves the originals, converts the required images to WebP, extracts GIF posters, and copies existing MP4 clips. It does not need the original external `G:` drive, FFmpeg, or the old scene engine. Raw recordings and the old rendering engine were not part of this folder and remain external.

## Local production preview

This project runs locally. No hosting account or sign-in is required. To check an optimized production build:

```sh
npm run build
npm run preview
```

Open the URL printed by Vite, normally <http://localhost:4173>. GitHub holds the public source; pushes run validation only and do not deploy the site. Hosting is not part of the development workflow.

## Credits and rights

Game and original devlog: Pirates — Margus, Nils, Surhay Bas, Riho, and Oliver. The original devlog includes the tools and third-party content acknowledgements. No new blanket licence is applied to the game artwork, third-party assets, or editorial content by making this repository public.
