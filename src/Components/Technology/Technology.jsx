import React from 'react'
import './Technology.css'
import Selenium from "../../img/selenium.png"
import Java from "../../img/java.png"
import Js from "../../img/js.png"
import Cypress from "../../img/cypress.png"
import Appium from "../../img/appium.png"

const Technology = () => {
  return (
    <div className='technology'>
         {/* left side */}
         <div className='awesome'>
        <span>Working</span>
        <span>Technology & Tools</span>
        <span>As a quality assurance professional, I am committed to delivering excellence in <br />
             QA services. With expertise in comprehensive testing, test case design, automation, <br />
             and defect management, I play a vital role in ensuring the delivery of high-quality <br />
             software products.
        </span> 
        <button className='button s-button'>Hire Me</button>
        <div className='blur s-blur1' style={{background: '#ABF1FF94'}}></div>
        {/* left side */}
        <div className='t-right'>
        <div className='t-mainCircle'>
            <div className='t-secCircle'>
               <img src={Selenium} alt="" />
            </div>
            <div className='t-secCircle'>
               <img src={Java} alt="" />
            </div>
            <div className='t-secCircle'>
               <img src={Js} style={{width:'90px'}} alt="" />
            </div>
            <div className='t-secCircle'>
               <img src={Appium}  alt="" />
            </div>
            <div className='t-secCircle'>
               <img src={Cypress}  alt="" />
            </div>
        </div>
        <div className='t-backCircle blueCircle'></div>
        <div className='t-backCircle yellowCircle'></div>
        </div>
        </div>
    </div>

  )
}

export default Technology