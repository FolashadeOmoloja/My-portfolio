import React from 'react'
import CV from '../../assets/FOLASHADE_OMOLOJA.pdf'

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