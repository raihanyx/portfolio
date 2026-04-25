import { Link } from 'react-router-dom'
import '../../../styles/projects-shared.css'

const features = [
  {
    heading: 'Two-sided expense ledger',
    body: 'An honest, running record of who paid what — tracked independently on each side ("they owe me" / "I owe them"). No forced 50/50 split. Mark entries as paid and they move to an archive rather than disappearing.',
  },
  {
    heading: 'Multi-currency support',
    body: 'Supports IDR, THB, AUD, and MMK. Live exchange rates (Open Exchange Rates API, cached hourly) let each partner set their own base currency. Debts stay in their original currency; converted totals are display-only.',
  },
  {
    heading: 'Bucket list & random picker',
    body: "A shared wishlist — restaurants, travel, activities, movies. Both partners add and manage items. Can't decide? A random picker filters by category and picks for you. Marking an item done logs it as a memory.",
  },
  {
    heading: 'Memories',
    body: 'Every completed bucket list item becomes a memory with a date and note. You can also log memories directly without going through the bucket list, and undo a "done" to restore an item to active.',
  },
  {
    heading: 'Date calendar',
    body: 'A monthly grid with couple entries (visible to both) and personal entries (only visible to you). Couple entries auto-create a linked bucket list item. Mark an entry as done and it logs a memory. Anniversary date highlighted on the grid.',
  },
  {
    heading: 'Realtime sync',
    body: 'Partner sees updates live across the ledger, bucket list, and calendar via Supabase realtime channels. The dashboard refreshes on realtime events and on tab focus, so totals are always current.',
  },
]

const stack = [
  ['Framework', 'Next.js 16 (App Router, no TypeScript)'],
  ['Styling', 'Tailwind CSS v4'],
  ['Auth & DB', 'Supabase — auth, Postgres, Row Level Security, realtime'],
  ['Exchange rates', 'Open Exchange Rates API (server-side, 1 hr cache)'],
  ['Deployment', 'Vercel'],
]

export default function Ourverse() {
  return (
    <>
      <header className="container hero">
        <div className="artcard">
          <div className="art-body">
            <div className="meta"><span>2026</span><span className="badge">Web App</span></div>
            <h1 className="title">Ourverse</h1>
            <p className="subtitle">A shared space for long-distance couples — track expenses honestly, plan dates together, and build a record of what you've done and what's still to come.</p>
          </div>
        </div>
      </header>

      <section className="container section">
        <div className="prose">
          <p style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', margin: '0 0 20px' }}>
            <a className="btn" href="https://ourverse-han.vercel.app/" target="_blank" rel="noreferrer">Live app ↗</a>
            <a className="btn" href="https://github.com/raihanyx/ourverse" target="_blank" rel="noreferrer">GitHub ↗</a>
          </p>
          <p><strong>Why I built it.</strong> Long-distance, multi-currency relationships make even simple things like splitting a bill or planning a trip surprisingly awkward. Existing apps either force a 50/50 split or don't handle different currencies gracefully. <em>Ourverse</em> is built around the idea that shared finances should reflect reality — who actually paid, in what currency, and what's still outstanding.</p>
          <p><strong>The core concept.</strong> Rather than a shared wallet or a single balance, Ourverse uses a <em>two-sided ledger</em>: each side tracks independently what the other person owes them. That keeps things honest and removes pressure to always split evenly. When a debt is settled, it's archived — not deleted — so there's always a full record.</p>
          <p><strong>What I built.</strong> I designed and built the entire product solo — from the Supabase schema and RLS policies to the Next.js 16 server actions, realtime sync, and every UI screen. The app is deployed on Vercel and handles real data for an active couple.</p>
        </div>
      </section>

      <section className="container section">
        <div className="prose">
          <h3>Features</h3>
        </div>
        <div className="grid-2" style={{ marginTop: '16px' }}>
          {features.map((f) => (
            <div
              key={f.heading}
              style={{
                background: 'var(--elev-1)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '18px 20px',
                boxShadow: 'var(--shadow)',
              }}
            >
              <p style={{ fontWeight: 600, margin: '0 0 6px' }}>{f.heading}</p>
              <p style={{ color: 'var(--muted)', margin: 0, fontSize: '15px', lineHeight: 1.6 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="grid-2">
          <div className="prose">
            <h3>Architecture</h3>
            <ul>
              <li><strong>Server components</strong> handle all initial data fetching — no client-side API calls on load.</li>
              <li><strong>Server actions</strong> handle all mutations; form state is managed with React's <code>useActionState</code>.</li>
              <li><strong>Supabase RLS</strong> enforces data isolation at the database level — each couple's data is invisible to everyone else.</li>
              <li><strong>Two shared helpers</strong> keep auth consistent: <code>getAppSession()</code> for server components and <code>getActionContext()</code> for server actions.</li>
              <li><strong>Realtime</strong> on the ledger and bucket list uses client-side Supabase channels; the dashboard uses <code>router.refresh()</code> triggered by realtime events.</li>
            </ul>
          </div>
          <div className="prose">
            <h3>Database (6 tables, all RLS)</h3>
            <ul>
              <li><strong>users</strong> — profile, base currency, couple link</li>
              <li><strong>couples</strong> — invite code, anniversary date</li>
              <li><strong>expenses</strong> — amount, currency, category, paid status</li>
              <li><strong>bucket_items</strong> — shared wishlist with category and done status</li>
              <li><strong>memories</strong> — completed items with date and note</li>
              <li><strong>calendar_entries</strong> — planned dates, personal or couple, linked to bucket items</li>
            </ul>
            <p>A <code>get_my_couple_id()</code> SECURITY DEFINER function avoids infinite recursion in RLS policies that query <code>public.users</code>.</p>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="prose">
          <h3>Tech stack</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
            <tbody>
              {stack.map(([layer, tech]) => (
                <tr key={layer} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '10px 12px 10px 0', color: 'var(--muted)', whiteSpace: 'nowrap', width: '140px', fontWeight: 500 }}>{layer}</td>
                  <td style={{ padding: '10px 0' }}>{tech}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3"><Link className="btn" to="/projects">← Back to Projects</Link></p>
        </div>
      </section>
    </>
  )
}
