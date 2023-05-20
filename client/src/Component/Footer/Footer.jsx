import React from "react";
import "./Footer.scss";

export default function Footer() {
  function news(event) {
    event.preventDefault();
  }

  return (
    <div className="Footer">
      <div className="upperFoot">
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
        <div className="midLine"></div>
        <section className="footRight">
          <div></div>
        </section>
      </div>
      <div className="lowerFoot">
        <div className="logoImg">
          <img src="shubukanIndia.png" alt="" />
        </div>
        <div className="logoImg">
          <img src="Shorin-ryu.png" alt="" />
        </div>
        <div className="logoImg">
          <img src="wbk.png" alt="" />
        </div>
      </div>
      <div className="footLine"></div>
      <div className="footExtra">
        <p>© 2023 Shubokan India</p>
        <p>Terms & Conditions</p>
      </div>
    </div>
  );
}
