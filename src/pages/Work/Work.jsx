import { Link } from 'react-router-dom'
import { PROJECTS } from '../../data/projects'

function ProjCard({ p }) {
  const sub = p.full.split('—')[1] ? p.full.split('—')[1].trim() : p.title
  return (
    <article className="proj-card reveal" data-tilt>
      <Link to={`/work/${p.slug}`} aria-label={p.title}>
        <div className={`pc-thumb${p.coverContain ? ' contain' : ''}`} style={{ background: p.coverBg }}>
          <span className="pc-badge">{p.tags[0]}</span>
          <img className="pc-img" src={p.cover} alt={p.title} style={{ objectPosition: p.coverPos, width: p.coverWidth }} />
        </div>
        <div className="pc-body">
          <div className="pc-meta"><span>{sub}</span><span>{p.year}</span></div>
          <h3>{p.title}</h3>
          <p>{p.short}</p>
          <div className="pc-foot">Read case study <span className="arr">→</span></div>
        </div>
      </Link>
    </article>
  )
}

export default function Work() {
  return (
    <>
      <section className="hero wrap" style={{ paddingBottom: 0 }}>
        <div className="reveal">
          <div className="eyebrow">Index · {String(PROJECTS.length).padStart(2, '0')} projects</div>
          <h1 style={{ fontSize: 'clamp(40px,8vw,104px)', marginTop: 18, letterSpacing: '-0.035em', lineHeight: 0.95 }}>Work</h1>
          <p className="hero-sub" style={{ marginTop: 22 }}>
            Full-stack apps, backend services and end-to-end product design — from a couples finance app to a QR ordering platform.
          </p>
        </div>
      </section>

      <section className="section wrap" style={{ paddingTop: 'clamp(40px,5vw,72px)' }}>
        <div className="proj-grid">
          {PROJECTS.map((p) => <ProjCard key={p.slug} p={p} />)}
        </div>
      </section>
    </>
  )
}
