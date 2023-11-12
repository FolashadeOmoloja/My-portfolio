import React, { useEffect } from 'react'
import './about.css'
import My_Image from '../../assets/Me.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'


const About = () => {

  return (
    <section id='about' className='section'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <motion.div className="container about__container" 
         variants={fadeIn('down', 0.2)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false,amount:0.2}}    
      >
      <div className="about__me">
         <img src= {My_Image} alt="" className="my__image" />
      </div>
      <div className="about__content">
         <p>
            My name is Folashade Omoloja, I am a purpose-driven, dependable self-starter and team player who is organized,
            detail-oriented and have the capabilities of working in a dynamic environment. I have a proven ability to convert design mockups into functional HTML and CSS code, utilizing JavaScript for added functionality. I possess expertise in React.js, Next.js, and TypeScript. I enjoy being challenged with projects that require me to work outside my comfort and knowledge set, learning new languages and
            development techniques are important to me. I am a fast learner and enthusiastic
            team player ready to contribute to your organization’s success.
         </p>
      </div>
      </motion.div>
      </section>
  )
}

export default About