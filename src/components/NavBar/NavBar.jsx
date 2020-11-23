import React, { useState } from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

function Navigation(props) {
  const [menuStatus, setMenuStatus] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = (e) => {
    if (menuStatus === false && showMenu === false) {
      setMenuStatus(true);
      setShowMenu(true);
    } else {
      setMenuStatus(false);
      setShowMenu(false);
    }
  };

  return (
    <header>
      <div className="header">
        <Link to="/" class="R+S">
          {/* <h1 className="logo">Hello</h1> */}
          <a href="/">
                <img src="https://i.imgur.com/EbvdZgs.png" 
                alt="" className="logo"></img>
            </a> 
        </Link>
        <ul className="nav">
        <Link to="/" id="home" className="nav">
            <li className="nav-items" id="nav-zero" onClick={handleMenuToggle}>
              Home
            </li>
          </Link>
          <Link to="/aboutMe" id="aboutMe" className="nav">
            <li className="nav-items" id="nav-one" onClick={handleMenuToggle}>
              About Me
            </li>
          </Link>

          <Link to="/resume" id="resume" className="nav">
            <li className="nav-items" id="nav-three" onClick={handleMenuToggle}>
              Resume
            </li>
          </Link>
        </ul>

        <div
          className={`hamburger-btn ${menuStatus ? "open" : ""}`}
          onClick={handleMenuToggle}>
          <div className="hamburger-patty"></div>
        </div>
      </div>

      <div className={`dropdown-menu ${showMenu ? "show" : ""}`}>
        <Link to="/" id="home" className="header-item">
          <h1 className="nav-link" id="nav-one" onClick={handleMenuToggle}>
            Home
          </h1>
        </Link>
        <Link to="/aboutMe" id="aboutMe" className="header-item">
          <h1 className="nav-link" id="nav-one" onClick={handleMenuToggle}>
            About Me
          </h1>
        </Link>

        <Link to="/resume" id="resume" className="header-item">
          <h1 className="nav-link" id="nav-two" onClick={handleMenuToggle}>
            Resume
          </h1>
        </Link>

      </div>
    </header>
  );
}

export default Navigation;