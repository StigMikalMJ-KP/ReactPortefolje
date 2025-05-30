import { React, useEffect } from 'react'
import '../App.css'
import Footer from '../components/Footer'

const Timeline = () => { // Skrolle til toppen automatisk
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
        <div className='timeline'>
            <div className='timeline-container left-container'>
                <i class="devicon-python-plain"></i>
                <div className='text-box'>
                    <h2>Python on the side</h2>
                    <small>Late 2023</small>
                    <p>I started out writing some simple code with python. Making simple text-based games and just testing out what is possible with programming.</p>
                    <span className='left-container-arrow'></span>
                </div>
            </div>
        
            <div className='timeline-container right-container'>
                <i class="devicon-html5-plain colored"></i>
                <div className='text-box'>
                    <h2>Start of Web Development</h2>
                    <small>Late 2024</small>
                    <p>In High-School, I then started to actually begin focusing more on this path. Learned about the basics of web-development: HTML/CSS, and a while later Javascript.</p>
                    <span className='right-container-arrow'></span>
                </div>
            </div>

            <div className='timeline-container left-container'>
                <i class="devicon-lua-plain"></i>
                <div className='text-box'>
                    <h2>Start of Roblox Development</h2>
                    <small>Late 2024</small>
                    <p>On the side, I started to check out scripting with the programming language Lua.</p>
                    <span className='left-container-arrow'></span>
                </div>
            </div>

            <div className='timeline-container right-container'>
                <i class="devicon-react-original-wordmark colored"></i>
                <div className='text-box'>
                    <h2>Introduced to ReactJS</h2>
                    <small>2025</small>
                    <p>Onto the end of my first year of high-school, I then started to learn further on about web-development. Which we then used ReactJS.</p>
                    <span className='right-container-arrow'></span>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Timeline
