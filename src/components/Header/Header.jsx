import styles from "./Header.module.css";
import HeaderSlider from "./HeaderSlider/HeaderSlider";
import HeaderStats from "./HeaderStats/HeaderStats";
import HeaderTitle from "./HeaderTitle/HeaderTitle";
import Button from "../Button/Button";

import ArrowLeft from "../../assets/svg/arrow.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <HeaderTitle />
      <div className={styles.container}>
        <HeaderStats />
        <div className={styles.slider_cta_container}>
          <HeaderSlider />
          <Button variant="primary">
            Explore more
            <img src={ArrowLeft} alt="Arrow to Right" />
          </Button>
        </div>
      </div>
      {/* <HeaderStats />
            <HeaderSlider /> */}
    </header>
  );
}
