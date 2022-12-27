import React from 'react'
import './contact.css'
import Whatsapp from '../../assets/WhatsApp.png'
import Mail from '../../assets/Mail.png'
import sticker from '../../assets/Group.png'

const contact = () => {
  return (
    <section id='contact'>
      
      <h5>Let's Talk!</h5>
      <h2>Contact Me</h2>
      <img src={sticker} alt="" className='sticker' />
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option first__contact__option">
          <div className="contact__icon">
              <img src={Mail} alt="" />
          </div>
            <h5>omolojashade@gmail.com</h5>
            <a href="mailto:omolojashade@gmail.com" target="_blank" >Send an email</a>
          </article>
          <article className="contact__option">
            <div className="contact__icon">
              <img src={Whatsapp} alt="" className='whatsapp'/>
            </div>
            <h5>+234-8160537130</h5>
            <a href="https://wa.me/+2348160537130" target="_blank" >Let's chat</a>
          </article>
        </div>
        <form action="">
          <input type="text"name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your email address'  required/>
          <input type="text" name='subject' placeholder='Subject' required/>
          <textarea rows="13" placeholder='Leave a Message' required></textarea>
          <button type='submit' className='btn btn-2 btn-4'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact