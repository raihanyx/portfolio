import { useState } from 'react'
import GuessTheFlag from './games/GuessTheFlag'
import FlagToCountry from './games/FlagToCountry'
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
    available: false,
  },
]

export default function GeoQuiz() {
  const [activeGame, setActiveGame] = useState(null)

  if (activeGame === 'guess-the-flag') {
    return (
      <div className="container gq-wrap">
        <GuessTheFlag onBack={() => setActiveGame(null)} />
      </div>
    )
  }

  if (activeGame === 'flag-to-country') {
    return (
      <div className="container gq-wrap">
        <FlagToCountry onBack={() => setActiveGame(null)} />
      </div>
    )
  }

  return (
    <div className="container gq-wrap">
      <div className="gq-hub">
        <div className="eyebrow">Mini Game</div>
        <h2 className="gq-title">GeoQuiz</h2>
        <p className="gq-tagline">Geography trivia — flags, countries, and more. Pick a game and see how far you get.</p>

        <div className="gq-games">
          {games.map(g => (
            <div
              key={g.id}
              className={`gq-game-card${g.available ? '' : ' gq-game-card--soon'}`}
              onClick={() => g.available && setActiveGame(g.id)}
              role={g.available ? 'button' : undefined}
              tabIndex={g.available ? 0 : undefined}
              onKeyDown={e => g.available && e.key === 'Enter' && setActiveGame(g.id)}
            >
              <div className="gq-card-icon">{g.icon}</div>
              <div className="gq-card-body">
                <div className="gq-card-title">
                  {g.title}
                  {!g.available && <span className="badge" style={{ marginLeft: 8 }}>Coming Soon</span>}
                </div>
                <div className="gq-card-desc">{g.description}</div>
              </div>
              {g.available && <div className="gq-card-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
