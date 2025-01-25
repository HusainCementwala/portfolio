import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div>
      <div className="hero">

        <img src={profile_img} alt="" />
        <h1><span>I'm Husain Cementwala,</span> <br></br>Frontend Developer based in Mumbai.</h1>
        <p>I am a 3rd Year Btech Student pursuing a degree in <br></br><span>Information Technology</span></p>

        <div className="hero-action">

          <div className="hero-connect">RESUME</div>
          <div className='hero-resume'>GITHUB</div>
          
        </div>
        
      </div>
    </div>
  )
}

export default Hero
