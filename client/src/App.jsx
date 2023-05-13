import { useEffect } from "react";
import "./App.scss";
import { Application } from "@splinetool/runtime";

function App() {
  useEffect(() => {
    const canvas = document.querySelector("#canvas3d");

    const app = new Application(canvas);

    app.load("https://prod.spline.design/Rj7Gnb9FoqvWt6Nq/scene.splinecode");
  }, []);

  return (
    <div className="App">
      <div className="navbar">
        <div className="logo">
        <canvas id="canvas3d"></canvas>
        <img src="logo.png" alt="" />
        </div>
        <div className="options">
          <p>HOME</p>
          <p>ORGANIZATION</p>
          <p>CALENDAR</p>
          <p>MEMBER</p>
          <p>SERVICE</p>
          <p>BLOG</p>
          <p>CONTACT</p>
          <p>DOWNLOAD</p>
        </div>
      </div>
      <div className="webBody">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod
          facere, repellendus, perferendis sed qui aspernatur rem nostrum
          officiis provident culpa enim, minus porro deserunt! Eligendi
          reiciendis consequatur iure excepturi.
        </h1>
      </div>
    </div>
  );
}

export default App;
