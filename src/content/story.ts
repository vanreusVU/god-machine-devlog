import original from './devlog.md?raw'
import { extractDays, extractSection } from './parse'
export { normalizeMedia } from './parse'

export const sourceText = original

export function section(title: string) {
  return extractSection(original, title)
}

const dayBodies = extractDays(original)

export const days = [
  {
    id: '01',
    date: 'WED 11 NOV',
    title: 'Eight pitches.\nOne very big problem.',
    short: 'The theme',
    tag: 'PRE-PRODUCTION',
    image: '03-day1-deleted-scenes',
    cut: 'The city-sized co-op war machine. For now.',
    summary:
      'The theme was Director’s Cut. We took that as permission to pitch everything, then cut almost all of it.',
  },
  {
    id: '02',
    date: 'THU 12 NOV',
    title: 'What if every\ntake stayed in?',
    short: 'The idea locks',
    tag: 'GREENLIT',
    image: '04-keep-the-take',
    cut: 'The AI RPG. And the mock documentary.',
    summary:
      'Forty-five seconds. One fortress. Your previous runs become the squad you didn’t bring.',
  },
  {
    id: '03',
    date: 'FRI 13 NOV',
    title: 'It works.\nTechnically.',
    short: 'First playable',
    tag: 'FIRST PLAYABLE',
    image: '12-bug-lever-id',
    cut: 'Editor binaries in Perforce. Compile locally.',
    summary:
      'The shield moved. The ghosts replayed. Two levers had the same ID. The ghosts were very loyal to the wrong lever.',
  },
  {
    id: '04',
    date: 'SAT 14 NOV',
    title: '71 models.\nMany regrets.',
    short: 'Reality check',
    tag: 'QUALITY CONTROL',
    image: '08-71-generated-failed',
    cut: 'Scopes. Broken meshes. Anything funny.',
    summary:
      'AI made the meshes fast. A human still had to look at them. This turned out to be an important step.',
  },
  {
    id: '05',
    date: 'SUN 15 NOV',
    title: 'Do or die.\nPreferably ship.',
    short: 'Ship it',
    tag: 'RELEASE DAY',
    image: '00-walker-in-fog',
    cut: 'The main menu. Ghost glow. The missile launch.',
    summary:
      'Objectives, sound, a walker with somewhere to be, and ghosts that could finally jump. We shipped.',
  },
].map((day, index) => ({ ...day, body: dayBodies[index] ?? '' }))

export function mediaPath(file: string) {
  return `/media/${file.replace(/\.(gif|png|jpg)$/, '.webp')}`
}

export const crew = [
  {
    name: 'Margus',
    role: 'THE SYSTEMS',
    detail: 'Core loop. Ghosts. Architecture. Keeping the whole production standing.',
  },
  {
    name: 'Nils',
    role: 'THE VISION',
    detail: 'Concept. Level design. The walker. Our most necessary AI critic.',
  },
  {
    name: 'Surhay Bas',
    role: 'THE FEEL',
    detail: 'Movement. First-person arms. Shield. Sound. “We do no funny.”',
  },
  {
    name: 'Riho',
    role: 'THE BONES',
    detail: 'Weapons. Characters. Vehicles. Rebuilding the rigs by hand.',
  },
  {
    name: 'Oliver',
    role: 'THE PRODUCTION',
    detail: 'Devlog. Asset generation. Sound integration. Release packaging.',
  },
]
