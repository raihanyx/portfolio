import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/* Rich playful motion (matching the design prototype):
   - subtle 3D tilt on [data-tilt] cards
   - magnetic .btn buttons
   - floating cursor preview on the home [data-preview] work list
   All respect reduced-motion / touch. Re-binds on each route change. */
export function useMotion() {
  const { pathname } = useLocation()

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const noHover = window.matchMedia('(hover: none)').matches
    const ac = new AbortController()
    const { signal } = ac

    // --- tilt ---
    if (!reduce) {
      document.querySelectorAll('[data-tilt]').forEach((card) => {
        card.addEventListener('pointermove', (e) => {
          const r = card.getBoundingClientRect()
          const px = (e.clientX - r.left) / r.width - 0.5
          const py = (e.clientY - r.top) / r.height - 0.5
          card.style.transform = `translateY(-6px) perspective(900px) rotateX(${(-py * 4).toFixed(2)}deg) rotateY(${(px * 5).toFixed(2)}deg)`
        }, { signal })
        card.addEventListener('pointerleave', () => { card.style.transform = '' }, { signal })
      })
    }

    // --- magnetic buttons ---
    if (!reduce && !noHover) {
      document.querySelectorAll('.btn').forEach((b) => {
        b.addEventListener('pointermove', (e) => {
          const r = b.getBoundingClientRect()
          const x = e.clientX - r.left - r.width / 2
          const y = e.clientY - r.top - r.height / 2
          b.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`
        }, { signal })
        b.addEventListener('pointerleave', () => { b.style.transform = '' }, { signal })
      })
    }

    // --- floating preview on home work list ---
    let prev = null
    let raf = null
    const list = document.querySelector('[data-preview]')
    if (list && !noHover && !reduce) {
      prev = document.createElement('div')
      prev.className = 'wr-preview'
      prev.innerHTML = '<img alt="">'
      document.body.appendChild(prev)
      const img = prev.querySelector('img')
      let tx = 0, ty = 0, cx = 0, cy = 0
      const loop = () => {
        cx += (tx - cx) * 0.16; cy += (ty - cy) * 0.16
        prev.style.left = cx + 'px'; prev.style.top = cy + 'px'
        raf = requestAnimationFrame(loop)
      }
      list.querySelectorAll('.work-row').forEach((row) => {
        row.addEventListener('pointerenter', () => {
          img.src = row.getAttribute('data-preview-src')
          prev.classList.add('show')
          if (!raf) loop()
        }, { signal })
        row.addEventListener('pointermove', (e) => { tx = e.clientX; ty = e.clientY }, { signal })
        row.addEventListener('pointerleave', () => {
          prev.classList.remove('show')
          if (raf) { cancelAnimationFrame(raf); raf = null }
        }, { signal })
      })
    }

    return () => {
      ac.abort()
      if (raf) cancelAnimationFrame(raf)
      if (prev) prev.remove()
    }
  }, [pathname])
}
