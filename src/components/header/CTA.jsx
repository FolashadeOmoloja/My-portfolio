import React from 'react'
import CV from '../../assets/Folashade_Omoloja_resume.pdf'

const CTA = () => {
  return (
<div className="buttons">
<a href="#contact" className="cta btn btn-1">
        Let's talk
</a>
<a href={CV} className="cta btn btn-2" download>
        Download CV
</a>
</div>
  )
}

export default CTA