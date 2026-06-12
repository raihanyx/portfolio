import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PROFILE } from '../../data/profile'

const LINKS = [
  { to: '/', idx: '01', label: 'Home', match: (p) => p === '/' },
  { to: '/work', idx: '02', label: 'Work', match: (p) => p.startsWith('/work') || p.startsWith('/geoquiz') },
  { to: '/about', idx: '03', label: 'About', match: (p) => p.startsWith('/about') },
]

export default function Nav() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close mobile menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="wrap">
        <Link className="brand" to="/" aria-label="Home, Raihan Sukmana">
          <span className="mono-dot">{PROFILE.initials}</span>
          <span className="who">{PROFILE.name}<small>Full-stack Engineer</small></span>
        </Link>

        <div className={`nav-links${open ? ' open' : ''}`} role="navigation" aria-label="Primary">
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} className={l.match(pathname) ? 'active' : undefined}>
              <span className="idx">{l.idx}</span>{l.label}
            </Link>
          ))}
        </div>

        <a className="nav-cta" href={`mailto:${PROFILE.email}`}>Get in touch</a>
        <button
          className={`nav-burger${open ? ' open' : ''}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span><span></span>
        </button>
      </div>
    </nav>
  )
}
