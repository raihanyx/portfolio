import { Link } from 'react-router-dom'
import projects from '../../data/projects'
import './Projects.css'

export default function Projects() {
  return (
    <section className="container">
      <h2 className="title">Projects</h2>
      <p className="subtitle">These are the projects that I have done so far in my career.</p>

      <div className="grid">
        {projects.map(p => (
          <article className="card" key={p.slug}>
            <div className="thumb" style={p.thumbStyle} />
            <div className="body">
              <div className="meta">
                <span>{p.year}</span>
                <span className="badge">{p.badge}</span>
              </div>
              <h3 style={{ margin: '0 0 6px' }}>{p.title}</h3>
              <p className="mt-2" style={{ color: 'var(--muted)' }}>{p.description}</p>
              <p className="mt-3">
                <Link to={`/projects/${p.slug}`}>Read more →</Link>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
