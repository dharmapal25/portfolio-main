import '../styles/Projects.css'

const featured = {
  title:  'WhatsApp Clone — Real-time Chat App',
  desc:   'A full-stack real-time messaging application built with MERN Stack and Socket.IO. Features include live messaging, user authentication, online status indicators, read receipts, and a responsive mobile-first UI.',
  tech:   ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT'],
  emoji:  '💬',
  github: 'https://github.com/dharmapal',
  live:   '#',
}

const projects = [
  {
    title:  'Trello Clone — Task Manager',
    desc:   'A Kanban-style project management board with drag-and-drop cards, multi-board support, and real-time updates.',
    tech:   ['React', 'Node.js', 'MongoDB', 'Express'],
    emoji:  '📋',
    github: 'https://github.com/dharmapal',
    live:   '#',
  },
  {
    title:  'Linked List Visualizer',
    desc:   'Interactive DOM-based visualization of Linked List operations — insert, delete, reverse — built with vanilla JavaScript.',
    tech:   ['JavaScript', 'HTML5', 'CSS3', 'DOM API'],
    emoji:  '🔗',
    github: 'https://github.com/dharmapal',
    live:   '#',
  },
  {
    title:  'Belagavi City Website',
    desc:   'Hackathon project — a dynamic city/college portal for Belagavi with events, tourism info, and responsive design.',
    tech:   ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    emoji:  '🏙️',
    github: 'https://github.com/dharmapal',
    live:   '#',
  },
  {
    title:  'Dev Portfolio — This Site!',
    desc:   'My personal portfolio built with React Router, pure CSS, and smooth animations. Fully responsive with dark theme.',
    tech:   ['React', 'React Router', 'CSS3', 'Vite'],
    emoji:  '🚀',
    github: 'https://github.com/dharmapal',
    live:   '#',
  },
]

export default function Projects() {
  return (
    <section className="projects">
      <div className="container" style={{ width: '100%', paddingTop: '100px', paddingBottom: '100px' }}>

        {/* SECTION HEADER */}
        <p className="section-label">03. Projects</p>
        <h2 className="section-title">Things I've <span>Built</span></h2>
        <div className="section-divider" />

        {/* ── FEATURED PROJECT ── */}
        <div className="projects__featured">
          {/* IMAGE / PREVIEW */}
          <div className="projects__featured-img">
            <div className="project-img-placeholder">{featured.emoji}</div>
          </div>

          {/* INFO */}
          <div className="projects__featured-info">
            <p className="projects__featured-label">⭐ Featured Project</p>
            <h3 className="projects__featured-title">{featured.title}</h3>

            <div className="projects__featured-desc">
              {featured.desc}
            </div>

            <div className="projects__tech-row">
              {featured.tech.map(t => (
                <span key={t} className="projects__tech">{t}</span>
              ))}
            </div>

            <div className="projects__links">
              <a href={featured.github} className="projects__link" target="_blank" rel="noopener noreferrer" title="GitHub">
                ⌥ GitHub
              </a>
              <a href={featured.live} className="projects__link" target="_blank" rel="noopener noreferrer" title="Live Demo">
                ↗ Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* ── OTHER PROJECTS ── */}
        <p className="projects__others-label">Other Notable Projects</p>

        <div className="projects__grid">
          {projects.map(project => (
            <div className="project-card" key={project.title}>
              <div className="project-card__top">
                <span className="project-card__folder">{project.emoji}</span>
                <div className="project-card__links">
                  <a href={project.github} className="project-card__icon-link" target="_blank" rel="noopener noreferrer">
                    ⌥
                  </a>
                  <a href={project.live} className="project-card__icon-link" target="_blank" rel="noopener noreferrer">
                    ↗
                  </a>
                </div>
              </div>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.desc}</p>
              <div className="project-card__tech">
                {project.tech.map((t, i) => (
                  <span key={t}>
                    {t}{i < project.tech.length - 1 ? <>&nbsp;·&nbsp;</> : ''}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
