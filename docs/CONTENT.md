# Content and presentation

`src/content/devlog.md` is the unchanged final text from the original publishing package. Its 16 media references and five daily accounts are checked by `npm run check:content`.

The new site adds short editorial introductions, headings, and playful transitions. Direct quotations remain attributed to the people named in the source. The five daily field-note panels and extended-cut sections retain the longer technical explanations, disagreements, credits, and acknowledged limitations.

Footage recorded from RC3 is labelled RC3. The source text’s claims about the final build are retained as originally supplied; rebuilding this site did not independently verify the game build, jam rules, licences, or transcript evidence. The original reviewer’s instructions and private research notes are in the ignored local archive, not the public source.

The shield experiment is explicitly labelled as an illustration. Real gameplay is presented separately. The walker is described as a set piece, matching the source. No game download URL was supplied, so the site does not invent a Play/Download destination.

## Asset handling

- PNG and JPEG images become WebP files with the same basename.
- GIFs become static WebP posters paired with their existing silent MP4 fallback.
- Only assets used by the experience are shipped.
- The greybox and fortress comparison uses the original extracted frames from the old working directory.
- Social sharing uses the original store cover.
- Runtime fonts are hosted with the application.

New optimized assets are generated from originals; the originals are preserved in the local archive. Keep captions clear about test footage, editor views, diagrams, and actual gameplay.
