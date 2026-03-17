import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        © {new Date().getFullYear()} Raihan •{' '}
        <a href="https://github.com/raihanyx" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </footer>
  )
}
