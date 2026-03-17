import { Link } from 'react-router-dom'
import '../../../styles/projects-shared.css'

export default function NontonNyaman() {
  return (
    <>
      <header className="container hero">
        <div className="artcard">
          <div className="art-body">
            <div className="meta"><span>2024</span><span className="badge">Web App</span></div>
            <h1 className="title">NontonNyaman</h1>
            <p className="subtitle">A mobile app that helps mobility-impaired fans navigate stadiums during live events — quickly, safely, and with dignity.</p>
          </div>
        </div>
      </header>

      <section className="container section">
        <div className="prose">
          <h3>App start &amp; identity</h3>
          <p>Here's the start screen and logo we shipped for the first public demo.</p>
          <figure style={{ margin: 0 }}>
            <img src="/assets/images/Introduction.png" alt="NontonNyaman start page and logo" style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }} />
            <figcaption style={{ color: 'var(--muted)', fontSize: '14px', marginTop: '8px' }}>NontonNyaman — start page and logo</figcaption>
          </figure>
        </div>
      </section>

      <section className="container section">
        <div className="prose">
          <p><strong>Why I built this.</strong> I love the energy of live sports, but in our early research it was obvious that the experience isn't equal for everyone. Accessibility details are scattered, staff are stretched, and moving from A to B inside a stadium can be stressful if you use a wheelchair or walker. <em>NontonNyaman</em> ("comfortable watching" in Bahasa Indonesia) is my team's attempt to fix that, a companion app that puts navigation, assistance, and information in one place for mobility-impaired fans.</p>
          <p><strong>What the app does.</strong> Pick your stadium, choose a destination like an accessible bathroom, ramp, or nearest exit, and the app guides you with clear directions. If something goes wrong, there's an emergency button to reach stadium support immediately, and a general "request assistance" flow that notifies trained staff to come to you. Profiles store only the essentials, name and mobility needs, so staff can help appropriately.</p>
          <p><strong>How we got there.</strong> We mixed desk research with fieldwork: five interviews with mobility-impaired spectators, on-site surveys at Suncorp and The Gabba to map key facilities, and a review of the market (Ticketmaster, Ticketek, Eventbrite). The gap was consistent across sources: accessibility info is shallow, navigation is ad-hoc, and assistance is reactive. We designed to fill that gap.</p>
        </div>
      </section>

      <section className="container section">
        <div className="prose">
          <h3>Exhibition demo</h3>
          <p>A short clip from the on‑campus exhibition where we walked people through navigation, assistance, and profiles.</p>
          <video
            controls
            preload="metadata"
            muted
            poster="/assets/images/Introduction.png"
            style={{ maxWidth: '250px', width: '100%', borderRadius: '12px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}
          >
            <source src="/assets/video/exhibition.mp4" type="video/mp4" />
            Your browser can't play this video.{' '}
            <a href="/assets/video/exhibition.mp4">Download the MP4</a>.
          </video>
        </div>
      </section>

      <section className="container section">
        <div className="grid">
          <div className="prose">
            <h3>Research &amp; methodology</h3>
            <p>We used a mixed-methods approach:</p>
            <ul>
              <li><strong>Literature review:</strong> what "good" accessibility looks like in stadia and law (e.g., ADA adherence, trained staff, wayfinding).</li>
              <li><strong>Market comparison:</strong> popular event apps lack depth on accessibility and proactive assistance.</li>
              <li><strong>Interviews:</strong> validated needs like emergency assistance, direct staff contact, and private escalation (alert staff, not strangers).</li>
              <li><strong>On-site survey:</strong> mapped facility coordinates (exits, ramps, bathrooms) to power navigation.</li>
            </ul>
          </div>
          <div className="prose">
            <h3>Key features</h3>
            <ul>
              <li><strong>Stadium navigation:</strong> searchable stadiums and one-tap routing to accessible facilities.</li>
              <li><strong>Emergency assist:</strong> dedicated button to contact stadium emergency support fast.</li>
              <li><strong>Request assistance:</strong> notify designated staff who come to your location.</li>
              <li><strong>User profile:</strong> minimal data (name, mobility details) so staff can help effectively.</li>
              <li><strong>News &amp; stays:</strong> optional feed and nearby accommodation suggestions for traveling fans.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="grid">
          <div className="prose">
            <h3>Tech choices</h3>
            <ul>
              <li><strong>Frontend:</strong> Flutter (Dart) for a fast, accessible mobile UI.</li>
              <li><strong>Backend:</strong> Python + Django with ORM, auth, and admin out of the box.</li>
              <li><strong>Data:</strong> Stadium facility coordinates (lat/long) stored for routing.</li>
              <li><strong>Infra:</strong> GitHub for version control; Heroku for easy deploys to staging.</li>
            </ul>
          </div>
          <div className="prose">
            <h3>Safety &amp; respect</h3>
            <ul>
              <li><strong>Ethics:</strong> design for inclusion; support assistive tech; avoid dark patterns.</li>
              <li><strong>Security:</strong> lean on Django hardening and encrypted storage for sensitive bits.</li>
              <li><strong>Privacy:</strong> follow Australia's APPs, consent, data minimisation, and encryption of sensitive info.</li>
              <li><strong>Risk planning:</strong> identified technical and team risks and tracked mitigations.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="prose">
          <h3>Design snapshots</h3>
          <p>Here are selected screens from the NontonNyaman app design.</p>
        </div>
        <div className="grid-5" aria-label="NontonNyaman design gallery">
          {Array.from({ length: 5 }, (_, i) => {
            const n = String(i + 1).padStart(2, '0')
            return (
              <img key={n} src={`/assets/images/nontonnyaman/screen-${n}.png`} alt={`NontonNyaman design ${i + 1}`} />
            )
          })}
        </div>
      </section>

      <section className="container section">
        <div className="prose">
          <h3>Where it landed</h3>
          <p>Usability tests were encouraging: clearer wayfinding reduced anxiety, and direct staff contact felt safer than broadcasting for help. There's still a long road — better indoor positioning, richer facility data, and deeper partnerships with venues — but this project proved the value: accessibility isn't a "nice to have"; it's the path to a better game-day for everyone.</p>
          <p className="mt-3"><Link className="btn" to="/projects">← Back to Projects</Link></p>
        </div>
      </section>

      <section className="container section">
        <div className="prose">
          <h3>Technical documentation</h3>
          <p>If you want the full deep dive — research, features, tech stack, and evaluations — read or download the PDF.</p>
          <p>
            <a className="btn" href="/assets/documents/NontonNyaman.pdf" target="_blank" rel="noreferrer">Open PDF</a>
            <span style={{ marginLeft: '12px', color: 'var(--muted)' }}>(opens in a new tab)</span>
          </p>
        </div>
      </section>
    </>
  )
}
