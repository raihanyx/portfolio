import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container">
      <h2 className="title">404</h2>
      <div className="prose">
        <p>This page doesn't exist.</p>
        <p><Link to="/">Back to home →</Link></p>
      </div>
    </section>
  )
}
