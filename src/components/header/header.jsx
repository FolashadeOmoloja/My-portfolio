import React from 'react'
import './header.css'
import bitmoji from '../../assets/bitmoji.png'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import {CgArrowLongRight} from 'react-icons/cg'

const header = () => {
  return (
   <header>
    
    <div className="contanier header__container" id='home' >
       <div className="header__container__inner">
       <h2 className='first'> Hello there,  </h2>
        <h1>I'm Folashade Omoloja <img src= {bitmoji} alt="" /></h1>
        <h2>A Front-End Developer</h2>
        <h2>Let's talk!</h2>
        <CTA></CTA>
       </div>
       <HeaderSocials/>
       <a href="#contact" className="scroll__down">Scroll Down  <CgArrowLongRight/></a>

  
    </div>
   </header>
  )
}

export default header