import React from 'react'
import './Services.css'
import  Automated from "../../img/automated.png";
import Testcase from "../../img/testcase.png"
import Phone from "../../img/phone.png"
import Card from '../Card/Card';
import Resume from './resume.pdf'
import {motion} from 'framer-motion'

const Services = () => {
    const transition = {
        duration: 1,
        type: "spring",
    };
  return (
    <div className='services'>

        {/* left side */}
        <div className='awesome'>
        <span>My Outstanding</span>
        <span>Services</span>
        <span>As a dedicated quality assurance professional, I specialize in providing exceptional<br />
             QA services to ensure the reliability, functionality, and user satisfaction of software<br />
             products. With a deep understanding of industry best practices and a keen eye for <br />
            detail, I am committed to delivering superior results that meet and exceed client <br />
            expectations
        </span> 
        <a href={Resume} download>
        <button className='button s-button'>Download CV</button>
        </a>
        <div className='blur s-blur1' style={{background: '#ABF1FF94'}}></div>
        </div>
        {/* right side */}
        <div className="cards">
            <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
            style={{left: '14rem'}}>
                <Card
                emoji = {Testcase}
                heading = {'Test Case Creation'}
                detail = {'One of my key strengths lies in..'}
                />
            </motion.div>

            <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
            style={{top: '12rem', left: '-4rem'}}>
                <Card
                emoji = {Automated}
                heading = {'Automation Testing'}
                detail = {'Recognizing the need for efficient and..'}
                />
            </motion.div>

            <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
            style={{top: '19rem', left: '12rem'}}>
                <Card
                emoji = {Phone}
                heading = {'Mobile Test'}
                detail = {'As a mobile testing specialist, I..'}
                />
            </motion.div>
            <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services