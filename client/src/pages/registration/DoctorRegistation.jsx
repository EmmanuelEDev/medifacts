import React from "react";
import "./doctorregistration.css";
import logo from "../../assets/logo.png";

const DoctorRegistation = () => {
  return (
    <div id="doctorregistration">
      <title>Create An Account</title>
      <div id="topdiv">
        <img id="logo" src={logo} alt="" />
      </div>
      <div id="boxdiv">
        <div id="box">
          <form action="">
            <label>
              <b>First Name</b>
            </label>
            <br />
            <input
              type="text"
              name="first name"
              placeholder="Type your first name here"
              required
            />
            <br />
            <br />
            <label>
              <b>Surname</b>
            </label>
            <br />
            <input
              type="text"
              name="surname"
              placeholder="Type your surname here"
              required
            />
            <br />
            <br />
            <label>
              <b>Folio Number</b>
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
            <label>
              <b>Repeat Password</b>
            </label>
            <br />
            <input
              type="password"
              name="psw-repeat"
              id="psw-repeat"
              placeholder="Repeat Password"
              required
            />
            <br />
            <br />
            <button type="submit">Create Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorRegistation;
