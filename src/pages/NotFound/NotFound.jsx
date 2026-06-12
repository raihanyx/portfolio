import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="hero wrap" style={{ paddingBottom: 'clamp(80px,12vw,160px)' }}>
      <div className="eyebrow">Error · 404</div>
      <h1 style={{ fontSize: 'clamp(56px,14vw,160px)', marginTop: 18, lineHeight: 0.92 }}>
        Lost the<br /><em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>thread.</em>
      </h1>
      <p className="hero-sub" style={{ marginTop: 22 }}>
        This page doesn't exist, or it moved. Let's get you back on track.
      </p>
      <div className="hero-actions" style={{ marginTop: 26 }}>
        <Link className="btn" to="/">Back home <span className="arr">→</span></Link>
        <Link className="btn ghost" to="/work">View work</Link>
      </div>
    </section>
  )
}
