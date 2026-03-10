import React, { useState } from "react";
import "./navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import logo from "../../Assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  const navigate = useNavigate();

  // Function to toggle navBar
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  // Function to remove navBar
  const removeNav = () => {
    setActive("navBar");
  };

  // Handle navigation and close menu
  const handleNavigation = (path) => {
    navigate(path);
    removeNav();
  };

  return (
    <section className="navbarSection">
      <header className="header flex">
        <div className="logoDiv">
          <NavLink to="/" className="logo flex" onClick={removeNav}>
            <img src={logo} alt="HOGONA" style={{ height: "70px" }} />
          </NavLink>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "navLink active" : "navLink"}
                onClick={removeNav}
              >
                Home
              </NavLink>
            </li>

            

            <li className="navItem">
              <NavLink 
                to="/Offers" 
                className={({ isActive }) => isActive ? "navLink active" : "navLink"}
                onClick={removeNav}
              >
                Offers
              </NavLink>
            </li>
              <li className="navItem">
              <NavLink 
                to="/packages" 
                className={({ isActive }) => isActive ? "navLink active" : "navLink"}
                onClick={removeNav}
              >
                Packages
              </NavLink>
            </li>
           

            <li className="navItem">
              <NavLink 
                to="/hotels" 
                className={({ isActive }) => isActive ? "navLink active" : "navLink"}
                onClick={removeNav}
              >
                Hotels
              </NavLink>
            </li>

            <li className="navItem">
              <NavLink 
                to="/Book" 
                className={({ isActive }) => isActive ? "navLink active" : "navLink"}
                onClick={removeNav}
              >
                Book
              </NavLink>
            </li>

            <li className="navItem">
              <NavLink 
                to="/contact" 
                className={({ isActive }) => isActive ? "navLink active" : "navLink"}
                onClick={removeNav}
              >
                Contact
              </NavLink>
            </li>
             <li className="navItem">
              <NavLink 
                to="/About" 
                className={({ isActive }) => isActive ? "navLink active" : "navLink"}
                onClick={removeNav}
              >
                About
              </NavLink>
            </li>

            <div className="navbar-auth">
              <button 
                className="btn auth-btn"
                onClick={() => handleNavigation("/signin")}
              >
                Sign In
              </button>
            </div>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;