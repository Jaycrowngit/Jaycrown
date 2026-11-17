/**
 * Builds brand assets from the master logo (white JC mark + "Jaycrown" wordmark),
 * recoloured to the site's gold so the logo belongs to the same system.
 *   node scripts/brand-assets.mjs
 * Outputs:
 *   src/assets/brand/jaycrown-mark.png   trimmed mark, white on transparent (CSS mask; site fills it gold)
 *   public/jaycrown-logo-gold.png        full logo (mark + wordmark) in gold, transparent
 *   public/favicon-32.png, public/apple-touch-icon.png, public/icon-512.png  gold mark on dark tile
 */
import sharp from 'sharp'
import { mkdirSync } from 'node:fs'

const MASTER = 'src/assets/brand/jaycrown-master.png'
const GOLD = '#e8b04a' // --accent in global.css
const TILE = '#101218' // --surface in global.css

mkdirSync('src/assets/brand', { recursive: true })

/** Recolour a white-on-transparent image to a solid colour, keeping its alpha. */
async function tint(input, color) {
  const { width, height } = await sharp(input).metadata()
  const alpha = await sharp(input).ensureAlpha().extractChannel(3).png().toBuffer()
  return sharp({ create: { width, height, channels: 3, background: color } })
    .joinChannel(alpha).png().toBuffer()
}

// 1. The mark lives in rows 69–332 of the 500×500 master; trim it tight.
const band = await sharp(MASTER).extract({ left: 0, top: 60, width: 500, height: 282 }).png().toBuffer()
const mark = await sharp(band).trim({ threshold: 1 }).png().toBuffer()
await sharp(mark).toFile('src/assets/brand/jaycrown-mark.png')

// 2. Full logo in gold (for social profiles, docs, OG images).
const full = await sharp(MASTER).trim({ threshold: 1 }).png().toBuffer()
await sharp(await tint(full, GOLD)).toFile('public/jaycrown-logo-gold.png')
console.log('logo public/jaycrown-logo-gold.png')

// 3. App icons: gold mark centred on a rounded dark tile.
const goldMark = await tint(mark, GOLD)
async function icon(size, file, pad = 0.15) {
  const inner = Math.round(size * (1 - pad * 2))
  const glyph = await sharp(goldMark).resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer()
  const r = Math.round(size * 0.22)
  const tile = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${r}" fill="${TILE}"/></svg>`,
  )
  await sharp(tile).composite([{ input: glyph, gravity: 'center' }]).png().toFile(file)
  console.log('icon', file)
}
await icon(32, 'public/favicon-32.png', 0.1)
await icon(180, 'public/apple-touch-icon.png')
await icon(512, 'public/icon-512.png')
