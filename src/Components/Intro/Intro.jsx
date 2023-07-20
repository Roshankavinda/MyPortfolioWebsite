import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import RoshanWickramasooriya from '../../img/Roshan2.png'
import auto from '../../img/auto.png'
import qa from '../../img/qa.png'
import bug from '../../img/bug.png'
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
            <img src={bug} alt=""  style={{top: '-20%', left: '-65%', width: '180px', height: '180px'}}/>
            <div style={{top: '-4%', left: '65%'}}>
                <FloatingDiv image={qa} txt1='QA' txt2='Engineer'/>
            </div>
            <div style={{top: '18rem', left: '-5rem'}}>
                <FloatingDiv image={auto} txt1='Automation' txt2='Testing'/>
            </div>
        {/* blur divs */}
           <div className='blur' style={{background: 'rgb(238 210 255)'}}></div>
           <div className='blur' style={{background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>
        </div>
    </div>
  )
}

export default Intro