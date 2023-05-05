import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./mail.css"

const Mail=(props)=>{
    const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ju8j39j', 'template_o3it9nh', form.current, 'PqrnlJc3ocaMiSdz_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <form ref={form} classname="mail-container"onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" value={props.name} name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default Mail;