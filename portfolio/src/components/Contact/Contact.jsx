import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Let's Connect</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">


        <div className="contact-left">
          <h1>How About a Conversation?</h1>
          <p> If you’re looking for someone to bring <span>fresh ideas</span>, <span>attention to detail</span>, and <span>dedication</span>  to your team, let’s connect and explore how we can collaborate further.</p>
          <div className="contact-details">

            <div className="contact-detail">
               <img src={mail_icon} alt="" />
               <p>husaincmentwala5253gmail.com</p>            
            </div>
            <div className="contact-detail">
               <img src={call_icon} alt="" />
               <p>+91 9321580214</p>            
            </div>
            <div className="contact-detail">
               <img src={location_icon} alt="" />
               <p>Mumbai, India</p>
            </div>
          </div>
        </div>
        <form className='contact-right'>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' />
          <label htmlFor="">Write Your Message Here</label>
          <textarea name="message" rows="8" placeholder="Let's have a meet..."></textarea>
          <button type='submit' className='contact-submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
