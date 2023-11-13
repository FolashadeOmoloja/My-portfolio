import React, { useEffect } from 'react'
import './header.css'
import bitmoji from '../../assets/bitmoji1.png'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import {CgArrowLongRight} from 'react-icons/cg'

const Header = () => {

  return (
   <header>
    
    <div className="contanier header__container" id='home' >
       <div className="header__container__inner">
        <div className="inner_text">
        <h1 style={{position: 'relative', fontWeight: 'bold'}}>Hi, I'm Folashade Omoloja <img src= {bitmoji} alt="" /></h1>
        <div className='text__animate'>
           <h2>A Front-End Developer</h2>
        </div>
        <p className='header-text'>I specialize in building Frontend applications. I take pride in my work and ensure I deliver the fastest, most accessible and most responsive application possible. It's not just about writing code; it's about building experiences that leave a lasting impression.</p>

        </div>
        <CTA></CTA>
       </div>
       <HeaderSocials/>
       <a href="#contact" className="scroll__down">Scroll Down  <CgArrowLongRight/></a>

  
    </div>
   </header>
  )
}

export default Header