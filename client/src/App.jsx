import { useEffect, useState } from "react";
import "./App.scss";
import gsap from "gsap";
import Navbar from "./Component/Navbar/Navbar";

import Home from "./Component/Home/Home";
import Footer from "./Component/Footer/Footer";

function App() {
  document.addEventListener("mousemove", (ev) => {
    const x = ev.clientX,
      y = ev.clientY;

    // lag cursor behind mouse
    gsap.to("#cursor", {
      duration: 0.2,
      x,
      y,
    });
  });

  return (
    <div className="App">
      <div id="cursor"></div>
      <div className="tree">
        <img src="tree.png" alt="" />
      </div>
      <div className="line">
        <img src="bushido.png" alt="" />
      </div>

      <Navbar />

      <div className="webBody">
        <Home />
      </div>
        <Footer />
    </div>
  );
}

export default App;
