import { PROFILE } from '../../data/profile'

function TlItem({ e }) {
  return (
    <div className="tl-item">
      <div className="tl-top">
        <div className="tl-role">{e.role} · <span className="tl-org">{e.org}</span></div>
        <div className="tl-period">{e.period}</div>
      </div>
      <div className="tl-period" style={{ marginTop: 2 }}>{e.loc}</div>
      <ul className="tl-points">{e.points.map((pt, i) => <li key={i}>{pt}</li>)}</ul>
    </div>
  )
}

export default function About() {
  return (
    <section className="about-hero wrap">
      <div className="reveal"><div className="eyebrow">About</div></div>

      <div className="about-cols">
        <div className="about-portrait reveal">
          <img src={PROFILE.photo} alt="Raihan Sukmana" />
        </div>
        <div>
          <h2 className="about-lead reveal">Engineer by training, builder by instinct.</h2>
          <div className="about-prose" style={{ marginTop: 28 }}>
            {PROFILE.bio.map((b, i) => <p className="reveal" key={i}>{b}</p>)}
          </div>
          <div className="hero-actions reveal" style={{ marginTop: 24 }}>
            <a className="btn" href={PROFILE.resume} target="_blank" rel="noreferrer">Résumé <span className="arr">↗</span></a>
            <a className="btn ghost" href={`mailto:${PROFILE.email}`}>Email me</a>
          </div>
        </div>
      </div>

      <div className="skills">
        <div className="sec-head reveal"><div><div className="eyebrow">Toolkit</div><h2 style={{ marginTop: 12 }}>Skills</h2></div></div>
        <div className="skills-grid reveal" data-stagger>
          {PROFILE.skills.map(([label, items]) => (
            <div className="skill-cell" key={label}>
              <div className="sc-label">{label}</div>
              <div className="sc-items">{items.map((it) => <span className="pill" key={it}>{it}</span>)}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="tl">
        <div className="sec-head reveal"><div><div className="eyebrow">Path</div><h2 style={{ marginTop: 12 }}>Experience</h2></div></div>
        <div className="tl-grid reveal">
          <div className="tl-side">Work</div>
          <div className="tl-track">
            {PROFILE.experience.map((e, i) => <TlItem e={e} key={i} />)}
          </div>
        </div>
        <div className="tl-grid reveal" style={{ marginTop: 48 }}>
          <div className="tl-side">Education</div>
          <div className="tl-track">
            {PROFILE.education.map((e, i) => <TlItem e={e} key={i} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
