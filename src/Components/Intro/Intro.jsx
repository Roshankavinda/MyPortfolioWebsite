import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import RoshanWickramasooriya from '../../img/Roshan2.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
const Intro = () => {
  return (
    <div className='intro'>
        <div className='i-left'>
        <div className='i-name'>
            <span>Hey! I Am</span>
            <span>Roshan Wickramasooriya</span>
            <span>Software Quality Assurance 
                Engineer with experience in 2 years</span>
        </div>
        <button className='button i-button'>Hire me</button>
        <div className='i-icons'>
            <img src={Github} alt="https://github.com/Roshankavinda" />
            <img src={LinkedIn} alt="https://www.linkedin.com/in/roshan-wickramasooriya-003b5a207/" />
            <img src={Instagram} alt="https://www.instagram.com/roshanwickramasooriya/" />
        </div>
        </div>
        <div className='i-right'>
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={RoshanWickramasooriya} alt="" />
            <img src={glassesimoji} alt="" />
            <div style={{top: '-4%', left: '65%'}}>
                <FloatingDiv image={Crown} txt1='QA' txt2='Engineer'/>
            </div>
            <div style={{top: '18rem', left: '-5rem'}}>
                <FloatingDiv image={thumbup} txt1='Best' txt2='Testing'/>
            </div>
        </div>
    </div>
  )
}

export default Intro