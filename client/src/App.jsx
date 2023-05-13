import { useEffect } from "react";
import "./App.scss";
import Spline from "@splinetool/react-spline";

function App() {
  // useEffect(() => {
  //   const canvas = document.querySelector("#canvas3d");

  //   const app = new Application(canvas);

  //   app.load("https://prod.spline.design/Rj7Gnb9FoqvWt6Nq/scene.splinecode");
  // }, []);

  return (
    <div className="App">
      <div className="navbar">
        <div className="logo">
          <Spline scene="https://prod.spline.design/Rj7Gnb9FoqvWt6Nq/scene.splinecode" />
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
            Today, karate is a martial art known and respected worldwide as an
            effective combative art. Its birthplace, the small islands of
            Okinawa in Japan, was once known as Ryukyu, an independent kingdom.
            Shorin Ryu is one of Okinawa’s three main streams of Karate (Goju
            Ryu, Uechi Ryu, Shorin Ryu). In 1933, Master Choshin Chibana named
            Shorin Ryu. In 1948, they organized Okinawa Shorin Ryu Karate-do
            Association. They took over the Shuri-te stream. There is a Dojo not
            only in Okinawa but also overseas. Shorin Ryu Shubukan was founded
            by Sensei Joki Uema.
          </h1>
          <h1></h1>
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
}

export default App;
