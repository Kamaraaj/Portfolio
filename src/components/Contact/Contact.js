import React from 'react';
import {Element} from 'react-scroll'
import './Contact.css';

export const Contact = () => {
  return (
    <Element id="contact" className='contact'>
      <h1> Contacts </h1>
      <div className='contact__container'>
        <p>
          Email: <span> rajumech94@gmail.com</span>
        </p>
        <p>
          Mobile: <span>+918144391110</span>
        </p>
        

      </div>
    </Element>
  );
};

export default Contact;