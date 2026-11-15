# Migration from the original itch package

The original `itch/` directory was moved intact to `.archive/legacy-itch/`. It is ignored by Git. No original drafts, source frames, intermediate masters, or review notes were discarded during the migration.

The active project is now a React + TypeScript application using Vite. It contains one authoritative Markdown source, optimized runtime assets, reusable media and replay components, setup documentation, content checks, and continuous integration.

The old HTML previews, Python renderers, build logs, `_work` output, alternate covers, superseded two-part drafts, and itch publishing checklists are no longer active application inputs. They remain in the archive for recovery and historical context.

Raw recordings and the old scene engine referred to by the Python scripts were already absent from the supplied folder. Asset preparation for the new site uses the exported images and MP4 clips that were actually present. No external source material was fabricated.
