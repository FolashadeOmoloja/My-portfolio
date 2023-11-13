import React from 'react'
import './nav.css'
import {BiHomeHeart} from 'react-icons/bi'
import {CgUserlane} from 'react-icons/cg'
import {BsPersonWorkspace, BsChatSquareDotsFill} from 'react-icons/bs'
import {MdWork} from 'react-icons/md'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState ('#')
  return (
    <nav className='nav'>
      <a href="#home" onClick={()=> setActiveNav('#')} className= {activeNav === '#'? 'active': ''}>
        <span className='nav-span'>Home</span>
        <BiHomeHeart/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className= {activeNav === '#about' ? 'active': ''}>
        <span className='nav-span'>About</span>
        <CgUserlane/></a>
      <a href="#skills" onClick={()=> setActiveNav('#skills')} className= {activeNav === '#skills' ? 'active': ''}>
        <span className='nav-span'>Experience</span>
        <BsPersonWorkspace/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className= {activeNav === '#portfolio' ? 'active': ''}>
       <span className='nav-span'>Portfolio</span>
        <MdWork/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className= {activeNav === '#contact' ? 'active': ''}>
      <span className='nav-span'>Contact</span>
        <BsChatSquareDotsFill/></a>
    </nav>
  )
}

export default Nav