import React from "react";
import "./doctordashboard.css";
import logo from "../../assets/logo.png";
import usercircle from "../../assets/user-circle-icon.png";
import dashboard from "../../assets/speedometer-icon.png";
import patienticon from "../../assets/hospital-patient-icon.png";
import schedule from "../../assets/calendar-icon.png";
import settings from "../../assets/setting-icon.png";
import { Link } from "react-router-dom";

const DoctorDashboard = () => {
  return (
    <div id="doctorDashboard">
      <title>Dashboard</title>
      <div id="leftdiv">
        <div id="logodiv">
          <img id="logo" src={logo} alt="" />
          <hr />
        </div>
        <div id="sidebar">
          <div id="navbar">
            <Link to={"/doctordashboard"} id="dashboarddiv">
              <img className="dashboard-icon" src={dashboard} alt="" />
              <p>Dashboard</p>
            </Link>
            <Link to={"/patients"} id="patientsdiv">
              <img className="patient-icon" src={patienticon} alt="" />
              <p>Patients</p>
            </Link>
            <Link to={"/doctorschedule"} id="schedulediv">
              <img className="schedule-icon" src={schedule} alt="" />
              <p>Schedule</p>
            </Link>
            <Link to={"/doctorsettings"} id="settingsdiv">
              <img className="settings-icon" src={settings} alt="" />
              <p>Settings</p>
            </Link>
          </div>
        </div>
        <div id="logoutdiv">
          <hr />
          <Link to={"/loggedout"} className="logoutclick">
            Logout
          </Link>
        </div>
      </div>
      <div id="centrediv">
        <div id="datediv">
          <h3 id="datedivdash">Dashboard</h3>
          <h3 id="datedivdate">Tuesday, 5 March 2024</h3>
        </div>
        <div id="welcome">
          <h2 id="drwelcome">Welcome Dr. Emeka!</h2>
          <h4 id="patientsnumero">You have 7 patients today</h4>
        </div>
        <div id="appontmentsdiv">
          <div id="todayappoint">
            <h4>Today's Appointments</h4>
          </div>
          <div className="patients">
            <div className="name">
              <p className="patientname">Maryam Sani</p>
            </div>
            <div className="type">
              <p className="consult">CONSULTATION</p>
            </div>
            <div className="time">
              <p className="appointtime">8:00</p>
            </div>
          </div>
          <div className="patients">
            <div className="name">
              <p className="patientname">Jibola Bashir</p>
            </div>
            <div className="type">
              <p className="firstvisit">FIRST VISIT</p>
            </div>
            <div className="time">
              <p className="appointtime">9:00</p>
            </div>
          </div>
          <div className="patients">
            <div className="name">
              <p className="patientname">Chinonso Okonkwo</p>
            </div>
            <div className="type">
              <p className="consult">CONSULTATION</p>
            </div>
            <div className="time">
              <p className="appointtime">10:30</p>
            </div>
          </div>
          <div className="patients">
            <div className="name">
              <p className="patientname">Thelma Duke</p>
            </div>
            <div className="type">
              <p className="emergency">EMERGENCY</p>
            </div>
            <div className="time">
              <p className="appointtime">11:30</p>
            </div>
          </div>
          <div className="patients">
            <div className="name">
              <p className="patientname">Timothy Obi</p>
            </div>
            <div className="type">
              <p className="consult">CONSULTATION</p>
            </div>
            <div className="time">
              <p className="appointtime">13:00</p>
            </div>
          </div>
          <div className="patients">
            <div className="name">
              <p className="patientname">Funke Akinsanya</p>
            </div>
            <div className="type">
              <p className="firstvisit">FIRST VISIT</p>
            </div>
            <div className="time">
              <p className="appointtime">14:00</p>
            </div>
          </div>
          <div className="patients">
            <div className="name">
              <p className="patientname">Haruna Bello</p>
            </div>
            <div className="type">
              <p className="emergency">EMERGENCY</p>
            </div>
            <div className="time">
              <p className="appointtime">15:00</p>
            </div>
          </div>
        </div>
      </div>
      <div id="rightdiv">
        <div id="myprofile">
          <h3>Profile</h3>
        </div>
        <div id="profilename">
          <img id="drlogo" src={usercircle} alt="" />
          <h5>Dr. Emeka Chike</h5>
          <h5>General Practitoner</h5>
        </div>
        <hr />
        <div id="profilebody">
          <div id="alerts">
            <h3>Alerts</h3>
          </div>
          <hr />
          <div className="alertlist">
            <div className="alertinfo">
              <div className="alertinfoleft">
                <p id="newappoint">New Appointment</p>
                <p>Samuel Olamide</p>
              </div>
              <div className="alertinforight">
                <p>30 minutes ago</p>
              </div>
            </div>
            <hr />
            <div className="alertinfo">
              <div className="alertinfoleft">
                <p id="cancelappoint">Appointment Cancelled</p>
                <p>Ireti Kingibe</p>
              </div>
              <div className="alertinforight">
                <p>1 hour ago</p>
              </div>
            </div>
            <hr />
            <div className="alertinfo">
              <div className="alertinfoleft">
                <p id="reschappoint">Appointment Rescheduled</p>
                <p>Solomon Ditep</p>
              </div>
              <div className="alertinforight">
                <p>2 hours ago</p>
              </div>
            </div>
            <hr />
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

export default DoctorDashboard;
