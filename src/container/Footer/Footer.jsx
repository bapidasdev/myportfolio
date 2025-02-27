import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.css'

export const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = () => {
    // setLoading(true);

    // const contact = {
    //   _type: 'contact',
    //   name: formData.username,
    //   email: formData.email,
    //   message: formData.message,
    // };

    // Client.create(contact)
    //   .then(() => {
    //     setLoading(false);
    //     setIsFormSubmitted(true);
    //   })
    //   .catch((err) => console.log(err));
  };
  const form = useRef();

  const sendEmail = (e) => {
    setLoading(true);
    // e.preventDefault();

    emailjs
      .sendForm('service_za4z814', 'template_ldhwu88', form.current, {
        publicKey: 'ACss-vDgJLLj6Gq7s',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setLoading(false);
          setIsFormSubmitted(true);
          
        },
        (error) => {
          console.log('FAILED... ', error.text);
          setLoading(false);
          e.preventDefault();
        },
      );
       e.preventDefault();
  }


  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          {/* <img src={images.email} alt="email" />
          <a href="das316456@gmail.com" className="p-text">das316456@gmail.com</a> */}
          <a href="mailto:das316456@gmail.com" className="p-text"><img src={images.email} alt="email" /></a>das316456@gmail.com

        </div>
        <div className="app__footer-card">
          {/* <img src={images.mobile} alt="phone" />
          <a href="+918670273082" className="p-text">+918670273082</a> */}
          <a href="tel:8670273082" className="p-text"><img src={images.mobile} alt="+918670273082" /></a>+918670273082
        </div>
      </div>

      {!isFormSubmitted ? (
        // <div  className="app__footer-form app__flex">
        //   <div className="app__flex">
        //     <input className="p-text" type="text" placeholder="Your Name" name="user_name" value={username} onChange={handleChangeInput} />
        //   </div>
        //   <div className="app__flex">
        //     <input className="p-text" type="email" placeholder="Your Email" name="user_email" value={email} onChange={handleChangeInput} />
        //   </div>
        //   <div>
        //     <textarea
        //       className="p-text area"
        //       placeholder="Your Message"
        //       value={message}
        //       name="message"
        //       onChange={handleChangeInput}
        //     />
        //   </div>
        //   <button  type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        // </div>


        <form style={{ width: "60%" }} ref={form} onSubmit={sendEmail}>
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input className="p-text" placeholder="Your Name" type="text" name="user_name" value={username} onChange={handleChangeInput} />
            </div>

            <div className="app__flex">
              <input className="p-text" type="email" name="user_email" placeholder="Your Email" onChange={handleChangeInput} />
            </div>

            <textarea
              name="message"
              onChange={handleChangeInput}
              className="p-text area"
              placeholder="Your Message"
            />

            <button className="p-text " onClick={handleSubmit} type="submit" value="Send">{!loading ? 'Send Message' : 'Sending...'}</button>
          </div>
        </form>

      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
      <div className="copyright">
        <p className="p-text">@2024 Bapi das</p>
        <p className="p-text">All rights reserved</p>
      </div>
    </>

  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);



