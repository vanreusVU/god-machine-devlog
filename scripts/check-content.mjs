import { readFile, access } from 'node:fs/promises'
import assert from 'node:assert/strict'

const source = await readFile('src/content/devlog.md', 'utf8')
const refs = [...source.matchAll(/\[MEDIA:\s*([^|\]]+?)\s*\|/g)].map((match) => match[1].trim())
assert.equal(refs.length, 16, 'The complete source devlog should retain its 16 media references.')
assert.equal(
  (source.match(/^### Day /gm) || []).length,
  5,
  'All five production days must be retained.',
)
assert.ok(!/\[(FILL|CHECK)/.test(source), 'Unresolved editorial markers remain.')
for (const file of refs) {
  await access(`public/media/${file.replace(/\.(gif|png|jpg)$/, '.webp')}`)
  if (file.endsWith('.gif')) await access(`public/media/${file.replace('.gif', '.mp4')}`)
}
for (const file of ['level-before.webp', 'level-after.webp', '06-sketch-ai-engine.webp'])
  await access(`public/media/${file}`)
console.log(
  `Content verified: 5 days, ${refs.length} source media references, all optimized assets and video fallbacks present.`,
)
