import React from 'react';
import { GiBinoculars } from 'react-icons/gi';
import { BsGithub, BsLink45Deg } from 'react-icons/bs';
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import './portfolio.css';
import img1 from '../../assets/notelify.png'
import img2 from '../../assets/Readym.PNG'
import img3 from '../../assets/fastkar.png'
import img4 from '../../assets/quickpay.png'
import img5 from '../../assets/game.png'
import img7 from '../../assets/planet.PNG'


const projects = [
  {
    title: 'Quickpay',
    image: img4,
    githubLink: 'https://github.com/FolashadeOmoloja/Quick-Pay',
    liveDemoLink: 'https://quick-pay-beta.vercel.app/',
    description: 'Landing page for a payment platform Quickpay, for seamless payment of bills at convenience. Tech stack: Next js, typescript, framer-motion.',
    delay: 0.2
  },
  {
    title: 'Fastkar',
    image: img3,
    githubLink: 'https://github.com/FolashadeOmoloja/FastKar',
    liveDemoLink: 'https://fast-kar.vercel.app',
    description: 'FastKar ensures seamless, efficient transportation services for convenience and peace of mind. Tech stack: Next js, Next-auth, tailwind css, leaftlet-map, typescript.',
    delay: 0.4
  },
  {
    title: 'Planet Protectors',
    image: img7,
    githubLink: 'https://github.com/FolashadeOmoloja/Planet-Protectors',
    liveDemoLink: 'https://planetprotectors.netlify.app/home',
    description: 'A responsive web application built with React.js, Bootstrap, and React Table for a user-friendly interface and enhance functionality. It addresses the problem of plastic recycling.',
    delay: 0.6
  },
  {
    title: 'Readym',
    image: img2,
    githubLink: 'https://github.com/FolashadeOmoloja/Readym',
    liveDemoLink: 'https://readym.netlify.app/',
    description: 'Readym is a website built to improve reading culture by creating easy accessibility to informative books online, Technology used: Html, CSS and Bootstrap.',
    delay: 0.8
  },
  {
    title: 'Notelify',
    image: img1,
    githubLink: 'https://github.com/FolashadeOmoloja/Notelify',
    liveDemoLink: 'https://notelifyweb.netlify.app/',
    description: 'Notefily is a responsive functional web application built to help users store notes and create todo-lists, Tech stack: Html, CSS, Javascript.',
    delay: 1
  },
  {
    title: 'RPS-gameplay',
    image: img5,
    githubLink: 'https://github.com/FolashadeOmoloja/rock_paper_scissors_game',
    liveDemoLink: 'https://rps-gameplay.netlify.app',
    description: 'RPS-gameplay is a simple rock-paper-scissors game, built for recreational purposes and to let off steam <FaGrinWink/>! Tech stack: Html, CSS, and Javascript.',
    delay: 1.2
  },
];

const Portfolio = () => {


  return (
    <section id='portfolio'>
      <h5>Recent Projects</h5>
      <h2>My Portfolio</h2>
      <div  
      className="portfolio__container " >
        {projects.map((project, index) => (
          <motion.article   
          variants={fadeIn('down', project.delay)}
          initial='visible'
          whileInView={'show'}
          viewport={{once: false,amount:0.6}}           
          className={`portfolio__item ${index % 3 === 1 && 'middle'} `} key={index}>
            <div className="portfolio__img">
              <img src={project.image} alt="" />
              <div className="overlay"></div>
              <a href={project.liveDemoLink} className="overlay__link">
                <GiBinoculars />
              </a>
            </div>
            <h3>{project.title}</h3>
            <div className='portfolio__buttons'>
              <a href={project.githubLink} className="btn btn-1 btn-6 btn-6a" target="_blank"><span>Github</span> <BsGithub /></a>
              <a href={project.liveDemoLink} className="btn btn-2 btn-6 btn-6b" target="_blank"><span>Live Demo </span><BsLink45Deg /></a>
            </div>
            <p>{project.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
