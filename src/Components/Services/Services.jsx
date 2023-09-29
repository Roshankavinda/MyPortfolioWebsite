import React, { useContext } from "react";
import "./Services.css";
import  Automated from "../../img/automated.png";
import Testcase from "../../img/testcase.png"
import Phone from "../../img/phone.png"
import Card from '../Card/Card';
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Outstanding</span>
        <span>Services</span>
        <spane>
             As a dedicated quality assurance professional, I specialize in providing exceptional<br />
             QA services to ensure the reliability, functionality, and user satisfaction of software<br />
             products. With a deep understanding of industry best practices and a keen eye for <br />
             detail, I am committed to delivering superior results that meet and exceed client <br />
             expectations
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={Testcase} 
            heading={"Test Case Design"}
            detail={"My test case gives detailed information about testing strategy & testing process."}
          />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Automated}
            heading={"Automation Testing"}
            detail={"I automated software testing uses scripted sequences executed by testing tools."}
            className="emoji-style"
          />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Phone}
            heading={"Mobile Test"}
            detail={
              "I delivering great experiences on mobile is uniquely challenging and rewarding."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
