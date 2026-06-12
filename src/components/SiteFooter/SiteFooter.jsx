import { PROFILE } from '../../data/profile'

/* Contact section + footer bar, appended to every page (matches the design). */
export default function SiteFooter() {
  return (
    <>
      <section className="contact" id="contact">
        <div className="wrap">
          <div className="reveal"><div className="eyebrow">Contact</div></div>
          <h2 className="reveal" style={{ marginTop: 22 }}>
            Let's build<br />something <a href={`mailto:${PROFILE.email}`}>good.</a>
          </h2>
          <p className="c-sub reveal">
            Open to graduate and software engineering roles. Have a project, a question,
            or just want to say hi? My inbox is open.
          </p>
          <div className="contact-actions reveal">
            <a className="btn" href={`mailto:${PROFILE.email}`}>{PROFILE.email} <span className="arr">↗</span></a>
            <a className="btn ghost" href={PROFILE.resume} target="_blank" rel="noreferrer">Résumé</a>
          </div>
          <div className="wordmark reveal" aria-hidden="true">RAIHAN{' '}SUKMANA</div>
        </div>
      </section>

      <footer className="footer-bar">
        <div className="wrap">
          <span>© {new Date().getFullYear()} Raihan Sukmana, Brisbane, AU</span>
          <div className="footer-links">
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={`mailto:${PROFILE.email}`}>Email</a>
          </div>
        </div>
      </footer>
    </>
  )
}
