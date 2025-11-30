import React from 'react'
import imgFlash from '../Images/Flash.png';
import "./Home.css"
function Home() {
    return (
        <>
            <div className='main-container'>

                <div className='navbar'>

                    <div className='logo'>
                        <span className="logo-name">
                            Flash
                        </span>
                        <img src={imgFlash} alt="logo" className='logo-img' />
                    </div>


                    <div className='menu-nav'>

                        <div className='routes'>
                            <span id="menu-text-1">Home</span>
                            <span id="menu-text-2">About</span>
                            <span id="menu-text-3">Blogs</span>
                            <span id="menu-text-4">Contact Us</span>
                        </div>

                        <div className="routes-btn-div">
                            <button className='routes-btn'> Reach Out </button>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Home