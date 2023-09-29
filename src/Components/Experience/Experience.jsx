import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
import { motion } from "framer-motion";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  const transition = {
    duration: 2,
    type: "spring",
  };

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
      <motion.div 
        initial={{ left: "-15rem" }}
        whileInView={{ left: "0rem" }}
        transition={transition} className='circle'>2+
      </motion.div>
        <span  style={{color: darkMode?'white':''}}>Years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>10+</div>
        <span  style={{color: darkMode?'white':''}}>Completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
      <motion.div 
        initial={{ right: "-15rem" }}
        whileInView={{ left: "0rem" }}
        transition={transition}  className='circle'>6+
      </motion.div>
        <span  style={{color: darkMode?'white':''}}>Tools </span>
        <span>Knowledge</span>
      </div>
    </div>
  );
};

export default Experience;
