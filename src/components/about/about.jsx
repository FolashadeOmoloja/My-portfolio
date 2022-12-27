import React from 'react'
import './about.css'
import My_Image from '../../assets/Me.png'


const about = () => {
  return (
    <section id='about' className='section'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
      <div className="about__me">
         <img src= {My_Image} alt="" className="my__image" />
      </div>
      <div className="about__content">
         <p>
            My name is Folashade Omoloja, I am a purpose-driven, dependable self-starter and team player who is organized,
            detail-oriented and have the capabilities of working in a dynamic environment. I
            have hands-on experience converting design mockups into HTML and CSS,
            adding functionality with JavaScript. I also have experience working with
            Bootstrap and React Js. I enjoy being challenged with projects that require me to
            work outside my comfort and knowledge set, learning new languages and
            development techniques are important to me. I am a fast learner and enthusiastic
            team player ready to contribute to your organization’s success.
         </p>
      </div>
      </div>
      </section>
  )
}

export default about