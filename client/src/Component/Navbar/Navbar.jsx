import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import "./Navbar.scss";

export default function Navbar() {
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

  return (
    <div id="Navbar" style={position}>
      <section className="logo">
      {/* <Spline scene="https://prod.spline.design/IRCi38KJr6aI3aIN/scene.splinecode" /> */}
        <img className="logo1" src="shubukan.png" />
        <img className="logo2" src="logo.png" />
      </section>
      <nav className="options">
        <div className="menuDiv">
          <p>HOME</p>
          <div></div>
        </div>
        <div className="menuDiv">
          <p>ORGANIZATION</p>
          <div></div>
        </div>
        <div className="menuDiv">
          <p>KATA</p>
          <div></div>
        </div>
        <div className="menuDiv">
          <p>MEMBER</p>
          <div></div>
        </div>
        <div className="menuDiv">
          <p>SERVICE</p>
          <div></div>
        </div>
        <div className="menuDiv">
          <p>BLOG</p>
          <div></div>
        </div>
        <div className="menuDiv">
          <p>CONTACT</p>
          <div></div>
        </div>
      </nav>
    </div>
  );
}
