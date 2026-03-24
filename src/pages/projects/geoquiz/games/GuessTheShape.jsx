import { useState } from 'react'
import { feature } from 'topojson-client'
import topology from 'world-atlas/countries-110m.json'
import { countries } from '../data/countries'
import CountryShape, { NUM_TO_A2 } from '../components/CountryShape'

const LIVES = 3
const BEST_KEY = 'gq-shape-best'

const CONTINENTS = {
  al:'eu', ad:'eu', at:'eu', by:'eu', be:'eu', ba:'eu', bg:'eu', hr:'eu', cy:'eu',
  cz:'eu', dk:'eu', ee:'eu', fi:'eu', fr:'eu', de:'eu', gr:'eu', hu:'eu', is:'eu',
  ie:'eu', it:'eu', lv:'eu', li:'eu', lt:'eu', lu:'eu', mt:'eu', md:'eu', mc:'eu',
  me:'eu', nl:'eu', mk:'eu', no:'eu', pl:'eu', pt:'eu', ro:'eu', sm:'eu',
  rs:'eu', sk:'eu', si:'eu', es:'eu', se:'eu', ch:'eu', ua:'eu', gb:'eu', va:'eu',
  ag:'am', ar:'am', bs:'am', bb:'am', bz:'am', bo:'am', br:'am', ca:'am', cl:'am',
  co:'am', cr:'am', cu:'am', dm:'am', do:'am', ec:'am', sv:'am', gd:'am', gt:'am',
  gy:'am', ht:'am', hn:'am', jm:'am', mx:'am', ni:'am', pa:'am', py:'am', pe:'am',
  kn:'am', lc:'am', vc:'am', sr:'am', tt:'am', us:'am', uy:'am', ve:'am',
  dz:'af', ao:'af', bj:'af', bw:'af', bf:'af', bi:'af', cm:'af', cv:'af', cf:'af',
  td:'af', km:'af', cg:'af', cd:'af', ci:'af', dj:'af', eg:'af', gq:'af', er:'af',
  sz:'af', et:'af', ga:'af', gm:'af', gh:'af', gn:'af', gw:'af', ke:'af', ls:'af',
  lr:'af', ly:'af', mg:'af', mw:'af', ml:'af', mr:'af', mu:'af', ma:'af', mz:'af',
  na:'af', ne:'af', ng:'af', rw:'af', st:'af', sn:'af', sl:'af', so:'af', za:'af',
  ss:'af', sd:'af', tz:'af', tg:'af', tn:'af', ug:'af', zm:'af', zw:'af',
  af:'as', am:'as', az:'as', bh:'as', bd:'as', bt:'as', bn:'as', kh:'as', cn:'as',
  ge:'as', in:'as', id:'as', ir:'as', iq:'as', il:'as', jp:'as', jo:'as', kz:'as',
  kw:'as', kg:'as', la:'as', lb:'as', my:'as', mv:'as', mn:'as', mm:'as', np:'as',
  kp:'as', kr:'as', om:'as', pk:'as', ps:'as', ph:'as', qa:'as', ru:'as', sa:'as',
  sg:'as', lk:'as', sy:'as', tw:'as', tj:'as', th:'as', tl:'as', tm:'as', ae:'as',
  uz:'as', vn:'as', ye:'as',
  au:'oc', fj:'oc', ki:'oc', mh:'oc', fm:'oc', nr:'oc', nz:'oc', pw:'oc', pg:'oc',
  ws:'oc', sb:'oc', to:'oc', tv:'oc', vu:'oc',
}

const validCodes = new Set(
  feature(topology, topology.objects.countries).features
    .map(f => NUM_TO_A2[String(f.id).padStart(3, '0')])
    .filter(Boolean)
)
const playable = countries.filter(c => validCodes.has(c.code))

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
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

function buildShapeChoices(correct, all, seen) {
  const SEEN_WEIGHT = 0.3
  const BASE = 1
  const CONTINENT_BONUS = 6

  const correctContinent = CONTINENTS[correct.code]
  const candidates = all
    .filter(c => c.code !== correct.code)
    .map(c => {
      if (seen.has(c.code)) return { ...c, weight: SEEN_WEIGHT }
      const bonus = CONTINENTS[c.code] === correctContinent ? CONTINENT_BONUS : 0
      return { ...c, weight: BASE + bonus }
    })
  const picked = weightedSample(candidates, 2)
  return shuffle([correct, ...picked])
}

function initGame() {
  const shuffled = shuffle(playable)
  return {
    shuffled,
    questionIndex: 0,
    choices: buildShapeChoices(shuffled[0], playable, new Set()),
    score: 0,
    lives: LIVES,
    selected: null,
    finished: false,
    seen: [],
  }
}

export default function GuessTheShape({ onBack }) {
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
      choices: buildShapeChoices(nextCountry, playable, nextSeen),
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
        <div className="gq-question-label">Which country has this shape?</div>
      </div>

      <div className="gq-shape-display">
        <CountryShape code={current.code} size={260} />
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
