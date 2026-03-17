import { Link } from 'react-router-dom'
import '../../styles/home.css'

export default function Home() {
  return (
    <section className="container">
      <div className="hero">
        <div>
          <div className="eyebrow">Welcome</div>
          <h1>Hi <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800 }}>there!</span></h1>
          <p className="lede">
            I'm <b>Raihan</b>. I design and build practical and reliable software through full-stack development.
            I focus on delivering great user and customer experiences, and solving technical problems through clear
            communication and efficient solutions. This site shares a few of my projects and a short story about me.
            Make yourself at home.
          </p>
          <div className="mt-6">
            <Link className="btn" to="/projects">See projects</Link>
          </div>
        </div>
        <div className="artcard">
          <img src="/assets/images/IMG_8194.jpg" className="card-photo" alt="Raihan photo" />
          <div className="art-body">
            <div className="tag">Meet Me</div>
            <div className="monogram">Raihan Sukmana</div>
            <p>Brisbane · Software &amp; Data · UQ &amp; UI</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <p className="lede">
          Prefer email?{' '}
          <a href="mailto:raihansukmana12@gmail.com">Drop me a note</a>. You can also find me on{' '}
          <a href="https://www.linkedin.com/in/raihansukmana/" target="_blank" rel="noreferrer">LinkedIn</a> and{' '}
          <a href="https://github.com/raihansukmana" target="_blank" rel="noreferrer">GitHub</a>.
        </p>
      </div>
    </section>
  )
}
