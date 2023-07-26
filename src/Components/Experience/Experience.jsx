import React from 'react'
import './Experience.css'
import {motion} from 'framer-motion'

const Experience = () => {
  const transition = {duration : 2, type: 'spring'}
  return (
    <div className='experience'>
    <div className='achievement'>
        <motion.div 
             initial={{ left: "-15rem" }}
             whileInView={{ left: "0rem" }}
             transition={transition} className='circle'>2+</motion.div>
        <span>Years</span>
        <span>Experience</span>
    </div>
    <div className='achievement'>
        <div className='circle'>10+</div>
        <span>Completed</span>
        <span>Projects</span>
    </div>
    <div className='achievement'>
        <motion.div 
             initial={{ right: "-15rem" }}
             whileInView={{ left: "0rem" }}
             transition={transition}  className='circle'>6+</motion.div>
        <span>Tools</span>
        <span>Knowledge</span>
    </div>
    </div>
  )
}

export default Experience