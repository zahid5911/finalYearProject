import React from "react";
import { Link } from "react-router-dom";
import "./styles/NavBar.css";
import  logo from "../logo2.png"
const NavBar = () => {
    const toggleResponsiveNav = () => {
        const navLinks = document.getElementById("nav-links");
        navLinks.classList.toggle("nav-links");
       
        
      };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="logo">
          <img src={logo} alt="My logo will come here" />
          </div>
          <ul className="nav-links" id="nav-links">
            <li>
              <Link to="/FindJobs">Find Jobs</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
            <li>
              <Link to="/AboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/Setting">Setting</Link>
            </li>
          </ul>

          <div className="navbuttons">
            <button className="login">
              <li>
                <Link to="/Login">Login</Link>
              </li>
            </button>
            <button className="signup">
              <li>
                <Link to="/Signup">Signup</Link>
              </li>
            </button>
          </div>

          <button className="icon" id="humburger" onClick={toggleResponsiveNav}>
          <i class="fa-solid fa-bars"></i>
</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
