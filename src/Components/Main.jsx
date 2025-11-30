import React from 'react'
import sideImage from "../Images/image.png"
import './Main.css'
function Main() {
    return (
        <div className='container'>

            <div className="hello">

                <div className="bolder">

                    <span className="dev">
                        Web Design | MEARN Developer
                    </span>

                    <span className="hello-text">
                        Hello, I'm
                    </span>

                    <span className="name-text">
                        Dharmapal V Bharati
                    </span>

                    <p className="web-text">
                        <span className='ww'></span>I specialize in creating modern websites using React, Tailwind, Express.js, MongoDB, and more. I'm passionate about building clean and responsive designs.
                    </p>

                    <div className="button">
                        <button className="visit-projects">
                            View my projects
                        </button>

                        <a href="#" download={""} className="visit-resume" >
                           My Resume
                        </a>

                    </div>


                </div>

                <div className="side-image-div">
                    <img src={sideImage} className='side-image' alt="robot" />
                </div>


            </div>

        </div>
    )
}

export default Main