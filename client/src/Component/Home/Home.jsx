import React from "react";
import "./Home.scss";

export default function Home() {
  return (
    <div className="Home">
      <section className="hero">
        <h1>SHORIN RYU</h1>
        <p>
          <i>&nbsp;</i> Beneath the instinct to fight
        </p>
        <p>
          there is a diviner instinct to love <i>&nbsp;</i>
        </p>
      </section>

      <section className="intro">
        <div className="define">
          <h1>The Way</h1>
          <div>
            <p>Discipline</p>
            <div></div>
            <p>Respect</p>
            <div></div>
            <p>Technique</p>
          </div>
        </div>
        <div className="description">
          <h1>SHORIN RYU SHUBUKAN</h1>
          <p>
            Today, karate is a martial art known and respected worldwide as an
            effective combative art. Its birthplace, the small islands of
            Okinawa in Japan, was once known as Ryukyu, an independent kingdom.
            Shorin Ryu is one of Okinawa's three main streams of Karate (Goju
            Ryu, Uechi Ryu, Shorin Ryu). In 1933, Master Choshin Chibana named
            Shorin Ryu. In 1948, they organized Okinawa Shorin Ryu Karate-do
            Association. They took over the Shuri-te stream. There is a Dojo not
            only in Okinawa but also overseas. Shorin Ryu Shubukan was founded
            by Sensei Joki Uema.
          </p>
          <div></div>
        </div>
      </section>

      <section className="gallery">
        <h1 className="galleryTop">Gallery</h1>
        <div>
          <div className="image">
            <img src="chibana.jpg" alt="image" />
          </div>
          <div className="image">
            <img src="mag.jpg" alt="image" />
          </div>
          <div className="image">
            <img src="uema.jpg" alt="image" />
          </div>
          <div className="image">
            <img src="yasuhiro.jpg" alt="image" />
          </div>
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1460411794035-42aac080490a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFic3RyYWN0JTIwJTIwc2t5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="image"
            />
          </div>
          <div className="image">
            <img src="mag2.jpg" alt="image" />
          </div>
          <div className="image">
            <img src="takeshi.jpg" alt="image" />
          </div>
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWJzdHJhY3QlMjAlMjBza3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="image"
            />
          </div>
          <div className="image">
            <img src="sensei.jpg" alt="image" />
          </div>
        </div>
      </section>

      <section className="blog">
        <div className="blogLine"></div>
        <h1>Never Fade Away</h1>
        <p>
          Karate as a martial art is about self-defense. Overcoming your own
          weaknesses, never bending in any circumstance, it is about developing
          an unshakable spirit. In karate what is important is to cultivate the
          strength to concentrate your spirit on one thing with heart and soul.
        </p>
        <h1>Blog</h1>
        <div className="row1">Coming soon ...</div>
        <div className="row2"></div>
        <p>
          Empty-handed and carrying no weapon, dominating an adversary with body
          and soul only, karate, a martial art of self-defense. To master the
          way, a long and arduous journey awaits.
        </p>
      </section>
    </div>
  );
}
