import React from 'react'
import './footer.css'
import {BiHomeHeart} from 'react-icons/bi'
import {CgUserlane} from 'react-icons/cg'
import {BiBookHeart} from 'react-icons/bi'
import {MdWork} from 'react-icons/md'
import {BiMessageAltEdit} from 'react-icons/bi'
import Linkedin from '../../assets/Linkedinn.png'
import Github from '../../assets/GitHub.png'
import Gmail from '../../assets/Gmail.png'
import space from '../../assets/Illustration.png'

const footer = () => {
  return (
    <footer className='footer'>
     <div className="container footer__container">
      <div className="footer__options">
        <a href="#home" className="footer__option">
        <BiHomeHeart/>
          <span>Home</span>
        </a>
        <a href="#about" className="footer__option">
        <CgUserlane/>
          <span>About Me</span>
        </a>
        <a href="#skills" className="footer__option">
        <BiBookHeart/>
          <span>My Experience</span>
        </a>
        <a href="#portfolio"className="footer__option">
        <MdWork/>
          <span>Portfolio</span>
        </a>
        <a href="#contact" className="footer__option">
        <BiMessageAltEdit/>
          <span>Contact Me</span>
        </a>

      </div>
      <div className="footer__socials">
        <a className="footer__icon" href='https://www.linkedin.com/in/folashade-omoloja/' target='_blank'>
        <img src= {Linkedin} alt="" />
        </a>
        <a className="footer__icon" href="https://github.com/FolashadeOmoloja" target='_blank'>
        <img src={Github} alt="" />
        </a>
        <a className="footer__icon" href="mailto: omolojashade@gmail.com" target='_blank'>
        <img src={Gmail} alt="" />
        </a>
      
        
        
      </div>
      <article className="copy">
       <span>Changing the world one line of code at a time <img src={space} alt="" /></span>
      </article>
     </div>
      </footer>
  )
}

export default footer