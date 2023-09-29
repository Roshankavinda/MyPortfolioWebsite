import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1sjf8nw', 'template_sapk9ze', form.current, '6jU9_HBJmNvG2V9Xj')
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
     
      <div className="w-left">
        <div className="awesome">
         
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" 
          name="user_name" 
          className="user"  
          placeholder="Your Name"
          pattern="[A-Za-z ]+"
          maxLength="100"
          />
          <input 
         type="email"
         name="user_email"
         className="user"
         placeholder="Your Email"
         maxLength="150"
         pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
         />
          <textarea 
          name="message" 
          className="user"
          placeholder="Message"
          maxLength="500"/>
          <input 
          type="submit" 
          value="Send" 
          className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
