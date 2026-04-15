import { useState } from 'react'
import { LiaLinkedin } from 'react-icons/lia'
import { GrGithub } from 'react-icons/gr'
import { PiXLogo } from 'react-icons/pi'
import '../styles/Contact.css'
import Form from '../components/Form'

export default function Contact() {
  const [formOpen, setFormOpen] = useState(false)

  return (
    <section className="contact">
      <title>Contact Us</title>
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

          {/* Say Hello → Form modal open */}
          <button
            className="contact__email-btn"
            onClick={() => setFormOpen(true)}
          >
            Say Hello
          </button>

          {/* Form Modal — controlled from here */}
          <Form isOpen={formOpen} onClose={() => setFormOpen(false)} />

          <div className="contact__social">
            <a
              href="https://github.com/dharmapal"
              className="contact__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__social-icon">
                <GrGithub style={{ width: "25px", height: "30px", fill: "#c0c0c0ff" }} />
              </span>
              <span className="contact__social-label">GitHub</span>
            </a>

            <div className="contact__divider" />

            <a
              href="https://linkedin.com/in/dharmapal"
              className="contact__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__social-icon">
                <LiaLinkedin style={{ width: "35px", height: "30px", fill: "#96afffea" }} />
              </span>
              <span className="contact__social-label">LinkedIn</span>
            </a>

            <div className="contact__divider" />

            <a
              href="https://twitter.com/dharmapal"
              className="contact__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__social-icon">
                <PiXLogo style={{ width: "25px", height: "30px", fill: "#ddddddff" }} />
              </span>
              <span className="contact__social-label">Twitter</span>
            </a>
          </div>

          <p className="contact__footer">
            Designed & Built by{' '}
            <a href="https://github.com/dharmapal">Dharmapal</a>
            {' '}· 2026
          </p>

        </div>
      </div>
    </section>
  )
}