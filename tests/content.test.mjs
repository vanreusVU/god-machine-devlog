import { readFile } from 'node:fs/promises'
import assert from 'node:assert/strict'
import test from 'node:test'
import { extractDays, extractSection, normalizeMedia } from '../src/content/parse.ts'

const original = await readFile(new URL('../src/content/devlog.md', import.meta.url), 'utf8')

test('every daily account retains its media and the next day stays separate', () => {
  const days = extractDays(original)
  assert.equal(days.length, 5)
  assert.match(days[0], /Surhay pitched the most literal take/)
  assert.doesNotMatch(days[0], /Margus and Nils turned up with the same idea/)
  assert.match(days[1], /Margus and Nils turned up with the same idea/)
  assert.match(days[2], /12-bug-lever-id.gif/)
  assert.match(days[3], /08-71-generated-failed.png/)
  assert.match(days[4], /RC3 to RC4/)
  assert.doesNotMatch(days[4], /## How the agents worked/)
})

test('technical sections preserve the limitations and original attribution', () => {
  assert.match(extractSection(original, 'How the take system works'), /Hybrid/)
  assert.match(extractSection(original, 'What is not true yet'), /set piece, not an enemy/)
  assert.match(extractSection(original, 'Tools and licences'), /ESM Team/)
  assert.equal(extractSection(original, 'This section does not exist'), '')
})

test('all original media markers become renderable media with their captions retained', () => {
  const transformed = normalizeMedia(original)
  assert.doesNotMatch(transformed, /\[MEDIA:/)
  assert.equal((transformed.match(/!\[/g) || []).length, 16)
  assert.match(
    transformed,
    /!\[The real prompt and the real reply, from Nils's screen recording\.\]\(\/media\/14-bunker-prompt.png\)/,
  )
})
