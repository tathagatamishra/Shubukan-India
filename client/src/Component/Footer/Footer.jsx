import React from "react";
import "./Footer.scss";
import Spline from "@splinetool/react-spline";

export default function Footer() {
  return (
    <div className="Footer">
      <section className="footLeft">
        <div className="newsLetter">
          <h1>Subscribe to our newsletter</h1>
          <form action="">
            <input type="email" />
            <button>SUBMIT</button>
          </form>
        </div>
        <div className="contactUs">
          <h1>Connect with us</h1>
          <button>OK</button>
        </div>
      </section>
      <section className="footRight">
        <section className="foot-Right-Top"></section>
        <section className=""></section>
      </section>
    </div>
  );
}
