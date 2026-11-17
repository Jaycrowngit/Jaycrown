/**
 * Site-wide motion: Lenis smooth scroll + GSAP reveals.
 * Runs on every Astro page load (view transitions keep the JS context alive),
 * and tears down triggers before each swap so nothing leaks between pages.
 */
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, SplitText)

const EASE = 'expo.out'
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

let lenis: Lenis | null = null
let splits: SplitText[] = []

/** Pause / resume smooth scrolling (e.g. while the mobile menu is open). */
export function setScrollLocked(locked: boolean) {
  if (locked) lenis?.stop()
  else lenis?.start()
  document.documentElement.style.overflow = locked ? 'hidden' : ''
}

function initLenis() {
  if (lenis || reduced()) return
  lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((t) => lenis?.raf(t * 1000))
  gsap.ticker.lagSmoothing(0)

  // Anchor links scroll smoothly through Lenis
  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href*="#"]')
    if (!a || a.pathname !== location.pathname) return
    const target = a.hash && document.querySelector(a.hash)
    if (!target) return
    e.preventDefault()
    lenis?.scrollTo(target as HTMLElement, { offset: -80 })
    history.replaceState(null, '', a.hash)
  })
}

function showAll() {
  gsap.set('[data-reveal], [data-split]', { opacity: 1, y: 0, clearProps: 'transform' })
}

function initReveals() {
  if (reduced()) return showAll()

  // Headings: line-by-line mask reveal
  document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
    const immediate = el.hasAttribute('data-immediate')
    const split = SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      autoSplit: true,
      onSplit(self) {
        gsap.set(el, { opacity: 1 })
        return gsap.from(self.lines, {
          yPercent: 110,
          duration: 1.1,
          ease: EASE,
          stagger: 0.08,
          delay: immediate ? 0.15 : 0,
          scrollTrigger: immediate ? undefined : { trigger: el, start: 'top 88%', once: true },
        })
      },
    })
    splits.push(split)
  })

  // Blocks already on screen animate in right away, top to bottom
  const all = gsap.utils.toArray<HTMLElement>('[data-reveal]')
  const inView = all.filter((el) => el.getBoundingClientRect().top < window.innerHeight * 0.98)
  gsap.to(inView, { opacity: 1, y: 0, duration: 0.9, ease: EASE, stagger: 0.06, delay: 0.1 })

  // The rest: fade + lift on scroll, batched so siblings stagger naturally
  const later = all.filter((el) => !inView.includes(el))
  if (later.length) ScrollTrigger.batch(later, {
    start: 'top 90%',
    once: true,
    onEnter: (els) =>
      gsap.to(els, { opacity: 1, y: 0, duration: 0.9, ease: EASE, stagger: 0.07, overwrite: true }),
  })
}

function teardown() {
  splits.forEach((s) => s.revert())
  splits = []
  ScrollTrigger.getAll().forEach((t) => t.kill())
}

document.addEventListener('astro:page-load', () => {
  document.documentElement.dataset.motion = 'ready'
  initLenis()
  lenis?.resize()
  initReveals()
  ScrollTrigger.refresh()
})
document.addEventListener('astro:before-swap', teardown)
