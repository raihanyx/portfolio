import { useState } from 'react'
import { countries } from '../data/countries'

const LIVES = 3
const BEST_KEY = 'gq-ftc-best'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function similarity(a, b) {
  const aSet = new Set([...a.colors, ...a.design])
  let score = 0
  for (const tag of [...b.colors, ...b.design]) {
    if (aSet.has(tag)) score++
  }
  return score
}

function weightedSample(pool, n) {
  const remaining = [...pool]
  const result = []
  for (let i = 0; i < n; i++) {
    const total = remaining.reduce((s, c) => s + c.weight, 0)
    let r = Math.random() * total
    for (let j = 0; j < remaining.length; j++) {
      r -= remaining[j].weight
      if (r <= 0) { result.push(remaining.splice(j, 1)[0]); break }
    }
  }
  return result
}

function buildFlagChoices(correct, all, seen) {
  const SEEN_WEIGHT = 0.3
  const BASE = 3
  const MULT = 2

  const candidates = all
    .filter(c => c.code !== correct.code)
    .map(c => {
      const sim = similarity(correct, c) * MULT
      const base = seen.has(c.code) ? SEEN_WEIGHT : BASE
      return { ...c, weight: base + sim }
    })

  const picked = weightedSample(candidates, 2)
  return shuffle([correct, ...picked])
}

function initGame() {
  const shuffled = shuffle(countries)
  return {
    shuffled,
    questionIndex: 0,
    choices: buildFlagChoices(shuffled[0], countries, new Set()),
    score: 0,
    lives: LIVES,
    selected: null,
    finished: false,
    seen: [],
  }
}

export default function FlagToCountry({ onBack }) {
  const [game, setGame] = useState(initGame)
  const { shuffled, questionIndex, choices, score, lives, selected, finished, seen } = game

  const current = shuffled[questionIndex]
  const isLastQuestion = questionIndex === shuffled.length - 1

  function handleSelect(choice) {
    if (selected) return
    const correct = choice.code === current.code
    const newScore = correct ? score + 1 : score
    const newLives = correct ? lives : lives - 1

    if (newScore > parseInt(localStorage.getItem(BEST_KEY) || '0', 10)) {
      localStorage.setItem(BEST_KEY, String(newScore))
    }

    const gameOver = newLives === 0 || (correct && isLastQuestion)
    setGame(g => ({
      ...g,
      score: newScore,
      lives: newLives,
      selected: choice.code,
      finished: gameOver,
      seen: [...g.seen, current.code],
    }))
  }

  function handleNext() {
    if (lives === 0 || isLastQuestion) {
      setGame(g => ({ ...g, finished: true }))
      return
    }
    const nextIndex = questionIndex + 1
    const nextCountry = shuffled[nextIndex]
    const nextSeen = new Set([...seen, current.code])
    setGame(g => ({
      ...g,
      questionIndex: nextIndex,
      choices: buildFlagChoices(nextCountry, countries, nextSeen),
      selected: null,
    }))
  }

  function handleReplay() {
    setGame(initGame())
  }

  const savedBest = parseInt(localStorage.getItem(BEST_KEY) || '0', 10)
  const isNewBest = finished && score > savedBest

  if (finished) {
    const msg =
      score >= 100 ? 'World-class geographer!' :
      score >= 50  ? 'Impressive knowledge!' :
      score >= 20  ? 'Not bad, keep exploring!' :
                     'Better luck next time!'
    return (
      <div className="gq-result">
        <div className="gq-result-icon">{score >= 50 ? '🌍' : '🗺️'}</div>
        <div className="gq-score">{score}</div>
        <div className="gq-score-label">countries identified</div>
        {isNewBest
          ? <div className="gq-new-best">New best! 🎉</div>
          : <div className="gq-prev-best">Best: {savedBest}</div>
        }
        <div className="gq-result-msg">{msg}</div>
        <div className="gq-result-actions">
          <button className="btn" onClick={handleReplay}>Play Again</button>
          <button className="gq-btn-ghost" onClick={onBack}>← Back to Games</button>
        </div>
      </div>
    )
  }

  const wasWrong = selected && selected !== current.code
  const nextLabel = (lives - (wasWrong ? 1 : 0) === 0 || isLastQuestion) ? 'See Results' : 'Next →'

  return (
    <div className="gq-game">
      <div className="gq-game-header">
        <button className="gq-btn-ghost" onClick={onBack}>← Games</button>
        <div className="gq-lives">
          {Array.from({ length: LIVES }).map((_, i) => (
            <span key={i}>{i < lives ? '❤️' : '🤍'}</span>
          ))}
        </div>
        <div className="gq-score-badge">{score} <span className="gq-score-badge-label">correct</span></div>
      </div>

      <div className="gq-question">
        <div className="gq-question-label">Which country does this flag belong to?</div>
      </div>

      <div className="gq-flag-display">
        <img
          src={`https://flagcdn.com/w320/${current.code}.png`}
          alt="Flag to identify"
          className="gq-flag-question-img"
        />
      </div>

      <div className="gq-name-choices">
        {choices.map(choice => {
          let cls = 'gq-name-btn'
          if (selected) {
            if (choice.code === current.code) cls += ' gq-correct'
            else if (choice.code === selected) cls += ' gq-wrong'
          }
          return (
            <button
              key={choice.code}
              className={cls}
              onClick={() => handleSelect(choice)}
              disabled={!!selected}
            >
              {choice.name}
            </button>
          )
        })}
      </div>

      {selected && (
        <div className="gq-next-wrap">
          <button className="btn" onClick={handleNext}>{nextLabel}</button>
        </div>
      )}
    </div>
  )
}
