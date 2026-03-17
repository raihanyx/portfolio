import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import '../../styles/components.css'

export default function Nav() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="nav">
      <div className="container nav-wrap">
        <Link className="brand" to="/" aria-label="Home">
          <img src="/assets/images/Logo.JPG" alt="RS" className="brand-logo" />
        </Link>
        <div className="links" role="navigation" aria-label="Primary">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
          <button className="pill theme-toggle" onClick={toggleTheme} title="Toggle theme">
            {theme === 'dark' ? '☀ Light' : '☾ Dark'}
          </button>
        </div>
      </div>
    </nav>
  )
}
