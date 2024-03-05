import React from "react";
import "./profile.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div id="profile">
      <title>Profile</title>
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
      <div id="mainbodydiv">
        <div id="mainbody">
          <h3>Fill your details below:</h3>
          <form action="">
            <label>
              <b>Date of Birth</b>
            </label>
            <br />
            <input type="date" id="birthday" name="birthday"></input>
            <br />
            <br />
            <label>
              <b>Height (in cm)</b>
            </label>
            <br />
            <input
              type="number"
              name="height"
              placeholder="Input your height here"
              required
            />
            <br />
            <br />
            <label>
              <b>Weight (in kg)</b>
            </label>
            <br />
            <input
              type="number"
              name="weight"
              placeholder="Input your weight here"
              required
            />
            <br />
            <br />
            <label>
              <b>Blood Group</b>
            </label>
            <br />
            <select>
              <option value="BGA">A</option>
              <option value="BGB">B</option>
              <option value="BGAB">AB</option>
              <option value="BGO">O</option>
            </select>
            <br />
            <br />
            <label>
              <b>
                Are you allergic to any drugs? If yes please enumerate them
                below:
              </b>
            </label>
            <br />
            <textarea name="message" cols="30" rows="5"></textarea>
            <br />
            <br />
            <label>
              <b>When did you last check your blood pressure?</b>
            </label>
            <br />
            <input type="date" id="bpreading" name="bpreading"></input>
            <br />
            <br />
            <label>
              <b>What was your blood pressure reading?</b>
            </label>
            <br />
            <input
              type="text"
              name="bpr"
              placeholder="Input your blood pressure"
              required
            />
            <br />
            <br />
            {/* <label><b>Do You Suffer From Diabetes?</b></label><br>
                <div id="diabetesdiv">
                    <div id="diabetesyes">
                        <input type="checkbox" id="diabetesyes" name="diabetesyes" value="diabetes">
                        <label for="diabetesyes">Yes</label><br>
                    </div>
                    <div id="diabetesno">

                    </div>
                </div>
                <br/><br/> */}
            <Link to={"/allowdoctor"} className="logoutclick">
              <button type="submit">Allow Doctor View Your Profile</button>
            </Link>
            <br />
            <br />
            <button type="submit">Save Profile Details</button>
          </form>
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

export default Profile;
