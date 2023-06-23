import {React, useState }from "react";
import "./contact.css";
import axios from "axios"
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {

  const [msg, setMsg] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')


  const submit= async(e)=>{
    e.preventDefault()
    setMsg('');
    setName('');
    setEmail('');
  
    try {
  
        await axios.post("http://localhost:4000/", {
          name,
          email,
          msg
        })
  
    }
    catch(e) {
      console.log(e)
    }
  
  }


  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_37sex9l",
      "template_8opbyg1",
      form.current,
      "TOLS8KC9FmTAccclU"
    );
    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };


  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option__icon" />
            <h4>Email</h4>
            <h5>myEmail@gmail.com</h5>
            <a href="mailto:stevejay675@gmail.com">send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className="contact__option__icon" />
            <h4>LinkedIn</h4>
            <h5>Profile</h5>
            
            <a href="https://www.linkedin.com/in/stevejay-9a7327238">
              Tap me on LinkedIn
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option__icon" />
            <h4>Whatsapp</h4>
            <h5>Direct message</h5>
            <a href="https://api.whatsapp.com/send?phone=+237650798273">
              Whatsapp me
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="your name" required value={name} onChange={(e)=>{setName(e.target.value)}} />
          <input type="email" name="email" placeholder="your email" required value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="your message"
            required
            value={msg} onChange={(e)=>{setMsg(e.target.value)}}
          ></textarea>
          <button type="submit" className="btn btn-primary" onClick={submit}>
            send message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;