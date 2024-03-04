import React from "react";
import "./home.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home">
      <title>Medifacts</title>
      <div id="topdiv">
        <img id="logo" src={logo} alt="" />
      </div>
      <div id="boxdiv">
        <div id="tireddiv">
          <h1>
            Are you tired of having to create a new medical file everytime you
            go to a new hospital? Avoid that by keeping track of your medical
            information online with Medifacts.
          </h1>
          <br />
          <a href="user.jsx">
            <button>Get Started</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
