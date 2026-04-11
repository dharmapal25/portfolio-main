import { LiaLinkedin } from 'react-icons/lia'
import '../styles/Contact.css'
import { GrGithub } from 'react-icons/gr'
import { BiX } from 'react-icons/bi'
import { FaX } from 'react-icons/fa6'
import { PiXLogo } from 'react-icons/pi'

export default function Contact() {
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

          {/* EMAIL CTA */}
          <a
            href="mailto:dharmapal@email.com"
            className="contact__email-btn"
          >
           Say Hello
          </a>

          {/* SOCIAL LINKS */}
          <div className="contact__social">
            <a
              href="https://github.com/dharmapal"
              className="contact__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__social-icon"> <GrGithub style={{ width: "25px", height: "30px", fill: "#c0c0c0ff" }} /> </span>
              <span className="contact__social-label">GitHub</span>
            </a>

            <div className="contact__divider" />

            <a
              href="https://linkedin.com/in/dharmapal"
              className="contact__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__social-icon"> <LiaLinkedin style={{ width: "35px", height: "30px", fill: "#96afffea" }} /> </span>
              <span className="contact__social-label">LinkedIn</span>
            </a>

            <div className="contact__divider" />

            <a
              href="https://twitter.com/dharmapal"
              className="contact__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__social-icon"> <PiXLogo style={{ width: "25px", height: "30px", fill: "#ddddddff" }} /> </span>
              <span className="contact__social-label">Twitter</span>
            </a>
          </div>

          {/* FOOTER */}
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
