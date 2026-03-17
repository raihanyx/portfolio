import { Link } from 'react-router-dom'
import './SeekSupply.css'

export default function SeekSupply() {
  return (
    <>
      <header className="container hero">
        <div className="artcard">
          <div className="art-body">
            <div className="meta"><span>2024</span><span className="badge">Design</span></div>
            <h1 className="title">SeekSupply</h1>
            <p className="subtitle">A marketplace that connects small &amp; medium businesses and event organizers with nearby, transparent suppliers — designed end-to-end in Figma.</p>
          </div>
        </div>
      </header>

      <section className="container section">
        <div className="prose">
          <p><strong>Where it started.</strong> I kept hearing the same story from small venues and event organizers: finding reliable suppliers is slow, opaque, and biased toward big marketplaces. Local suppliers exist, but discovery is hard, and quality isn't obvious.</p>
          <p><strong>The leap.</strong> I framed a BHAG for <em>SeekSupply</em>: empower local economies by making supplier discovery fast, transparent, and aligned to each business's standards. From there I ran a full design process, problem research, HMW prompts, and a Business Model Canvas to anchor value, customers, and channels.</p>
          <p><strong>Design thinking in action.</strong> I built personas for owners, managers, and suppliers, mapped their journeys, then wrote the user flows: onboarding, sourcing with filters that actually matter (MOQ, lead time, certifications), requesting quotes, and maintaining preferred lists. A storyboard clarified the "day-in-the-life" pain points, and the data model captured relationships between businesses, suppliers, products, and orders.</p>
          <p><strong>From lo-fi to hi-fi.</strong> I sketched low-fidelity screens to test flow assumptions quickly, then iterated into a high-fidelity prototype, a polished e-commerce experience tuned for SMEs and events: quick supplier search, transparent profiles, comparable quotes, and repeatable re-orders.</p>
        </div>
      </section>

      <section className="container section">
        <div className="prose">
          <h3>High-fidelity prototype</h3>
          <p>Selected screens from the final Figma build.</p>
        </div>
        <div className="grid-4" aria-label="SeekSupply hi-fi gallery">
          {Array.from({ length: 19 }, (_, i) => {
            const n = String(i + 1).padStart(2, '0')
            return (
              <img key={n} src={`/assets/images/seeksupply/screen-${n}.png`} alt={`SeekSupply screen ${n}`} />
            )
          })}
        </div>
      </section>

      <section className="container section">
        <div className="prose">
          <p className="mt-3"><Link className="btn" to="/projects">← Back to Projects</Link></p>
        </div>
      </section>
    </>
  )
}
