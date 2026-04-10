import '../styles/About.css'

const facts = [
  'LIT Lucknow — B.Tech CSE',
  '2nd Year Student',
  'Lucknow, India'
]

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__inner">

          {/* SECTION HEADER */}
          <p className="section-label">01. About Me</p>
          <h2 className="section-title">Who I <span>Am</span></h2>
          <div className="section-divider" />

          <div className="about__grid">

            {/* LEFT — TEXT */}
            <div className="about__text">
              <p>
                Hey! I'm <strong>Dharmapal</strong>, a passionate full-stack developer
                currently pursuing B.Tech in Computer Science at{' '}
                <span className="accent">LIT Lucknow</span>. I love turning ideas
                into real, working products that solve actual problems.
              </p>
              <p>
                My core stack is <strong>MERN</strong> (MongoDB, Express, React, Node.js)
                and I enjoy building everything — real-time chat apps, task managers,
                and interactive UIs. I also have a keen eye for clean design and
                smooth user experiences.
              </p>
              <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos placeat nam nesciunt commodi vel sapiente hic, explicabo, facilis ratione distinctio necessitatibus repudiandae aperiam, culpa fugit illum laborum! Nulla, dignissimos quis!
              </p>

              {/* QUICK FACTS */}
              <div className="about__facts">
                {facts.map(fact => (
                  <div key={fact} className="about__fact">{fact}</div>
                ))}
              </div>
            </div>

            {/* RIGHT — PHOTO */}
            <div className="about__photo-wrap">
              <div className="about__photo-frame">
                {/*
                  Replace src with your actual photo path, e.g.:
                  <img src="/assets/photo.jpg" alt="Dharmapal" />
                */}
                <div className="about__photo-placeholder">
                  <div className="avatar-icon">👨‍💻</div>
                  <span>Add your photo here</span>
                  <code style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                    /public/assets/photo.jpg
                  </code>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
