import React from "react";
import "./doctorlogin.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const DoctorLogin = () => {
  return (
    <div id="doctorlogin">
      <title>Log In</title>
      <div id="topdiv">
        <img id="logo" src={logo} alt="" />
      </div>
      <div id="boxdiv">
        <div id="box">
          <form action="">
            <label>
              <b>Folio Nmber</b>
            </label>
            <br />
            <input type="number" name="nin" placeholder="Enter your NIN here" />
            <br />
            <br />
            <label>
              <b>Password</b>
            </label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              required
            />
            <br />
            <br />
            <button type="submit">Log In</button>
          </form>
          <p id="register">
            Don't have an account? &nbsp;
            <Link to={"/"} className="doctorloginclick">
              Click here to register.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorLogin;
