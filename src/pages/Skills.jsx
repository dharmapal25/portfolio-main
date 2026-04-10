import '../styles/Skills.css'

const categories = [
  {
    icon: '🖥️',
    title: 'Frontend',
    tags: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'GSAP', 'DOM'],
  },
  {
    icon: '⚙️',
    title: 'Backend',
    tags: ['Node.js', 'Express.js', 'REST APIs', 'Socket.IO', 'EJS'],
  },
  {
    icon: '🗄️',
    title: 'Database',
    tags: ['MongoDB', 'MySQL', 'Mongoose'],
  },
  {
    icon: '🛠️',
    title: 'Tools & DevOps',
    tags: ['Git', 'GitHub', 'Docker (Basic)', 'VS Code', 'Postman', 'Vite'],
  },
  {
    icon: '🤖',
    title: 'AI / ML',
    tags: [
      { name: 'Python', learning: false },
      { name: 'NumPy',  learning: false },
      { name: 'Pandas', learning: false },
      { name: 'Scikit-learn', learning: true },
      { name: 'TensorFlow',   learning: true },
    ],
  },
]

export default function Skills() {
  return (
    <section className="skills">
      <div className="container">

        {/* SECTION HEADER */}
        <p className="section-label">02. Skills</p>
        <h2 className="section-title">What I <span>Work With</span></h2>
        <div className="section-divider" />

        <div className="skills__grid">
          {categories.map(cat => (
            <div className="skills__card" key={cat.title}>
              <span className="skills__card-icon">{cat.icon}</span>
              <p className="skills__card-title">{cat.title}</p>
              <div className="skills__tags">
                {cat.tags.map(tag => {
                  const name     = typeof tag === 'string' ? tag : tag.name
                  const learning = typeof tag === 'object' ? tag.learning : false
                  return (
                    <span
                      key={name}
                      className={`skills__tag ${learning ? 'learning' : ''}`}
                    >
                      {name}{learning ? ' ✦' : ''}
                    </span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* LEARNING NOTE */}
        <p style={{
          marginTop: '28px',
          fontFamily: 'var(--font-display)',
          fontSize: '12px',
          color: 'var(--text-muted)',
        }}>
          <span style={{ color: '#f59e0b' }}>✦</span> Currently learning
        </p>

      </div>
    </section>
  )
}
