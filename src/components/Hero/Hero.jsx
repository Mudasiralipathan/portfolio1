import React from 'react'
import './Hero.css'
import heroimg from '../Images/hero.jpg'


const Hero = () => {
  return (
    <div className='hero'>
      <div className="main">
      <div>
        <h1>Hello <br /> I'm MUDASIR</h1>
        <p>FRONTED REACT JS WEB DEVELOPER</p>
      </div>
      <div>
        <div className="img">
          <img src={heroimg} alt="" />
        </div>
        </div>
      </div>
    </div>
  )

}

export default Hero