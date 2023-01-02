import React, { useEffect } from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 
import './header.css'
import bitmoji from '../../assets/bitmoji1.png'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import {CgArrowLongRight} from 'react-icons/cg'

const Header = () => {
//   useEffect(() =>{
//      AOS.init({ duration: 2000});
//   }, [])
  return (
   <header>
    
    <div className="contanier header__container" id='home' >
       <div className="header__container__inner">
        <div className="inner__text">
        <h2 className='first'> Hello there <img src= {bitmoji} alt="" />,  </h2>
        <h1>I'm Folashade Omoloja </h1>
        <h2>A Front-End Developer</h2>
        <h2>Let's talk!</h2>
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