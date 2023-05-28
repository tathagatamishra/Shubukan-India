import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

export default function Navbar(props) {
  const [isBurger, setIsBurger] = useState(true);
  const [isOption, setIsOption] = useState(false);
  const [burgerStyle, setBurgerStyle] = useState({
    height: "1rem",
    transition: "all .3s ease-in-out",
  });
  const [empty, setEmpty] = useState({ height: "0rem", display: "none" });
  const [xRotate, setXRotate] = useState({});
  const [yRotate, setYRotate] = useState({});
  const [zGradient, setZGradient] = useState({
    background: "linear-gradient(to left, #A64B37 20%, transparent 100%)",
  });

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

  function setStyle() {
    setIsOption(true);
    setBurgerStyle({
      height: "20rem",
      width: "8rem",
      transition: "all .3s ease-in-out",
      background: "linear-gradient(to top, #D2D9D3, transparent)",
    });
    setEmpty({ height: "3rem" });
    setXRotate({
      transform: "rotate(15deg)",
      background: "radial-gradient(circle, #d1a59b 20%, transparent 100%)",
    });
    setYRotate({
      transform: "rotate(-15deg)",
      background: "radial-gradient(circle, #d1a59b 20%, transparent 100%)",
    });
  }
  function removeStyle() {
    setIsOption(false);
    setBurgerStyle({
      height: "1rem",
      transition: "all .3s ease-in-out",
    });
    setEmpty({ height: "0rem", display: "none" });
    setXRotate({});
    setYRotate({});
  }
  function lineStyle() {
    setZGradient({
      background: "radial-gradient(circle, #A64B37 20%, transparent 100%)",
    });
    if (!isOption) {
      setXRotate({background: "radial-gradient(circle, #d1a59b 20%, transparent 100%)"});
      setYRotate({background: "radial-gradient(circle, #d1a59b 20%, transparent 100%)"});
    }
  }
  function notLineStyle() {
    if (!isOption) {
      setZGradient({
        background: "linear-gradient(to left, #A64B37 20%, transparent 100%)",
      });
      setXRotate({background: "linear-gradient(to left, #d1a59b 20%, transparent 100%)"});
      setYRotate({background: "linear-gradient(to left, #d1a59b 20%, transparent 100%)"});
    }
  }

  const burger = (
    <>
      <nav
        className="burger"
        style={burgerStyle}
        onMouseOver={lineStyle}
        onMouseOut={notLineStyle}
      >
        <div className="empty" style={empty} onClick={removeStyle}></div>
        <div className="burgerLine" onClick={setStyle}>
          <div className="x" style={xRotate}></div>
          <div className="y" style={yRotate}></div>
          {isOption && (
            <nav className="optionsMobo">
              <NavLink to="/" className="menuDivMobo">
                <p>HOME</p>
              </NavLink>

              <NavLink to="/" className="menuDivMobo">
                <p>ORGANIZATION</p>
              </NavLink>

              <NavLink to="/kata" className="menuDivMobo">
                <p>KATA</p>
              </NavLink>

              <NavLink to="/" className="menuDivMobo">
                <p>MEMBER</p>
              </NavLink>

              <NavLink to="/" className="menuDivMobo">
                <p>SERVICE</p>
              </NavLink>

              <NavLink to="/blog" className="menuDivMobo">
                <p>BLOG</p>
              </NavLink>

              <NavLink to="/" className="menuDivMobo">
                <p>CONTACT</p>
              </NavLink>
            </nav>
          )}
          <div className="z" style={zGradient}></div>
        </div>
      </nav>
    </>
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
