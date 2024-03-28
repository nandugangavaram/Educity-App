import React from "react";
import "./Contact.css";
import white_arrow from "../../assets/images/white-arrow.png";
import msg_icon from "../../assets/images/msg-icon.png";
import mail_icon from "../../assets/images/mail-icon.png";
import phone_icon from "../../assets/images/phone-icon.png";
import location_icon from "../../assets/images/location-icon.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="Message Icon" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="Mail Icon" />
            nandugangavaram@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="Phone Icon" />
            +61 466881849
          </li>
          <li>
            <img src={location_icon} alt="Location Icon" />
            27 Rhonda St, Mount Waverley, VIC - 3149
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Your Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email id"
            required
          />
          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="Submit Button" />
          </button>
        </form>
        <span></span>
      </div>
    </div>
  );
};

export default Contact;
