import React from "react";
import './Contact.css'
const Contact = () => {
  return (
    <div className="contact-main-div">
      <h1>Contact Us</h1>
      <p>
        If you have any further inquires, please let us know by filling the form
        below
      </p>
      <form>
        <div className="name-div">
          <div>
            <h4>First Name</h4>
            <input type="text" />
          </div>
          <div>
            <h4>Last Name</h4>
            <input type="text" />
          </div>
        </div>
        <div className="email-div">
          <h4>Email</h4>
          <input type="email" />
        </div>
        <div className="message-div">
          <h4>Message</h4>
          <textarea></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
