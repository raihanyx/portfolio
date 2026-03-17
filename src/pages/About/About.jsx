import './About.css'

export default function About() {
  return (
    <section className="container">
      <h2 className="title">About <i>Me</i></h2>
      <div className="prose">
        <p>Hi, I'm Raihan. I like building practical tools that make everyday workflows faster. I studied Information Technology at the University of Queensland and Computer Science at Universitas Indonesia. These days I'm tinkering with UI/UX designs, Frontend, Backends, and Data.</p>
        <p>Technically, I'm comfortable with Python, Java, JavaScript, and PHP, plus frameworks like Django, Spring Boot, and React. Databases: PostgreSQL and SQL. Cloud &amp; DevOps: AWS, REST, CI/CD, Git. Design Tools: Figma and Canva</p>
        <p>Outside work you'll find me exploring new food sports, planning trips, or playing any sports. I enjoy clean design, good documentation, and shipping small improvements often.</p>
        <p className="mt-4">
          Want to chat? Email <a href="mailto:raihansukmana12@gmail.com">raihansukmana12@gmail.com</a>{' '}
          or ping me on <a href="https://www.linkedin.com/in/raihansukmana/" target="_blank" rel="noreferrer">LinkedIn</a>.{' '}
          You can also view my <a href="/assets/documents/resume2025.pdf" target="_blank" rel="noreferrer">resume here</a>.
        </p>
      </div>
    </section>
  )
}
