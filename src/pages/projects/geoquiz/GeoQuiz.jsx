import { useState } from 'react'
import { Link } from 'react-router-dom'
import GuessTheFlag from './games/GuessTheFlag'
import FlagToCountry from './games/FlagToCountry'
import GuessTheShape from './games/GuessTheShape'
import '../../../styles/geoquiz.css'

const games = [
  {
    id: 'guess-the-flag',
    title: 'Guess the Flag',
    description: 'See a country name — pick the right flag. 3 lives. How far can you go?',
    icon: '🚩',
    available: true,
  },
  {
    id: 'flag-to-country',
    title: 'Flag to Country',
    description: 'See a flag — name the country it belongs to.',
    icon: '🌍',
    available: true,
  },
  {
    id: 'country-shape',
    title: 'Country Shape',
    description: 'See the outline of a country — guess which one it is.',
    icon: '🗺️',
    available: true,
  },
]

const wrapStyle = { paddingTop: 'calc(var(--nav-h) + 40px)', paddingBottom: 'clamp(64px,9vw,120px)' }

export default function GeoQuiz() {
  const [activeGame, setActiveGame] = useState(null)
  const back = () => setActiveGame(null)

  let inner
  if (activeGame === 'guess-the-flag') inner = <GuessTheFlag onBack={back} />
  else if (activeGame === 'flag-to-country') inner = <FlagToCountry onBack={back} />
  else if (activeGame === 'country-shape') inner = <GuessTheShape onBack={back} />
  else {
    inner = (
      <div className="gq-hub">
        <Link className="pd-back" to="/work/geoquiz">← Back to case study</Link>
        <div className="eyebrow" style={{ marginTop: 8 }}>Mini game</div>
        <h2 className="gq-title">GeoQuiz</h2>
        <p className="gq-tagline">Geography trivia — flags, countries, and more. Pick a game and see how far you get.</p>

        <div className="gq-games">
          {games.map((g) => (
            <div
              key={g.id}
              className={`gq-game-card${g.available ? '' : ' gq-game-card--soon'}`}
              onClick={() => g.available && setActiveGame(g.id)}
              role={g.available ? 'button' : undefined}
              tabIndex={g.available ? 0 : undefined}
              onKeyDown={(e) => g.available && e.key === 'Enter' && setActiveGame(g.id)}
            >
              <div className="gq-card-icon">{g.icon}</div>
              <div className="gq-card-body">
                <div className="gq-card-title">{g.title}</div>
                <div className="gq-card-desc">{g.description}</div>
              </div>
              {g.available && <div className="gq-card-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container gq-wrap" style={wrapStyle}>
      {inner}
    </div>
  )
}
