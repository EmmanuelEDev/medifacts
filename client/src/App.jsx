import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import DoctorLogin from "./pages/login/DoctorLogin";
import PatientRegistration from "./pages/registration/PatientRegistration";
import DoctorRegistation from "./pages/registration/DoctorRegistation";
import User from "./pages/user/User";
import DoctorDashboard from "./pages/doctordashboard/DoctorDashboard";
import Patients from "./pages/patients/Patients";
import DoctorSchedule from "./pages/doctorschedule/DoctorSchedule";
import DoctorSettings from "./pages/doctorsettings/DoctorSettings";
import LoggedOut from "./pages/loggedout/LoggedOut";
import Profile from "./pages/profile/Profile";
import Contact from "./pages/contact/Contact";
import Appointment from "./pages/appointment/Appointment";
import AllowDoctor from "./pages/allowdoctor/AllowDoctor";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/doctorlogin" element={<DoctorLogin />} />
          <Route path="/register" element={<PatientRegistration />} />
          <Route path="/doctorregistration" element={<DoctorRegistation />} />
          <Route path="/user" element={<User />} />
          <Route path="/doctordashboard" element={<DoctorDashboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/doctorschedule" element={<DoctorSchedule />} />
          <Route path="/doctorsettings" element={<DoctorSettings />} />
          <Route path="/loggedout" element={<LoggedOut />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/allowdoctor" element={<AllowDoctor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
