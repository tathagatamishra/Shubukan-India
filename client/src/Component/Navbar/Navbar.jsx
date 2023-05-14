import React from "react";
import Spline from "@splinetool/react-spline";
import "./Navbar.scss"

export default function Navbar() {
  // const [size, setSize] = useState(null);

  // const Component1 = <Spline scene="https://prod.spline.design/IRCi38KJr6aI3aIN/scene.splinecode" />;

  // const Component2 = <Spline scene="https://prod.spline.design/Rj7Gnb9FoqvWt6Nq/scene.splinecode" />;

  // const setLogo = (html) => {
  //   const logo = document.querySelector("logo");
  //   logo.innerHTML = html;
  // };

  // const mql = window.matchMedia("(max-width: 600px)");

  // useEffect(() => {
  //   mql.addEventListener("change", (e) => {
  //     const mobileView = e.matches;

  //     if (mobileView) {
  //       setSize(Component1);
  //     } else {
  //       setSize(Component2);
  //     }
  //   });
  //   console.log(size);
  // }, [size]);

  return (
    <div className="Navbar">
      <section className="logo">
        <Spline scene="https://prod.spline.design/IRCi38KJr6aI3aIN/scene.splinecode" />
        <img src="logo.png" />
      </section>
      <section className="options">
        <div className="menuDiv">
          <p>HOME</p>
          <div></div>
        </div>
        <div className="menuDiv">
          <p>ORGANIZATION</p>
          <div></div>
        </div>
        <div className="menuDiv">
          <p>CALENDAR</p>
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
        <div className="menuDiv">
          <p>DOWNLOAD</p>
          <div></div>
        </div>
      </section>
    </div>
  );
}
