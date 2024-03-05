import React from "react";
import "./contact.css";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook-round-color-icon.png";
import twitter from "../../assets/x-social-media-black-icon.png";
import instagram from "../../assets/ig-instagram-icon.png";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div id="contact">
      <title>Contact US</title>
      <div id="divtop">
        <div id="topdiv">
          <div id="logodiv">
            <img id="logo" src={logo} alt="" />
          </div>
          <div id="navbar">
            <a href="profile.html">My Profile</a>
            <a href="appointment.html">Book an Appointment</a>
            <a href="contact.html">Contact Us</a>
          </div>
          <Link to={"/loggedout"} className="logoutclick">
            Logout
          </Link>
        </div>
        <div id="divtopmain">
          <h1>Contact Us</h1>
          <div id="divtopmainp">
            <p>
              As a company that serves the public, we always look forward to
              hearing from you because your feedback helps us to get better.
              Please get in touch with us.
            </p>
          </div>
        </div>
      </div>
      <div id="divbottom">
        <div id="divbottomleft">
          <h2>Check out our social media handles</h2>
          <div class="socialmediadiv">
            <img id="facebook" src={facebook} alt="" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p>medifacts</p>
          </div>
          <div class="socialmediadiv">
            <img id="twitter" src={twitter} alt="" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p>medifacts</p>
          </div>
          <div class="socialmediadiv">
            <img id="instagram" src={instagram} alt="" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p>medifacts</p>
          </div>
        </div>
        <div id="divbottomright">
          <h2>Leave us a message</h2>
          <textarea
            name="message"
            cols="70"
            rows="15"
            placeholder="Type your message"
          ></textarea>
          <button>Submit</button>
        </div>
      </div>
      <div id="footerdiv">
        <footer>
          <p>Medifacts - Copyright 2024©. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
