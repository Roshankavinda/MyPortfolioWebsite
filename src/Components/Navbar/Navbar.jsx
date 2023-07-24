import React from 'react'
import './Navbar.css'


export const Navbar = () => {
  return (
   <div className="n-wrapper">
    <div className="n-left">
        <div className="n-name"></div>
        
    </div>
    <div className="n-right">
        <div className="n-list">
            <ul style={{listStyleType: 'none'}}>
                <li>Home</li>
                <li>Services</li>
                <li>Experience</li>
                <li>Technology</li>
                <li>Portfolio</li>
            </ul>
        </div>
        <button className="button n-button">
           Contact
        </button>
    </div>
   </div>
  )
}
