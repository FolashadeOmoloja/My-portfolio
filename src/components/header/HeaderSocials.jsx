import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import {RiComputerLine} from 'react-icons/ri'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/folashade-omoloja/" target="_blank" className='header__socials__icon'><BsLinkedin/></a>
        <a href="https://github.com/FolashadeOmoloja" target="_blank" className='header__socials__icon'><BsGithub/></a>
        <a href="mailto: omolojashade@gmail.com" target="_blank" className='header__socials__icon'><GrMail/></a>
        <a href="#porfolio" className='header__socials__icon'><RiComputerLine/></a>
      
    </div>
  )
}

export default HeaderSocials