import React from "react";
import "./appointment.css";
import logo from "../../assets/logo.png";
import hospital1 from "../../assets/hospital1.jpg";
import hospital2 from "../../assets/hospital2.jpg";
import hospital3 from "../../assets/hospital3.jpg";
import hospital4 from "../../assets/hospital4.jpg";
import hospital5 from "../../assets/hospital5.jpg";
import hospital6 from "../../assets/hospital6.jpg";
import hospital7 from "../../assets/hospital7.jpg";
import hospital8 from "../../assets/hospital8.jpg";
import hospital9 from "../../assets/hospital9.jpg";
import { Link } from "react-router-dom";

const Appointment = () => {
  return (
    <div id="appointment">
      <title>Book An Appointment</title>
      <div id="div1">
        <div id="div1logo">
          <div id="topdiv">
            <div id="logodiv">
              <img id="logo" src={logo} alt="" />
            </div>
            <div id="navbar">
              <a href="profile.html">My Profile</a>
              <a href="appointment.html">Book an Appointment</a>
              <a href="">Contact Us</a>
            </div>
            <Link to={"/loggedout"} className="logoutclick">
              Logout
            </Link>
          </div>
        </div>
        <div id="div1body">
          <h1>
            Do You Need to See a Doctor? Make an Appointment at one of our
            Partner Hospitals
          </h1>
        </div>
      </div>
      <div id="div2">
        <div id="selectdiv">
          <select>
            <option value="choose">Choose a Hospital</option>
            <option value="lugbe">Lugbe General Hospital</option>
            <option value="karimu">Karimu Specialist Hospital</option>
            <option value="jabi">Federal Medical Centre, Jabi</option>
            <option value="parkview">Parkview Hospital</option>
            <option value="ridgeway">Ridgeway Pediatrics Centre</option>
            <option value="garki">Federal Medical Centre, Garki</option>
            <option value="apo">Apo General Hospital</option>
            <option value="wuse">Wuse Specialist Hospital</option>
            <option value="phoenix">Phoenix Healthcare Centre</option>
          </select>
          <input type="date" id="appointmentdate" name="appointmentdate" />
          <button type="submit">Book Appointment</button>
        </div>
        <p>
          Select a hospital and a date, then book an appointment. We will
          confirm your booking via email.
        </p>
      </div>
      <div id="div3">
        <h3>Check out our partner hospitals</h3>
        <div id="hospitaldiv">
          <div id="hpdiv1">
            <img className="hospitalimg" src={hospital1} alt="" />
            <img className="hospitalimg" src={hospital2} alt="" />
            <img className="hospitalimg" src={hospital3} alt="" />
          </div>
          <div id="hpdiv2">
            <img className="hospitalimg" src={hospital4} alt="" />
            <img className="hospitalimg" src={hospital5} alt="" />
            <img className="hospitalimg" src={hospital6} alt="" />
          </div>
          <div id="hpdiv3">
            <img className="hospitalimg" src={hospital7} alt="" />
            <img className="hospitalimg" src={hospital8} alt="" />
            <img className="hospitalimg" src={hospital9} alt="" />
          </div>
        </div>
      </div>
      {/* <div id="footerdiv">
        <footer>
          <p>Medifacts - Copyright 2024©. All rights reserved.</p>
        </footer>
      </div> */}
    </div>
  );
};

export default Appointment;
