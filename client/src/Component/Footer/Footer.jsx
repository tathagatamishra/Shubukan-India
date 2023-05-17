import React from "react";
import "./Footer.scss";

export default function Footer() {
  function news(event) {
    event.preventDefault()
  }

  return (
    <div className="Footer">
      <section className="footLeft">
        <div className="newsLetter">
          <h1>Subscribe to our newsletter</h1>

          <form action="">
            <input type="email" />
            <button onClick={news}>&#10230;</button>
          </form>

          <div></div>
        </div>

        <div className="contactUs">
          <div></div>
          <h1>Connect with us</h1>
        </div>
      </section>

      <section className="footRight">
        <div></div>
      </section>
    </div>
  );
}
