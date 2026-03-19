import { Link } from 'react-router-dom'
import projects from '../../data/projects'
import Reveal from '../../components/Reveal/Reveal'
import '../../styles/projects.css'

export default function Projects() {
  return (
    <section className="container projects-page">
      <h2 className="title">Projects</h2>
      <p className="subtitle">These are the projects that I have done so far in my career.</p>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 80}>
          <article className="card">
            <div className="thumb" style={p.thumbStyle} />
            <div className="body">
              <div className="meta">
                <span>{p.year}</span>
                <span className="badge">{p.badge}</span>
              </div>
              <h3 style={{ margin: '0 0 6px' }}>{p.title}</h3>
              <p className="mt-2" style={{ color: 'var(--muted)' }}>{p.description}</p>
              <p className="read-more">
                <Link to={`/projects/${p.slug}`}>Read more →</Link>
              </p>
            </div>
          </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
