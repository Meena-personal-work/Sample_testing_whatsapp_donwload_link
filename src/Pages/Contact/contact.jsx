import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <img src="./crackers-website-banner6.jpg" alt="contact banner"></img>
      <div className="contact-info-img">
        <div className="contact-info">
          <h2 className="contact-heading">Contact Us :-</h2>
          <h5 className="contact-gradient-underline">HARIHARAN TRADER</h5>
          <span>
            <FontAwesomeIcon className="contact-icon" icon={faLocationDot} />{" "}
            &nbsp; No.3/1341/15, Sattur Road, Opp. Old PRC Bus Depot, Near East
            Police Station, SIVAKASI - 626 189.
          </span>
          <span>
            <FontAwesomeIcon className="contact-icon" icon={faPhone} /> &nbsp;
            9444324237
          </span>
          <span>
            <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />{" "}
            &nbsp; hariayyansworld@gmail.com
          </span>
        </div>

        <img
          className="contact-img"
          src="./contact-image.png"
          alt="contact"
        />
      </div>
      <div className="contact-map-container">
        <iframe
          title="map"
          src="https://www.google.com/maps?q=SIVAKASI+626189&output=embed"
          width="100%"
          height="500"
          className="contact-map"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
