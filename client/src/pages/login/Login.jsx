import React from "react";
import "./login.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div id="login">
      <title>Log In</title>
      <div id="topdiv">
        <img id="logo" src={logo} alt="" />
      </div>
      <div id="boxdiv">
        <div id="box">
          <form action="">
            <label>
              <b>Username</b>
            </label>
            <br />
            <input
              type="text"
              name="suername"
              placeholder="Enter your username here"
            />
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
            <Link to={"/profile"}>
              <button type="submit">Log In</button>
            </Link>
          </form>
          <p id="register">
            Don't have an account? &nbsp;
            <Link to={"/register"}>Click here to register.</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
