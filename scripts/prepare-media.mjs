import { mkdir, readFile, copyFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const source = path.resolve(process.argv[2] || '.archive/legacy-itch')
const markdown = await readFile('src/content/devlog.md', 'utf8')
const required = new Set(
  [...markdown.matchAll(/\[MEDIA:\s*([^|\]]+?)\s*\|/g)].map((match) => match[1].trim()),
)
required.add('06-sketch-ai-engine.png')
const destination = path.resolve('public/media')
await mkdir(destination, { recursive: true })
for (const name of required) {
  const original = path.join(source, 'media', name)
  await sharp(original, { animated: false })
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 90, effort: 6 })
    .toFile(path.join(destination, name.replace(/\.(gif|png|jpg)$/, '.webp')))
  if (name.endsWith('.gif'))
    await copyFile(
      path.join(source, 'media', name.replace('.gif', '.mp4')),
      path.join(destination, name.replace('.gif', '.mp4')),
    )
}
await mkdir('public/store', { recursive: true })
await copyFile(path.join(source, 'store', 'cover-630x500.png'), 'public/store/cover-630x500.png')
for (const [sourceName, destinationName] of [
  ['greybox', 'level-before'],
  ['fortress', 'level-after'],
]) {
  await sharp(path.join(source, '_work', `${sourceName}.png`))
    .resize(1200, 675, { fit: 'cover' })
    .webp({ quality: 90, effort: 6 })
    .toFile(path.resolve('public/media', `${destinationName}.webp`))
}
console.log('Prepared WebP images, video posters, and MP4 clips. Source files were preserved.')
