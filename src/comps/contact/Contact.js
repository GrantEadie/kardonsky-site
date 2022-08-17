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
      <div id="contact-header">
        <img
          id="contact-header-img"
          src="https://images.unsplash.com/photo-1536523965721-a6e354bd19fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3431&q=80"
          alt="methow valley"
        />
        <div id="contact-header-text">
          <h1>Contact Me</h1>
          <div id="contact-socials">
            <InstagramLogo size={32} weight="fill" />
            <FacebookLogo size={32} weight="fill" />
            <TwitterLogo size={32} weight="fill" />
            <LinkedinLogo size={32} weight="fill" />
          </div>
        </div>
      </div>
      <div id="contact-form">
        <img
          id="contact-headshot"
          src="https://firebasestorage.googleapis.com/v0/b/kardonsky-site.appspot.com/o/headshots%2FValerieKardonsky6.jpg?alt=media&token=ebd136e6-5fc2-49ae-adb3-8ed3b08726c0"
          alt="headshot"
        />
        <form>
          <div id="contact-form-header">
            <AddressBook size={32} weight="fill" />
            <h1>Get In Touch</h1>
          </div>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <textarea placeholder="Message" />
          <button type="submit">Send</button>
        </form>
        <div id="contact-info">
          <div className="contact-info-item">
            <Phone size={18} weight="fill" />
            <span>(206) 310-1036</span>
          </div>
          <div className="contact-info-item">
            <Envelope size={18} weight="fill" />
            <span>valerie@methowhomes.com</span>
          </div>
          <div className="contact-info-item">
            <NavigationArrow size={18} weight="fill" />
            <span>141 Riverside Avenue Winthrop, WA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
