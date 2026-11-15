# Working on God Machine's devlog

- Use React, TypeScript, and Vite. This is a static frontend; do not add a server or database without a concrete requirement.
- Keep the original story in `src/content/devlog.md`. Preserve its five daily headings and media markers so the field notes keep working.
- Keep presentation sections in `src/components/sections/`, reusable interactions in `src/components/`, and optimized assets in `public/`.
- Keep direct quotations and claims grounded in the supplied story. Clearly label illustrative interactions and test-build footage.
- Keep `.archive/` local and ignored. It contains superseded drafts, original exports, review notes, and obsolete tooling. Do not publish it.
- Serve fonts locally, keep video playback user-initiated, and respect reduced-motion preferences. Maintain keyboard operation and visible focus indicators.
- Run `npm test`, `npm run check:content`, and `npm run build` after meaningful implementation changes. Run `npm run format` for edited application files.
- Work locally by default. Do not register, synchronize, or deploy this project with Sites or another hosting service unless the user explicitly requests hosting. GitHub remains the public source repository.
- Vite serves local development at `http://localhost:5173`. Production output is `dist/`; use `npm run preview` to inspect a local production build.
