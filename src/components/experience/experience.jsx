import React from 'react';
import './experience.css';
import html from '../../assets/html.png';
import CSS from '../../assets/CSS3_logo.svg.png';
import Javascript from '../../assets/Javascript_Logo.png';
import Reactt from '../../assets/React-icon.svg.png';
import Git from '../../assets/Git-Icon.png';
import tailwind from '../../assets/tailwind.png';
import typescript from '../../assets/typescript.png';
import bootstrap from '../../assets/bootstrap.png';
import Next from '../../assets/next-icon2.png';
import CV from '../../assets/FOLASHADE_OMOLOJA.pdf';

const skillsData = [
  { image: html, label: 'HTML' },
  { image: CSS, label: 'CSS' },
  { image: Javascript, label: 'Javascript' },
  { image: typescript, label: 'Typescript' },
  { image: Reactt, label: 'React' },
  { image: Next, label: 'Next.js' },
  { image: tailwind, label: 'Tailwind CSS' },
  { image: Git, label: 'Git' },
  { image: bootstrap, label: 'Bootstrap' },
];

const Experience = () => {
  return (
    <section id='skills'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="inner_experience_container">
          {skillsData.map((skill, index) => (
            <div className="outer" key={index}>
              <div className="experience__container-image">
                <div className='experience_img_box'>
                <div className="experience__img">
                  <img src={skill.image} alt="" />
                </div>
                </div>
                <span className="spin_img"></span>
              </div>
              <span>{skill.label}</span>
            </div>
          ))}
        </div>
        <a href={CV} className="cta btn btn-2 btn-3" download>
          Resume
        </a>
      </div>
    </section>
  );
};

export default Experience;
