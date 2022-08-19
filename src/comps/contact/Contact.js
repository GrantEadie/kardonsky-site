import React from "react";
import "./contact.css";
import {
  InstagramLogo,
  FacebookLogo,
  TwitterLogo,
  LinkedinLogo,
  AddressBook,
  Phone,
  Envelope,
  NavigationArrow,
} from "phosphor-react";

const Contact = () => {
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
          <form>
            <div id="contact-form-header">
              <AddressBook size={32} />
              <h1>get in touch</h1>
            </div>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <textarea placeholder="How can I help?" />
            <button type="submit">Send</button>
          </form>
          <div id="contact-info">
            <div className="contact-info-item">
              <Phone size={18}  />
              <span>(206) 310-1036</span>
            </div>
            <div className="contact-info-item">
              <Envelope size={18}  />
              <span>valerie@methowhomes.com</span>
            </div>
            <div className="contact-info-item">
              <NavigationArrow size={18}  />
              <span>141 Riverside Avenue Winthrop, WA</span>
            </div>
            <div className="contact-info-item contact-socials">
              <InstagramLogo size={32}  />
              <FacebookLogo size={32}  />
              <TwitterLogo size={32}  />
              <LinkedinLogo size={32}  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
