import { useNavigate } from 'react-router-dom'
import '../styles/Home.css'
import Threads from '../components/Libraries/Threads'
import Chatbot from '../components/Chatbot'
import API from '../services/api'
import { useEffect } from 'react'



export default function Home() {
  const navigate = useNavigate()


  useEffect(() => {

    API.get("/me")
      .then((data) => {
        console.log(data.data.message)
      })
  }, [])

  return (
    <main className="home">

      <div style={{ width: '100%', height: '600px', position: 'absolute', top: "10%" }}>
        <Threads
          amplitude={1}
          distance={0.3}
          enableMouseInteraction

        />
      </div>


      <div className="home__content">
        <Chatbot />

        <h2 className="home__role">
          <span>Full-Stack</span> Developer.
        </h2>

        <p className="home__tagline">
          I build fast, scalable, real-world web apps —
          from pixel-perfect UIs to AI-powered, production-ready backends.
        </p>


        <div className="home__buttons">
          <button
            className="btn-secondary"
            onClick={() => navigate('/projects')}
          >
            View My Work ↗
          </button>
          <button
            className="btn-primary"
            onClick={() => navigate('/contact')}
          >
            Let's Connect
          </button>
        </div>
      </div>

    </main>
  )
}