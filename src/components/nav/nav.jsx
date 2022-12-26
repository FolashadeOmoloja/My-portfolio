import React from 'react'
import './nav.css'
import {BiHomeHeart} from 'react-icons/bi'
import {CgUserlane} from 'react-icons/cg'
import {BiBookHeart} from 'react-icons/bi'
import {MdWork} from 'react-icons/md'
import {BiMessageAltEdit} from 'react-icons/bi'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState ('#')
  return (
    <nav className='nav'>
      <a href="#home" onClick={()=> setActiveNav('#')} className= {activeNav === '#'? 'active': ''}><BiHomeHeart/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className= {activeNav === '#about' ? 'active': ''}><CgUserlane/></a>
      <a href="#skills" onClick={()=> setActiveNav('#skills')} className= {activeNav === '#skills' ? 'active': ''}><BiBookHeart/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className= {activeNav === '#portfolio' ? 'active': ''}><MdWork/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className= {activeNav === '#contact' ? 'active': ''}><BiMessageAltEdit/></a>
    </nav>
  )
}

export default Nav