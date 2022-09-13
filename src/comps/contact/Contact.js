import { useRef, useState } from "react";
import "./contact.css";
import {
  InstagramLogo,
  FacebookLogo,
  TwitterLogo,
  AddressBook,
  Phone,
  Envelope,
  NavigationArrow,
  CheckCircle,
} from "phosphor-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [sending, setSending] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        "service_s069uwj",
        "template_96l4uhd",
        form.current,
        "ijc92KVnLKBNdLVzs"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setFailure(true);
        }
      );
  };
  return (
    <div id="contact-page">
      <div className="page-header-container">
        <img
          className="page-header-img"
          src="https://images.unsplash.com/photo-1624404842751-3c041a9ec1cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
          alt="methow valley"
        />
        <div className="page-header-text">
          <h2>let's chat about your next steps</h2>
          <h1>contact</h1>
        </div>
      </div>
      <div id="contact-body">
        <div id="contact-form">
          <img
            id="contact-headshot"
            src="https://firebasestorage.googleapis.com/v0/b/kardonsky-site.appspot.com/o/headshots%2Fval-headshot-vector_3.png?alt=media&token=22952274-7077-45e1-8d9b-59b464215dcf"
            alt="headshot"
          />
          {success || failure ? (
            <div id="form-box">
              <CheckCircle size={80} weight="fill" />
              <p>
                Thanks for reaching out! <br /> I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form ref={form} onSubmit={sending ? null : sendEmail}>
              <div id="contact-form-header">
                <AddressBook size={32} />
                <h1>get in touch</h1>
              </div>
              <input type="text" placeholder="Name" name="user_name" />
              <input type="email" placeholder="Email" name="user_email" />
              <input type="text" placeholder="Phone" name="user_phone" />
              <textarea placeholder="How can I help?" name="message" />
              <button type="submit">{sending ? "Sending..." : "Send"}</button>
            </form>
          )}
          <div id="contact-info">
            <div className="contact-info-item">
              <Phone size={18} />
              <span>(206) 310-1036</span>
            </div>
            <div className="contact-info-item">
              <Envelope size={18} />
              <span>valerie@methowhomes.com</span>
            </div>
            <div className="contact-info-item">
              <NavigationArrow size={18} />
              <span>141 Riverside Avenue Winthrop, WA</span>
            </div>
            <div className="contact-info-item contact-socials">
              <a href="https://www.instagram.com/valeriekardonsky/">
                <InstagramLogo size={32} />
              </a>
              <a href="https://www.facebook.com/MethowValleyBlueSky/">
                <FacebookLogo size={32} />
              </a>
              <a href="https://www.twitter.com/methow_homes/">
                <TwitterLogo size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
