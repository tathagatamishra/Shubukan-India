import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

export default function Navbar(props) {
  const [isBurger, setIsBurger] = useState(true);
  const [burgerStyle, setBurgerStyle] = useState({height: "1rem", width: "4rem", transition: 'all .3s ease-in-out'});

  const [position, setPosition] = useState({ top: "0rem" });
  const [lastScrollTop, setLastScrollTop] = useState(Infinity);

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

  const option = (
    <nav className="options">
      <NavLink to="/" className="menuDiv">
        <p>HOME</p>
        <div></div>
      </NavLink>

      {/* <NavLink to="/" className="menuDiv">
    <p>ORGANIZATION</p>
    <div></div>
  </NavLink> */}

      <NavLink to="/kata" className="menuDiv">
        <p>KATA</p>
        <div></div>
      </NavLink>

      {/* <NavLink to="/" className="menuDiv">
    <p>MEMBER</p>
    <div></div>
  </NavLink> */}

      {/* <NavLink to="/" className="menuDiv">
    <p>SERVICE</p>
    <div></div>
  </NavLink> */}

      <NavLink to="/blog" className="menuDiv">
        <p>BLOG</p>
        <div></div>
      </NavLink>

      <NavLink to="/" className="menuDiv">
        <p>CONTACT</p>
        <div></div>
      </NavLink>
    </nav>
  );
  const burger = (
    <nav
      className="burger"
      onClick={() => setBurgerStyle({ height: "96vh", width: "6rem", transition: 'all .3s ease-in-out' })}
      style={burgerStyle}
    >
      <div className="burgerLine">
        <div className="x"></div>
        <div className="y"></div>
      </div>
      <div className="lineMargin"></div>
    </nav>
  );

  return (
    <div id="Navbar" style={position}>
      <section className="logo">
        {/* <Spline scene="https://prod.spline.design/IRCi38KJr6aI3aIN/scene.splinecode" /> */}
        <img className="logo1" src="shubukan.png" />
        <img className="logo2" src="logo.png" />
      </section>
      {isBurger ? burger : option}
    </div>
  );
}
