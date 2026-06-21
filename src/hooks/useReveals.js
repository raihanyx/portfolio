import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useReveals() {
  const { pathname, key } = useLocation()

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const els = [...document.querySelectorAll('.reveal,[data-stagger]')]

    const revealEl = (el) => {
      if (el.hasAttribute('data-stagger')) {
        el.classList.add('is-in')
        ;[...el.children].forEach((c, i) => { c.style.transitionDelay = `${i * 70}ms` })
      } else {
        el.classList.add('is-in')
      }
    }

    if (reduce) {
      els.forEach(revealEl)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealEl(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0 }
    )

    els.forEach((el) => observer.observe(el))

    // safety sweeps for late layout shifts (font loading, short pages)
    const sweep = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight
      els.forEach((el) => {
        if (el.classList.contains('is-in')) return
        const r = el.getBoundingClientRect()
        if (r.top < vh * 0.92 && r.bottom > 0) {
          revealEl(el)
          observer.unobserve(el)
        }
      })
    }
    const timers = [120, 350, 700, 1200].map((t) => setTimeout(sweep, t))
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(sweep)

    const hero = document.querySelector('.hero')
    const heroT = hero ? setTimeout(() => hero.classList.add('is-in'), 80) : null

    return () => {
      observer.disconnect()
      timers.forEach(clearTimeout)
      if (heroT) clearTimeout(heroT)
    }
  }, [pathname, key])
}
