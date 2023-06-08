import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

export default function Navbar() {

  const [position, setPosition] = useState({ top: "0rem" });
  const [lastScrollTop, setLastScrollTop] = useState(Infinity);

  const [isMenu, setIsMenu] = useState(false);

  // This Variable will store the top position

  window.addEventListener("scroll", function () {
    //on every scroll this function will be called

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //This line will get the location on scroll

    if (scrollTop > lastScrollTop) {
      //if it will be greater than the previous
      setPosition({ top: "-10rem" });
      //set the value to the negative of height of navbar
    } else {
      setPosition({ top: "0rem" });
    }

    setLastScrollTop(scrollTop); //New Position Stored
  });

  function showMenu() {
    if (isMenu == true) setIsMenu(false);
    else if (isMenu == false) setIsMenu(true);
  }

  return (
    <div id="Navbar" style={position}>
      <section className="logo">
        {/* <Spline scene="https://prod.spline.design/IRCi38KJr6aI3aIN/scene.splinecode" /> */}
        <img className="logo1" src="shubukan.png" />
        <img className="logo2" src="logo.png" />
      </section>

      <section className="menu">
        <div className="menuStart" onClick={showMenu}>
          <div className="lines"></div>
          <div className="lines"></div>
        </div>
        {isMenu && (
          <>
            <div className="menuBG"></div>
            <div className="menuBox">
              {/* <img src="oldpaper.png" alt="" /> */}
              <nav className="nav">
                <NavLink to="/" className="opt">
                  <p>HOME</p>
                </NavLink>

                <NavLink to="/blog" className="opt">
                  <p>BLOG</p>
                </NavLink>

                <NavLink to="/kata" className="opt">
                  <p>KATA</p>
                </NavLink>

                <NavLink to="/" className="opt">
                  <p>ORGANIZATION</p>
                </NavLink>

                <NavLink to="/" className="opt">
                  <p>MEMBER</p>
                </NavLink>

                <NavLink to="/" className="opt">
                  <p>SERVICE</p>
                </NavLink>

                <NavLink to="/" className="opt">
                  <p>CONTACT</p>
                </NavLink>
              </nav>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
