import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import './Nav.css'

export default function Nav() {
  const { toggleTheme } = useTheme()

  return (
    <nav className="nav">
      <div className="container nav-wrap">
        <Link className="brand" to="/" aria-label="Raihan logo">
          <div className="logo"><span>R</span></div>
          <span className="sr-only">Raihan</span>
        </Link>
        <div className="links" role="navigation" aria-label="Primary">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
          <button className="pill" onClick={toggleTheme} title="Toggle theme">Toggle</button>
        </div>
      </div>
    </nav>
  )
}
