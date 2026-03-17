import { Link } from 'react-router-dom'
import './ISaveIt.css'

const screens = ['01','04','05','06','07','08','09','10','11','12','13','14']

export default function ISaveIt() {
  return (
    <>
      <header className="container hero">
        <div className="artcard">
          <div className="art-body">
            <div className="meta"><span>2022</span><span className="badge">Web App</span></div>
            <h1 className="title">iSaveIt</h1>
            <p className="subtitle">A money management app to help users organise budgets and track expenses — built to promote financial literacy.</p>
          </div>
        </div>
      </header>

      <section className="container section">
        <div className="prose">
          <p><strong>What it is.</strong> iSaveIt helps you make sense of your money. Users create budgets, record transactions, and see where cash actually goes — with a simple, forgiving workflow that encourages consistency.</p>
          <p><strong>What I built.</strong> I developed the backend using <strong>Django (Python)</strong>, implementing core features like budgeting tools, transaction input, and financial tracking. Authentication, models, and a clean API layer keep things maintainable.</p>
          <p><strong>Design contribution.</strong> I also contributed to the design in <strong>Figma</strong> — shaping the information architecture, screen flows, and UI components so that entering expenses is fast and error-proof.</p>
        </div>
      </section>

      <section className="container section">
        <div className="prose">
          <h3>Design snapshots</h3>
          <p>These are selected screens and components from the Figma work.</p>
        </div>
        <div className="grid-4" aria-label="iSaveIt design gallery">
          {screens.map((n, i) => (
            <img key={n} src={`/assets/images/iSaveIt/screen-${n}.png`} alt={`iSaveIt design screen ${i + 1}`} />
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="prose">
          <h3>Stack highlights</h3>
          <ul>
            <li><strong>Backend:</strong> Django (Python), Django ORM, auth, REST endpoints</li>
            <li><strong>Data:</strong> PostgreSQL for transactions, budgets, and categories</li>
            <li><strong>Infra:</strong> GitHub for version control, CI/CD-friendly layout</li>
          </ul>
          <p className="mt-3"><Link className="btn" to="/projects">← Back to Projects</Link></p>
        </div>
      </section>
    </>
  )
}
