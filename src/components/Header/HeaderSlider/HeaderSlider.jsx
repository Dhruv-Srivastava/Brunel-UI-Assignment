import { useState } from "react";
import { carouselData } from "../../../data/carousel.js";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./HeaderSlider.module.css";

export default function HeaderSlider() {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.carousel_container}>
      <h2 className={styles.carousel_text}>
        <AnimatePresence initial={false} mode="wait">
          <motion.span
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5}}
          >
            {carouselData[active].text}
          </motion.span>
        </AnimatePresence>
      </h2>
      <ul>
        {carouselData.map((_, i) => {
          return (
            <li
              key={_.id}
              id={`${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
              style={{ backgroundColor: i === active ? "#2da950" : "" }}
            ></li>
          );
        })}
      </ul>
    </div>
  );
}
