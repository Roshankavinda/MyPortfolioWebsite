import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span style={{ fontFamily: 'sans-serif', fontSize: '20px', fontWeight: 'bold' }}>FOLLOW ME ON</span>
        <div className="f-icons">
        <a href="https://www.instagram.com/roshanwickramasooriya/" target="_blank" rel="noopener noreferrer">
          <Insta color="white" size={"3rem"} alt=""/>
        </a>
        <a href="https://www.linkedin.com/in/roshan-wickramasooriya-003b5a207/" target="_blank" rel="noopener noreferrer">
          <LinkedIn color="white" size={"3rem"} alt="" />
        </a>
        <a href="https://github.com/Roshankavinda" target="_blank" rel="noopener noreferrer">
          <Gitub color="white" size={"3rem"} alt="" />
        </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
