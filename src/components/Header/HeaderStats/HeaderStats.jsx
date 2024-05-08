import HeroImage from "../../../assets/svg/hero.svg";
import HeaderDaysStat from "./HeaderDaysStat/HeaderDaysStat.jsx";
import HeaderMoneyStat from "./HeaderMoneyStat/HeaderMoneyStat.jsx";
import HeaderPercentageStat from "./HeaderPercentageStat/HeaderPercentageStat.jsx";

import styles from "./HeaderStats.module.css";

export default function HeaderStats() {
  return (
    <div className={styles.container}>
      <img
        src={HeroImage}
        alt="Image of girl wearing green hoodiee"
        className={styles.stats_img}
      />

      <HeaderDaysStat numDays={10} text={"Staff Deployment"} />

      <HeaderPercentageStat
        percentage={40}
        text={
          "Achieved reduction in project execution time by optimising team availability"
        }
      />

      <HeaderMoneyStat
        amount={0.5}
        suffix={"MILLION"}
        text={"Reduced client expenses by saving on hiring and employee costs."}
      />
    </div>
  );
}
