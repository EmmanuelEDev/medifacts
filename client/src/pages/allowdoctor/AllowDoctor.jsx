import React from "react";
import "./allowdoctor.css";
import logo from "../../assets/logo.png";

const AllowDoctor = () => {
  return (
    <div id="allowdoctor">
      <title>Allow Doctor View Tour Profile</title>
      <div id="topdiv">
        <img id="logo" src={logo} alt="" />
      </div>
      <div id="boxdiv">
        <div id="box">
          <p>
            To enable the doctor view your profile, you need to click the button
            the below to generate a password which the doctor will use to log in
            and view your profile.
          </p>
          <button type="submit">Generate Password</button>
        </div>
      </div>
    </div>
  );
};

export default AllowDoctor;
