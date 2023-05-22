import React, { useEffect, useState } from "react";
import "./Home.scss";

export default function Home() {
  const [slider, setSlider] = useState(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);
  const [item, setItem] = useState(".items1")

  useEffect(() => {
    const sliderElement = document.querySelector(item);
    setSlider(sliderElement);

    const handleMouseDown = (e) => {
      setIsDown(true);
      sliderElement.classList.add("active");
      setStartX(e.pageX - sliderElement.offsetLeft);
      setScrollLeft(sliderElement.scrollLeft);
    };

    const handleMouseLeave = () => {
      setIsDown(false);
      sliderElement.classList.remove("active");
    };

    const handleMouseUp = () => {
      setIsDown(false);
      sliderElement.classList.remove("active");
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - sliderElement.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      sliderElement.scrollLeft = scrollLeft - walk;
    };

    if (sliderElement) {
      sliderElement.addEventListener("mousedown", handleMouseDown);
      sliderElement.addEventListener("mouseleave", handleMouseLeave);
      sliderElement.addEventListener("mouseup", handleMouseUp);
      sliderElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener("mousedown", handleMouseDown);
        sliderElement.removeEventListener("mouseleave", handleMouseLeave);
        sliderElement.removeEventListener("mouseup", handleMouseUp);
        sliderElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [slider, isDown, startX, scrollLeft, item]);

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
        <div className="bird">
          <img src="bird.png" alt="" />
        </div>
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
        <div className="row1">
          <div className="leftBar"></div>
          <div className="items1" onMouseOver={()=>setItem(".items1")}>
            <div className="item1"></div>
            <div className="item1"></div>
            <div className="item1"></div>
            <div className="item1"></div>
            <div className="item1"></div>
          </div>
          <div className="rightBar"></div>
        </div>
        <div className="row2" onMouseOver={()=>setItem(".items2")}>
          <div className="leftBar"></div>
          <div className="items2">
            <div className="item2"></div>
            <div className="item2"></div>
            <div className="item2"></div>
            <div className="item2"></div>
            <div className="item2"></div>
          </div>
          <div className="rightBar"></div>
        </div>
        <p>
          Empty-handed and carrying no weapon, dominating an adversary with body
          and soul only, karate, a martial art of self-defense. To master the
          way, a long and arduous journey awaits.
        </p>
      </section>
    </div>
  );
}
