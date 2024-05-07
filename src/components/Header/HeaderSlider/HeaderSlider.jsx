import { useState } from "react";
import { carouselData } from "../../../data/carousel.js";

import styles from "./HeaderSlider.module.css";

export default function HeaderSlider() {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.carousel_container}>
      <h2>{carouselData[active].text}</h2>
      <ul>
        {carouselData.map((_, i) => {
          return (
            <li
              key={_.id}
              id={`${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
              style={{backgroundColor:i===active?"#2da950":"#e4e3e3"}}
            ></li>
          );
        })}
      </ul>
    </div>
  );
}
