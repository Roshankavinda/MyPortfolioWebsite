import React, { useContext } from "react";
import "./Intro.css";
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import RoshanWickramasooriya from '../../img/Roshan.png'
import auto from '../../img/auto.png'
import qa from '../../img/qa.png'
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  
  const transition = { duration: 2, type: "spring" };
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
          <span>Roshan Wickramasooriya</span>
          <span>
                As a Software Quality Assurance Engineer, my mission is to play a 
                pivotal role in the software development process by meticulously testing 
                and validating every aspect of the product. My commitment to excellence drives 
                me to continuously improve the quality of software, thereby contributing to a 
                seamless user experience and the success of projects.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
          <a href="https://github.com/Roshankavinda" target="_blank" rel="noopener noreferrer">
          <img src={Github} alt=""/>
          </a>
          <a href="https://www.linkedin.com/in/roshan-wickramasooriya-003b5a207/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/roshanwickramasooriya/" target="_blank" rel="noopener noreferrer">
          <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={RoshanWickramasooriya} alt="" style={{marginLeft:'-15rem'}}/>
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-20%" , top:"-29%"}}
          transition={transition}
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={qa} text1="QA" text2="Engineer" />
        </motion.div>

        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "1rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={auto} text1="Automation" text2="Testing" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
