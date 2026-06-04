import { Link, useParams } from 'react-router-dom'
import { PROJECTS, findProject } from '../../data/projects'

const html = (s) => ({ dangerouslySetInnerHTML: { __html: s } })

export default function ProjectDetail() {
  const { slug } = useParams()
  const p = findProject(slug)

  if (!p) {
    return (
      <section className="section wrap" style={{ paddingTop: 'calc(var(--nav-h) + 60px)' }}>
        <h1>Not found</h1>
        <p style={{ marginTop: 16 }}>
          <Link className="link-arrow" to="/work">← Back to work</Link>
        </p>
      </section>
    )
  }

  const idx = PROJECTS.findIndex((x) => x.slug === slug)
  const next = PROJECTS[(idx + 1) % PROJECTS.length]

  return (
    <>
      <section className="pd-hero wrap">
        <Link className="pd-back" to="/work">← All work</Link>
        <div className="reveal">
          <div className="pd-meta">
            <span className="badge">{p.tags[0]}</span>
            {p.tags.slice(1).map((t) => <span key={t}>{t}</span>)}
            <span>·</span><span>{p.year}</span>
          </div>
          <h1>{p.title}</h1>
          <p className="pd-tagline">{p.short}</p>
          {p.accentLinks && p.accentLinks.length > 0 && (
            <div className="pd-actions">
              {p.accentLinks.map((l, i) => {
                const cls = `btn ${i === 0 ? 'accent' : 'ghost'}`
                return l.internal
                  ? <Link key={l.label} className={cls} to={l.to}>{l.label} <span className="arr">↗</span></Link>
                  : <a key={l.label} className={cls} href={l.href} target="_blank" rel="noreferrer">{l.label} <span className="arr">↗</span></a>
              })}
            </div>
          )}
        </div>

        <div className="pd-facts reveal" data-stagger>
          {p.facts.map(([k, v]) => (
            <div className="pd-fact" key={k}><div className="fl">{k}</div><div className="fv">{v}</div></div>
          ))}
        </div>

        <div className="pd-cover reveal" style={{ background: p.coverBg }}>
          <img src={p.cover} alt={p.title} style={p.coverContain ? { maxWidth: 520, margin: '48px auto' } : undefined} />
        </div>
      </section>

      <section className="section wrap" style={{ paddingTop: 'clamp(48px,6vw,90px)' }}>
        <div className="pd-body">
          <div className="sticky-label"><div className="eyebrow">Overview</div></div>
          <div>
            {p.overview.map((o, i) => (
              <div className="block reveal" key={i}>
                <h3>{o.h}</h3>
                <p {...html(o.p)} />
              </div>
            ))}
          </div>
        </div>

        {p.features && (
          <div className="pd-body" style={{ marginTop: 'clamp(20px,3vw,40px)' }}>
            <div className="sticky-label"><div className="eyebrow">Features</div></div>
            <div className="feat-grid reveal" data-stagger>
              {p.features.map(([h, b], i) => (
                <div className="feat-card" key={i}>
                  <div className="fc-num">{String(i + 1).padStart(2, '0')}</div>
                  <h4>{h}</h4>
                  <p>{b}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {p.arch && (
          <div className="pd-body" style={{ marginTop: 'clamp(20px,3vw,40px)' }}>
            <div className="sticky-label"><div className="eyebrow">Architecture</div></div>
            <div>
              <div className="block reveal">
                <h3>How it's built</h3>
                <ul>{p.arch.left.map((l, i) => <li key={i} {...html(l)} />)}</ul>
              </div>
              <div className="block reveal">
                <h3>Database — 6 tables, all RLS</h3>
                <ul>{p.arch.right.map((l, i) => <li key={i} {...html(l)} />)}</ul>
              </div>
            </div>
          </div>
        )}

        {p.gallery && (
          <div className="pd-body" style={{ marginTop: 'clamp(20px,3vw,40px)' }}>
            <div className="sticky-label">
              <div className="eyebrow">Screens</div>
              {p.galleryNote && <p style={{ color: 'var(--muted)', fontSize: 14, marginTop: 10 }}>{p.galleryNote}</p>}
            </div>
            <div className={`gallery ${p.gallery.type} reveal`} data-stagger>
              {p.gallery.imgs.map((src) => (
                <div className="shot" key={src}><img src={src} alt={`${p.title} screen`} loading="lazy" /></div>
              ))}
            </div>
          </div>
        )}

        <div className="pd-body" style={{ marginTop: 'clamp(20px,3vw,40px)' }}>
          <div className="sticky-label"><div className="eyebrow">Stack</div></div>
          <div className="reveal">
            <table className="stack-table">
              <tbody>
                {p.stack.map(([k, v]) => <tr key={k}><td>{k}</td><td>{v}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="wrap">
        <div className="pd-next reveal">
          <Link to={`/work/${next.slug}`}>
            <div>
              <div className="nx-label">Next project</div>
              <h3>{next.title}</h3>
            </div>
            <div className="nx-go">→</div>
          </Link>
        </div>
      </section>
    </>
  )
}
