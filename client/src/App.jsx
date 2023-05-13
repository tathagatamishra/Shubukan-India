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
          <p>
            HOME <p></p>
          </p>
          <p>
            ORGANIZATION <p></p>
          </p>
          <p>
            CALENDAR <p></p>
          </p>
          <p>
            MEMBER <p></p>
          </p>
          <p>
            SERVICE <p></p>
          </p>
          <p>
            BLOG <p></p>
          </p>
          <p>
            CONTACT <p></p>
          </p>
          <p>
            DOWNLOAD <p></p>
          </p>
        </div>
      </div>
      <div className="webBody">
        <div className="hero">
          <h1>
            <h1>Efficiency Is Claver Laziness</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod
            facere, repellendus, perferendis sed qui aspernatur rem nostrum
            officiis provident culpa enim, minus porro deserunt! Eligendi
            reiciendis consequatur iure excepturi.
          </h1>
          <h1></h1>
        </div>
        <div className="content">
          
        </div>
      </div>
    </div>
  );
}

export default App;
