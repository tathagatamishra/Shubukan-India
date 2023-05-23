import React, { useState } from "react";
import "./Blog.scss";
import { IonIcon } from "@ionic/react";
import { searchOutline } from "ionicons/icons";

export default function Blog() {
  const [position, setPosition] = useState({ height: "10rem" });
  const [searchPos, setSearchPos] = useState({ marginBottom: "0" });
  const [lastScrollTop, setLastScrollTop] = useState(Infinity);

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      setPosition({ height: "8rem", boxShadow: "inset 0px 230px 30px -150px rgb(236, 231, 226)" });
      setSearchPos({ marginBottom: "5rem" })
    } else {
      setPosition({ height: "10rem" });
      setSearchPos({ marginBottom: "0" })
    }

    setLastScrollTop(scrollTop);
  });

  return (
    <div className="Blog">
      <div id="searchBar" style={position}>
        <div className="search" style={searchPos}>
          <input type="text" />
          <button>
            <IonIcon icon={searchOutline} />
          </button>
        </div>
      </div>

      <div className="blogPage">
        <section className="blogHero">
          <h1>Harmony of Hikari</h1>
          <p>Discovering the Way of Words</p>
        </section>

        <section className="blogContent">
          <div></div>
        </section>
      </div>
    </div>
  );
}
