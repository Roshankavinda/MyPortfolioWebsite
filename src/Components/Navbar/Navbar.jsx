import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
          <Link activeClass="active" to="Intro" spy={true} smooth={true}>
                <li>Home</li>
            </Link>
            <Link activeClass="active" to="services" spy={true} smooth={true}>
                <li>Services</li>
            </Link>
            <Link activeClass="active" to="experience" spy={true} smooth={true}>
                <li>Experience</li>
            </Link>
            <Link activeClass="active" to="works" spy={true} smooth={true}>
                <li>Technology</li>
            </Link>
            <Link activeClass="active" to="portfolio" spy={true} smooth={true}>
                <li>Portfolio</li>
            </Link>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
