import { useEffect, useState } from "react";
import "./App.scss";
import gsap from "gsap";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/footer";
import Home from "./Component/Home/Home";

function App() {
  document.addEventListener("mousemove", (ev) => {
    const x = ev.clientX,
      y = ev.clientY;

    // lag cursor behind mouse
    gsap.to("#cursor-follow", {
      duration: 0.2,
      x,
      y,
    });
  });

  return (
    <div className="App">
      <div id="cursor-follow"></div>
      <Navbar />
      <div className="webBody">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
