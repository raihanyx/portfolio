import { Link } from 'react-router-dom'
import '../../../styles/projects-shared.css'

export default function MenuScanOrder() {
  return (
    <>
      <header className="container hero">
        <div className="artcard">
          <div className="art-body">
            <div className="meta"><span>2024</span><span className="badge">SaaS</span></div>
            <h1 className="title">MenuScanOrder</h1>
            <p className="subtitle">QR code ordering &amp; table management for cafes and restaurants — built to make front-of-house smoother for staff and simpler for guests.</p>
          </div>
        </div>
      </header>

      <section className="container section">
        <div className="prose">
          <p><strong>Why this exists.</strong> I've watched busy services fall apart over tiny frictions — missing tickets, double-seated tables, a queue at the host stand while staff hunt for menus. <em>MenuScanOrder</em> is the platform I built to remove those frictions: guests scan, order, and pay from the table; staff keep a clean view of orders and seating; owners get a system that actually reflects how a venue runs.</p>
          <p><strong>Who it serves.</strong> It's designed for two sides at once: <em>operators</em> who want a calmer, more profitable service, and <em>guests</em> who want convenience without confusion. Managers gain a live map of tables and orders; guests get a digital menu that respects preferences and context.</p>
        </div>
      </section>

      <section className="container section">
        <div className="grid-2">
          <div className="prose">
            <h3>What it does</h3>
            <ul>
              <li><strong>Admin dashboard:</strong> manage businesses, users, and roles with clarity.</li>
              <li><strong>Digital menus:</strong> categories, items, pricing — easy to create and update.</li>
              <li><strong>Table management:</strong> live status of tables to seat guests without guesswork.</li>
              <li><strong>QR codes per table/session:</strong> guests scan to open the right menu instantly.</li>
              <li><strong>Seamless ordering:</strong> guests place orders on their phones; changes are synced in real time.</li>
              <li><strong>Order management:</strong> staff view and action orders as they flow through the pass.</li>
            </ul>
          </div>
          <div className="prose">
            <h3>How it's built</h3>
            <ul>
              <li><strong>Backend:</strong> PHP with PostgreSQL for reliable relational data and transactions.</li>
              <li><strong>Architecture:</strong> multi-tenant SaaS concepts (owners, restaurant, menus, tables, orders, items).</li>
              <li><strong>Auth &amp; roles:</strong> admins vs business owners, scoped access per restaurant.</li>
              <li><strong>Ops:</strong> version control on GitHub, CI/CD-friendly layout for future deploys.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="prose">
          <h3>Data model (short version)</h3>
          <p>Admins manage the platform. Each business owner manages a single restaurant. A restaurant has many menus; each menu has many items (with optional extra categories the owner defines). Each table can have many orders; each order can contain multiple items. Owners and staff update table and order status in real time.</p>
          <figure style={{ margin: '20px 0 0' }}>
            <img src="/assets/images/menuscanorder/IMG_0952.png" alt="MenuScanOrder database design" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }} />
            <figcaption style={{ color: 'var(--muted)', fontSize: '14px', marginTop: '6px' }}>Database design for MenuScanOrder</figcaption>
          </figure>
        </div>
      </section>

      <section className="container section">
        <div className="prose">
          <h3>Design document</h3>
          <p>Want the full picture — rationale, UX, and schema diagrams? Read the design doc below.</p>
          <p>
            <a className="btn" href="/assets/documents/menuscanorder_design_document.pdf" target="_blank" rel="noreferrer">Open PDF</a>
            <span style={{ marginLeft: '12px', color: 'var(--muted)' }}>(opens in a new tab)</span>
          </p>
          <p className="mt-3"><Link className="btn" to="/projects">← Back to Projects</Link></p>
        </div>
      </section>
    </>
  )
}
