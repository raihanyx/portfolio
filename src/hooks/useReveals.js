import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/* Scroll-position reveal engine (IO-free for resilience, matching the
   design prototype). Re-runs on every route change. Adds `is-in` to
   `.reveal` / `[data-stagger]` elements as they enter the viewport,
   staggers children, and marks the hero in. */
export function useReveals() {
  const { pathname, key } = useLocation()

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let els = [...document.querySelectorAll('.reveal,[data-stagger]')]

    const revealEl = (el) => {
      if (el.hasAttribute('data-stagger')) {
        el.classList.add('is-in')
        ;[...el.children].forEach((c, i) => { c.style.transitionDelay = `${i * 70}ms` })
      } else {
        el.classList.add('is-in')
      }
    }

    const check = () => {
      if (!els.length) return
      const vh = window.innerHeight || document.documentElement.clientHeight
      const still = []
      els.forEach((el) => {
        const r = el.getBoundingClientRect()
        if (r.top < vh * 0.92 && r.bottom > 0) revealEl(el)
        else still.push(el)
      })
      els = still
    }

    if (reduce) {
      els.forEach(revealEl)
      els = []
    } else {
      check()
    }

    // safety sweeps for late layout shifts (font loading, short pages)
    const timers = [120, 350, 700, 1200].map((t) => setTimeout(check, t))
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(check)

    const hero = document.querySelector('.hero')
    const heroT = hero ? setTimeout(() => hero.classList.add('is-in'), 80) : null

    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check, { passive: true })
    window.addEventListener('load', check)

    return () => {
      timers.forEach(clearTimeout)
      if (heroT) clearTimeout(heroT)
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
      window.removeEventListener('load', check)
    }
  }, [pathname, key])
}
