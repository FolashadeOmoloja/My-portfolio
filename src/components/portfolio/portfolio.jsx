import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './portfolio.css'
import img1 from '../../assets/notelify.png'
import img2 from '../../assets/Readym.PNG'
import img3 from '../../assets/TourIt.png'
import img4 from '../../assets/Eduforo.png'
import img5 from '../../assets/game.png'
import img6 from '../../assets/signup.png'
import {GiBinoculars} from 'react-icons/gi'
import {BsGithub} from 'react-icons/bs'
import {BsLink45Deg} from 'react-icons/bs'
import {FaGrinWink} from 'react-icons/fa'

const Portfolio = () => {
  useEffect(() =>{
    AOS.init({ duration: 1000});
 }, [])
  return (
    <section id='portfolio'>
      <h5>Recent Projects</h5>
      <h2>My Portfolio</h2>
      <div className="portfolio__container" data-aos="fade-up">
        <article className='portfolio__item'>
          <div className="portfolio__img">
            <img src={img1} alt="" />
            <div className="overlay"></div>
								<a href="https://notelifyweb.netlify.app/" className="overlay__link">
                  <GiBinoculars/>
								</a>
          </div>
          <h3>Notelify</h3>
          <div className='portfolio__buttons'>
          <a href="https://github.com/FolashadeOmoloja/Notelify" className="btn btn-1 btn-6 btn-6a" target="_blank"><span>Github</span>  <BsGithub/></a>
          <a href="https://notelifyweb.netlify.app/" className="btn btn-2 btn-6 btn-6b" target="_blank"><span>Live Demo </span><BsLink45Deg/></a>
          </div>
          <p>Notefily is a responsive functional web application built to help users store notes and create todo-lists, Technology used: Html, CSS, Javascript</p>
        </article>
        <article className='portfolio__item middle'>
          <div className="portfolio__img">
            <img src={img2} alt="" />
            <div className="overlay"></div>
								<a href="https://readym.netlify.app/" className="overlay__link">
                  <GiBinoculars/>
								</a>
          </div>
          <h3>Readym</h3>
          <div className='portfolio__buttons'>
           <a href="https://github.com/FolashadeOmoloja/Readym" className="btn btn-1 btn-6 btn-6a" target="_blank"><span>Github</span>  <BsGithub/></a>
           <a href="https://readym.netlify.app/" className="btn btn-2 btn-6 btn-6b" target="_blank"><span>Live Demo </span><BsLink45Deg/></a>
          </div>
          <p>Readym is a website built to improve reading culture by creating easy accessibility to informative books online, Tecnology used: Html, CSS and Bootsrap  </p>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__img">
            <img src={img3} alt="" />
            <div className="overlay"></div>
								<a href="#" className="overlay__link">
                  <GiBinoculars/>
								</a>
          </div>
          <h3>TourIt</h3>
          <div className='portfolio__buttons'>
          <a href="#" className="btn btn-1 btn-6 btn-6a" target="_blank"><span>Github</span>  <BsGithub/></a>
          <a href="#" className="btn btn-2 btn-6 btn-6b" target="_blank"><span>Live Demo </span><BsLink45Deg/></a>
          </div>
          <p>TourIt is a responsive functional website and blog built for keeping up with the latest travel updates and news, Technology used: ReactJs and CSS</p>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__img">
            <img src={img4} alt="" />
            <div className="overlay"></div>
								<a href="https://eduford-learning.netlify.app/" className="overlay__link">
                  <GiBinoculars/>
								</a>
          </div>
          <h3>Eduford</h3>
          <div className='portfolio__buttons'>
          <a href="https://github.com/FolashadeOmoloja/Eduford" className="btn btn-1 btn-6 btn-6a" target="_blank"><span>Github</span>  <BsGithub/></a>
          <a href="https://eduford-learning.netlify.app/" className="btn btn-2 btn-6 btn-6b" target="_blank"><span>Live Demo </span><BsLink45Deg/></a>
          </div>
          <p>Eduford is a responsive website created as a landing page for a university containing vital imformation about the institute, Technology used: Html, CSS, Javascript </p>
        </article>
        <article className='portfolio__item middle'>
          <div className="portfolio__img">
            <img src={img5} alt="" />
            <div className="overlay"></div>
								<a href="rps-gameplay.netlify.app" className="overlay__link">
                  <GiBinoculars/>
								</a>
          </div>
          <h3>RPS-gameplay</h3>
          <div className='portfolio__buttons'>
          <a href="https://github.com/FolashadeOmoloja/rock_paper_scissors_game" className="btn btn-1 btn-6 btn-6a" target="_blank"><span>Github</span>  <BsGithub/></a>
          <a href="rps-gameplay.netlify.app" className="btn btn-2 btn-6 btn-6b" target="_blank"><span>Live Demo </span><BsLink45Deg/></a>
          </div>
          <p>RPS-gameplay is a simple rock-paper-scissors game, built for recreational purposes and to Let off steam  <FaGrinWink/>! Technology used Html, CSS and Javascript</p>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__img">
            <img src={img6} alt="" />
            <div className="overlay"></div>
								<a href="https://actionsignuppage.netlify.app/" className="overlay__link">
                  <GiBinoculars/>
								</a>
          </div>
          <h3>SignUp Page</h3>
          <div className='portfolio__buttons'>
          <a href="https://github.com/FolashadeOmoloja/1st-mini-project-WTF--signup-form" className="btn btn-1 btn-6 btn-6a" target="_blank"><span>Github</span>  <BsGithub/></a>
          <a href="https://actionsignuppage.netlify.app/" className="btn btn-2 btn-6 btn-6b" target="_blank"><span>Live Demo </span><BsLink45Deg/></a>
          </div>
          <p>This is a simple  reponsive Sign-Up web page, skillfully designed and developed to be visually appealing and attractive to users. Technology used Html and CSS</p>
        </article>

      </div>
    </section>
  )
}

export default Portfolio