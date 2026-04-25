import '../../styles/about.css'

const skills = [
  { label: 'Languages',     items: ['Python', 'Java', 'JavaScript', 'PHP'] },
  { label: 'Frameworks',    items: ['Django', 'Spring Boot', 'React', 'Flutter', 'CodeIgniter'] },
  { label: 'Databases',     items: ['PostgreSQL', 'SQL'] },
  { label: 'Cloud & DevOps',items: ['AWS', 'CI/CD', 'REST APIs', 'Git'] },
  { label: 'Design',        items: ['Figma', 'Canva'] },
]

const experience = [
  {
    role: 'Software Engineer Intern',
    org: 'WebAlive',
    location: 'Melbourne, Australia (Remote)',
    period: 'Mar 2026 – Present',
    points: [
      'Developed and debugged Operon, a Vue 3 + Vite frontend application featuring Kendo UI components, Pinia state management, and SCSS, contributing to a modular codebase across multiple business domains.',
      'Developed Cortex AI Playground, a full-stack demo app built with Django 5, Vue 3, and the Exsited Python SDK, featuring an AI-powered chat assistant and a REST API covering accounts, orders, invoices, and payments with JWT authentication.',
      'Conducted a comprehensive SDK audit and documentation overhaul across multi-language repositories (Python, PHP, .NET) for projects integrating the Exsited platform API, identifying gaps and authoring fixes to API and function-level documentation.',
    ],
  },
  {
    role: 'Data Journalist',
    org: 'Sportradar',
    location: 'Brisbane, Australia',
    period: 'Jan 2026 – Apr 2026',
    points: [
      'Capture and verify real-time sports data for live broadcasts, statistics, and analytics platforms.',
      'Communicate with remote operations teams to resolve discrepancies during live events.',
    ],
  },
  {
    role: 'Data Collector',
    org: 'IMG ARENA',
    location: 'Brisbane, Australia',
    period: 'May 2025 – Dec 2025',
    points: [
      'Monitored and recorded live sporting event data in real time using IMG ARENA\'s proprietary platform.',
      'Maintained quality standards during fast-paced match environments, contributing to the global sports data ecosystem.',
    ],
  },
]

const education = [
  {
    role: 'Bachelor of Information Technology',
    org: 'University of Queensland',
    location: 'Brisbane, Australia',
    period: 'Feb 2023 – Jan 2025',
    points: [
      'Software Information Systems Major.',
      'Coursework: Advanced Database Systems, Web Information Systems, Data Science, Numerical Methods in Computational Science.',
    ],
  },
  {
    role: 'Bachelor of Computer Science',
    org: 'Universitas Indonesia',
    location: 'Depok, Indonesia',
    period: 'Jul 2020 – Feb 2025',
    points: [
      'Coursework: Artificial Intelligence & Data Science, Software Engineering, Platform-Based Development, Human-Computer Interaction.',
    ],
  },
]

function TimelineItem({ role, org, location, period, points }) {
  return (
    <div className="tl-item">
      <div className="tl-dot" />
      <div className="tl-body">
        <div className="tl-header">
          <div>
            <div className="tl-role">{role}</div>
            <div className="tl-org">{org} · {location}</div>
          </div>
          <div className="tl-period">{period}</div>
        </div>
        <ul className="tl-points">
          {points.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section className="container">
      <h2 className="title">About <i>Me</i></h2>
      <div className="prose">
        <p>Hi, I'm Raihan. I like building practical tools that make everyday workflows faster. I studied Information Technology at the University of Queensland and Computer Science at Universitas Indonesia. These days I'm tinkering with UI/UX designs, Frontend, Backends, and Data.</p>
        <p>On the technical side, I work across the full stack, from backend APIs to frontend UIs, with a growing interest in data and infrastructure.</p>
        <p>Outside work you'll find me exploring new food sports, planning trips, or playing any sports. I enjoy clean design, good documentation, and shipping small improvements often.</p>
        <p className="mt-4">
          Want to chat? Email <a href="mailto:raihansukmana12@gmail.com">raihansukmana12@gmail.com</a>{' '}
          or ping me on <a href="https://www.linkedin.com/in/raihansukmana/" target="_blank" rel="noreferrer">LinkedIn</a>.{' '}
          You can also view my <a href="/assets/documents/resume25_04_2026.pdf" target="_blank" rel="noreferrer">resume here</a>.
        </p>
      </div>

      <div className="skills-section">
        <h3 className="tl-heading">Skills</h3>
        <div className="skills-grid">
          {skills.map(group => (
            <div className="skills-group" key={group.label}>
              <div className="skills-label">{group.label}</div>
              <div className="skills-pills">
                {group.items.map(item => (
                  <span className="pill" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tl-section">
        <h3 className="tl-heading">Experience</h3>
        <div className="timeline">
          {experience.map((e, i) => <TimelineItem key={i} {...e} />)}
        </div>
      </div>

      <div className="tl-section">
        <h3 className="tl-heading">Education</h3>
        <div className="timeline">
          {education.map((e, i) => <TimelineItem key={i} {...e} />)}
        </div>
      </div>
    </section>
  )
}
