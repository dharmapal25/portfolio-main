import '../styles/Contact.css'

export default function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact__inner">

          <p className="contact__overline">04. What's Next?</p>

          <h2 className="contact__heading">
            Let's <span>Build</span><br />Something Great.
          </h2>

          <p className="contact__body">
            I'm currently open to internship opportunities and freelance projects.
            Whether you have a project in mind, a job offer, or just want to say hi —
            my inbox is always open!
          </p>

          {/* EMAIL CTA */}
          <a
            href="mailto:dharmapal@email.com"
            className="contact__email-btn"
          >
            📬 Say Hello
          </a>

          {/* SOCIAL LINKS */}
          <div className="contact__social">
            <a
              href="https://github.com/dharmapal"
              className="contact__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__social-icon">⌥</span>
              <span className="contact__social-label">GitHub</span>
            </a>

            <div className="contact__divider" />

            <a
              href="https://linkedin.com/in/dharmapal"
              className="contact__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__social-icon">in</span>
              <span className="contact__social-label">LinkedIn</span>
            </a>

            <div className="contact__divider" />

            <a
              href="https://twitter.com/dharmapal"
              className="contact__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__social-icon">𝕏</span>
              <span className="contact__social-label">Twitter</span>
            </a>
          </div>

          {/* FOOTER */}
          <p className="contact__footer">
            Designed & Built by{' '}
            <a href="https://github.com/dharmapal">Dharmapal</a>
            {' '}· 2025
          </p>

        </div>
      </div>
    </section>
  )
}
