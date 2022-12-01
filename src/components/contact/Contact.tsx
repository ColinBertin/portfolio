import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <section className='contact'>
      <h2>Contact</h2>
      <form method="POST" action="https://getform.io/f/79f566d4-9401-42ec-9f41-92c02f90ad5e">
        <input type="text" name="name" placeholder="Name" required/>
        <input type="email" name="email" placeholder="Email" required/>
        <textarea name="message" id="textarea" rows={10} placeholder="Message" minLength={10} required></textarea>
        <button className='btn'>Let&aposs Collaborate</button>
      </form>
    </section>
  );
};

export default Contact;
