import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './experience.css'
import html from '../../assets/html.png'
import CSS from '../../assets/CSS3_logo.svg.png'
import Javascript from '../../assets/Javascript_Logo.png'
import Bootstrap from '../../assets/Bootstrap_logo.svg.png'
import Reactt from '../../assets/React-icon.svg.png'
import Git from '../../assets/Git-Icon.png'
import CV from '../../assets/Folashade_Omoloja_resume.pdf'

const Experience = () => {
  useEffect(() =>{
    AOS.init({ duration: 1000});
 }, [])
  return (
    <section id='skills'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container" data-aos="fade-right">
        <div className="inner_experience_container">
        <div className="outer">
        <div className="experience__container-image">
          <div className="experience__img">
            <img src= {html} alt=""  />
            </div>
          </div>
          <span>HTML</span>
        </div>
          <div className="outer">
          <div className="experience__container-image">
            <div className="experience__img">
            <img src={CSS} alt=""  />
            </div>
          </div>
            <span>CSS</span>
          </div>
          <div className="outer">
          <div className="experience__container-image">
            <div className="experience__img">
               <img src={Javascript} alt=""  />
            </div>
          </div>
          <span>Javascript</span>
          </div>
          <div className="outer">
            <div className="experience__container-image">
              <div className="experience__img" >
              <img src={Bootstrap} alt="" />
              </div>
          </div>
          <span>Bootsrap</span>
          </div>
          <div className="outer">
             <div className="experience__container-image">
               <div className="experience__img" >
               <img src={Reactt} alt="" />
               </div>
             </div>
             <span>React</span>
          </div>
          <div className="outer">
            <div className="experience__container-image">
              <div className="experience__img" >
              <img src={Git} alt="" />
              </div>
            </div>
            <span>Git</span>
          </div>
        </div>
        <a href={CV} className="cta btn btn-2 btn-3" download>
        Resume
</a>
      </div>
    </section>
  )
}

export default Experience