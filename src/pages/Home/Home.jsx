import { Link } from 'react-router-dom'
import { PROFILE } from '../../data/profile'
import { PROJECTS } from '../../data/projects'
import { useTitle } from '../../hooks/useTitle'

/* split a string into per-word spans for the kinetic reveal */
function Words({ text }) {
  const parts = text.split(' ')
  return parts.map((word, i) => (
    <span className="word" key={i}><span>{word}</span></span>
  )).reduce((acc, el, i) => (i === 0 ? [el] : [...acc, ' ', el]), [])
}

function WorkRow({ p, i }) {
  const num = String(i + 1).padStart(2, '0')
  return (
    <Link className="work-row" to={`/work/${p.slug}`} data-preview-src={p.cover}>
      <div className="wr-num">{num}</div>
      <div className="wr-title">
        <h3>{p.title}</h3>
        <div className="wr-desc">{p.short}</div>
      </div>
      <div className="wr-tags">{p.tags.map((t) => <span className="tg" key={t}>{t}</span>)}</div>
      <div className="wr-year">{p.year}</div>
      <div className="wr-go" aria-hidden="true">↗</div>
    </Link>
  )
}

export default function Home() {
  useTitle(null)
  const featured = PROJECTS.slice(0, 4)

  return (
    <>
      <section className="hero wrap" id="hero">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="hero-status reveal"><span className="dot"></span> Open to graduate &amp; software roles</div>
            <h1>
              <Words text="Full-stack" /><br />
              <Words text="engineer" /> <em><Words text="who" /></em><br />
              <span className="thin"><Words text="sweats the" /></span><br />
              <span className="thin"><Words text="details." /></span>
            </h1>
            <p className="hero-sub reveal">
              I'm <b>Raihan Sukmana</b>. I design and build practical, reliable software end-to-end.
              Backend APIs, frontends, and the data in between. Currently a SWE intern at WebAlive, based in Brisbane.
            </p>
            <div className="hero-actions reveal">
              <Link className="btn" to="/work">View work <span className="arr">→</span></Link>
              <Link className="btn ghost" to="/about">About me</Link>
            </div>
          </div>
          <div className="hero-photo reveal">
            <img src={PROFILE.photo} alt="Raihan Sukmana" />
            <div className="ph-tag">
              <span className="loc">◎ Brisbane, AU</span>
              <span>'26</span>
            </div>
          </div>
        </div>

        <div className="hero-meta reveal" data-stagger>
          {PROFILE.metrics.map(([k, v, em], i) => (
            <div className="cell" key={i}>
              <div className="k">{em ? <em>{k}</em> : k}</div>
              <div className="v">{v}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="marquee reveal" aria-hidden="true">
        <div className="track">
          {[0, 1].map((s) => (
            <div className="seq" key={s}>
              {PROFILE.marquee.map((m, i) => <span className="item" key={i}>{m}</span>)}
            </div>
          ))}
        </div>
      </div>

      <section className="section wrap" id="featured">
        <div className="sec-head reveal">
          <div>
            <div className="eyebrow">Selected work</div>
            <h2>Things I've built<br />&amp; designed.</h2>
          </div>
          <p className="lead">A mix of full-stack apps, backend work, and product design. Hover a row for a peek, then click through for the full story.</p>
        </div>

        <div className="work-list" data-preview>
          {featured.map((p, i) => <WorkRow key={p.slug} p={p} i={i} />)}
        </div>
        <div className="reveal" style={{ marginTop: 36 }}>
          <Link className="link-arrow" to="/work">See all {PROJECTS.length} projects <span className="arr">↗</span></Link>
        </div>
      </section>
    </>
  )
}
