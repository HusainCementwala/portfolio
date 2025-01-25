import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">

        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>"As an IT student, I’m passionate about software development, constantly <span>exploring new technologies</span> to build innovative solutions.
           <br/></p>
           <p>"With a <span>creative mindset</span>, I also focus on designing intuitive and impactful user experiences."</p> 
            <p>"Driven by a desire to <span>solve real-world problems</span> , I aim to bridge the gap between technology and creativity in every project I undertake."</p>
          </div>

          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>Graphic Design</p><hr style={{width:"80%"}}/></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">

        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
          <h1>23+</h1>
          <p>CREATIVE PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>SATISFIED CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
