/**
 * Redacts personal data from portfolio screenshots.
 * Originals are read from private/originals/ (git-ignored) and the redacted
 * copies are written to src/assets/shots/. Re-run after adding regions:
 *   node scripts/redact-shots.mjs
 */
import sharp from 'sharp'
import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const SRC = 'private/originals'
const OUT = 'src/assets/shots'

/** blur: [left, top, width, height] boxes to blur.
 *  patch: copy a clean region from another image over this one. */
const jobs = {
  'byllora-admin-1.png': {
    // "Install Byllora Admin" popup → patch with the same cards from admin-2
    // (wide enough to also cover the popup's drop shadow)
    patch: [{ from: 'byllora-admin-2.png', src: [690, 48, 560, 98], dest: [690, 880] }],
  },
  'byllora-admin-2.png': { blur: [[640, 806, 118, 96]] },      // top-customer names
  'byllora-mobile-3.jpg': { blur: [[40, 940, 170, 135]] },     // top-customer names
  'byllora-mobile-4.jpg': { blur: [[40, 883, 170, 135]] },     // top-customer names
  'mytrader.png': {
    blur: [[1450, 318, 125, 34]], // domain on the upright phone
    // domain on the tilted phone: paint the address bar's own colour along the text line
    paint: [{ line: [1295, 403, 1341, 477], width: 17, color: 'rgb(232,233,237)' }],
  },
}

const FEATHER = 10
/** Blur a box with soft edges so no hard rectangle shows. */
async function softBlur(file, [left, top, width, height]) {
  const region = await sharp(file).extract({ left, top, width, height }).blur(12).removeAlpha().toBuffer()
  const f = FEATHER
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <rect x="${f / 2}" y="${f / 2}" width="${width - f}" height="${height - f}" rx="${f}" fill="#fff"/></svg>`
  const mask = await sharp({ create: { width, height, channels: 3, background: '#000' } })
    .composite([{ input: Buffer.from(svg) }]).blur(f / 2).greyscale().extractChannel(0).png().toBuffer()
  return sharp(region).joinChannel(mask).png().toBuffer()
}

mkdirSync(SRC, { recursive: true })
for (const [file, job] of Object.entries(jobs)) {
  const original = join(SRC, file)
  if (!existsSync(original)) copyFileSync(join(OUT, file), original) // first run: back up
  const layers = []

  for (const box of job.blur ?? []) {
    layers.push({ input: await softBlur(original, box), left: box[0], top: box[1] })
  }
  for (const p of job.patch ?? []) {
    const [left, top, width, height] = p.src
    const region = await sharp(join(SRC, p.from)).extract({ left, top, width, height }).toBuffer()
    layers.push({ input: region, left: p.dest[0], top: p.dest[1] })
  }

  if (job.paint?.length) {
    const { width, height } = await sharp(original).metadata()
    const strokes = job.paint.map(({ line: [x1, y1, x2, y2], width: w, color }) =>
      `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>`)
    layers.push({ input: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">${strokes.join('')}</svg>`) })
  }

  const img = sharp(original).composite(layers)
  await (file.endsWith('.png') ? img.png() : img.jpeg({ quality: 92 })).toFile(join(OUT, file))
  console.log('redacted', file)
}
