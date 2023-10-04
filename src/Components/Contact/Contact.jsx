import React, { useContext, useEffect, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import Modal from "react-modal";
import Done from '../../img/done.png'
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    console.log("Success Popup is ", modalIsOpen);
  },[modalIsOpen])
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm("service_1sjf8nw", "template_sapk9ze", form.current, "6jU9_HBJmNvG2V9Xj")
    .then(
      (result) => {
        console.log(result.text);
        form.current.reset();
        setModalIsOpen(true); 
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
          required
          />
          <input 
         type="email"
         name="user_email"
         className="user"
         placeholder="Your Email"
         maxLength="150"
         pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
         required
         />
          <textarea 
          name="message" 
          className="user"
          placeholder="Message"
          maxLength="500"
          required/>
          <input type="submit" value="Send" className="button" />
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
        
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
        ariaHideApp={false} 
        className="modal-content" 
        overlayClassName="modal-overlay"
      >
        <img src={Done} alt="" />
        <h2 style={{fontWeight:'bold', color: '#ffa603', fontSize: '30px'}}>Thank You!</h2>
        <p style={{color: '#555555' , fontSize: '20px'}}>I'll be getting in touch with you soon.</p>
        <button onClick={() => setModalIsOpen(false)} style={{
          padding: '5px 20px',
          border: 'none',
          borderRadius: '5px',
          borderColor: '#ffa603',
          backgroundColor: '#ffb838',
          color: 'white',
          cursor: 'pointer' 
        }}>Close</button>
      </Modal>
    </div>
  );
};

export default Contact;
