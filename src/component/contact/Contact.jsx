import React from "react";
import "./contact.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  emailjs.init("9765n6hH7u3RJlpVL");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
        "service_md69n4f",
        "template_llqil1r",
        form.current
      )
      .then(
        (response) => {
          alert("Your Email has been sent.");
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          alert("Oops! Something went wrong.");
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <section id="contact">
      <section id="contact">
        <h5>Get In Touch!</h5>
        <h2>Contact</h2>

        <div className="container contact_container">
          <div className="contactMethod">
            <article className="contactOption">
              <MailOutlineIcon className="icon" />
              <h4>Email</h4>
              <h5>joeleegc@gmail.com</h5>
              <a
                href="mailto:joeleegc@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Send Email!
              </a>
            </article>
            <article className="contactOption">
              <LinkedInIcon className="icon" />
              <h4>LinkedIn</h4>
              <a
                href="https://www.linkedin.com/in/joe-lee-5a8ab4228/"
                target="_blank"
                rel="noreferrer"
              >
                Connect with me!
              </a>
            </article>
          </div>
          <h5>Any Feedback?</h5>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            />
            <button type="submit" className="btn btn-primary">
              Send Email
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Contact;
