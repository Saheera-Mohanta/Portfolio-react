import React from 'react'
import './intro.css'


const Intro = () => {
  return (
    <section>
         <div id='container-1'>
          <div className='info-box'>
                <p>Hello,</p>
                <h2><b> I'm <span>Saheera Mohanta</span></b></h2>
                <div className="ani">
                    <div className="animation">
                        {/* <p>and I'm a</p> */}
                        <div class="typed-out">
                            <h1>Web developer....</h1> 
                        </div>
                    </div>
                    <p>I am a skilled and passionate web designer with experience in <br/>creating 
                            visually appending and user-friendly websites</p>
                    <div id="button">
                        <button><a href="#container-4">Hire Me</a></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Intro
