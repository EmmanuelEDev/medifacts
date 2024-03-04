import React from "react";
import "./user.css";
import logo from "../../assets/logo.png";

const User = () => {
  return (
    <div id="user">
      <title>Choose a Profile</title>
      <div id="topdiv">
        <img id="logo" src={logo} alt="" />
      </div>
      <div id="boxdiv">
        <div id="box">
          <div id="boxname">
            <p>Which of the following are you?</p>
          </div>
          <div id="iconsbox">
            <a href="patientlogin.html" id="patientdiv">
              <div id="patienticon">
                <div id="pidiv"></div>
              </div>
              <div id="patientname">
                <p id="patientp">Patient</p>
              </div>
            </a>
            <a href="doctorlogin.html" id="doctordiv">
              <div id="doctoricon">
                <div id="didiv"></div>
              </div>
              <div id="doctorname">
                <p id="doctorp">Doctor</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
