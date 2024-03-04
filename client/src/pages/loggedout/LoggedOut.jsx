import React from "react";
import "./loggedout.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const LoggedOut = () => {
  return (
    <div id="loggedout">
      <title>You Have Logged Out</title>
      <div id="topdiv">
        <img id="logo" src={logo} alt="" />
      </div>
      <div id="boxdiv">
        <div id="tireddiv">
          <h2>
            You have logged out. Click &nbsp;
            <Link to={"/"} className="returnhome">
              here
            </Link>{" "}
            &nbsp; to go back to the home page.
          </h2>
          <br />
        </div>
      </div>
    </div>
  );
};

export default LoggedOut;
