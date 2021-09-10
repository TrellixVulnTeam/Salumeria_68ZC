import './contact.css';
import emailjs from 'emailjs-com';
import React from 'react';
import { init } from 'emailjs-com';
init('user_XeAYvDQF0Ki9JECZtvAfM');
export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_plb3zhj',
        'template_mkomrp6',
        e.target,
        'user_XeAYvDQF0Ki9JECZtvAfM'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className='Contact'>
      <form className='contact-form' onSubmit={sendEmail}>
        <input type='text' placeholder='Name' name='name' />
        <input type='email' placeholder='Email Adress' name='email' />
        <input type='text' placeholder='Subject' name='subject' />
        <textarea placeholder='Your message' name='message' />
        <input type='submit' value='Send' />
      </form>
    </div>
  );
}
