import React from 'react'
import './contact.css'
import Whatsapp from '../../assets/WhatsApp.png'
import Mail from '../../assets/Mail.png'
import sticker from '../../assets/Group.png'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c9krp47', 'template_2654o93', form.current, 'ao3w_tPLF4KrdUp07')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      
      <h5>Let's Talk!</h5>
      <h2 className='contact-margin'>Contact Me</h2>
      <img src={sticker} alt="" className='sticker '  />
      <div className="container contact__container "      
      >
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
        <form ref={form} onSubmit={sendEmail}>
          <input type="text"name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your email address'  required/>
          <input type="text" name='subject' placeholder='Subject' required/>
          <textarea rows="13" name='message' placeholder='Leave a Message' required></textarea>
          <button type='submit' className='btn btn-2 btn-4'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact