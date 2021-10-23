import './contact.scss';
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
      <h2>Contattaci</h2>
      <br />
      <br />
      <p>Per qualsiasi domanda non esitare a contttarci.</p>
      <br />
      <br />
      <a href='tel:+393456380585' target='blank'>
        <p>Tel: +39 345 638 0585</p>
      </a>
      <br />
      <a href='mailto:salumificiomei@hotmail.it' target='blank'>
        <p>Email: salumificiomei@hotmail.it</p>
      </a>
      <form className='contact-form' onSubmit={sendEmail}>
        <input type='text' placeholder='Nome' name='name' />
        <input type='email' placeholder='Indirizzo Email' name='email' />
        <input type='text' placeholder='Oggetto' name='subject' />
        <textarea placeholder='Il tuo messaggio' name='message' />
        <input type='submit' value='Invia' />
      </form>
    </div>
  );
}
