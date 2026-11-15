export function extractSection(source: string, title: string) {
  const blocks = source.split(/^## /m).slice(1)
  const block = blocks.find((text) => text.split('\n')[0].trim() === title)
  return block?.slice(block.indexOf('\n') + 1).trim() ?? ''
}

export function extractDays(source: string) {
  return extractSection(source, 'The changelog')
    .split(/^### /m)
    .slice(1)
    .map((day) => day.replace(/^[^\n]+\n/, '').trim())
}

export function normalizeMedia(markdown: string) {
  return markdown.replace(
    /\[MEDIA:\s*([^|\]]+?)\s*\|\s*([^\]]*)\]/g,
    (_, file: string, caption: string) => `\n\n![${caption.trim()}](/media/${file.trim()})\n\n`,
  )
}
