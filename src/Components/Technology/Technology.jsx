import React, { useContext } from "react";
import "./Technology.css";
import Selenium from "../../img/selenium.png"
import Java from "../../img/java.png"
import Js from "../../img/js.png"
import Cypress from "../../img/cypress.png"
import Appium from "../../img/appium.png"
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
 
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className="works" id="works">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>
          Working
          </span>
          <span>Technology & Tools</span>
          <spane>
             As a quality assurance professional, I am committed to delivering excellence in <br />
             QA services. With expertise in comprehensive testing, test case design, automation, <br />
             and defect management, I play a vital role in ensuring the delivery of high-quality <br />
             software products.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Selenium} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Java} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Js} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Appium} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Cypress} alt="" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
