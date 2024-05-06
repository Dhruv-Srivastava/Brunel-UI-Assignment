import SparkleImage from "../../../../assets/svg/stars.svg"
import styles from "./HeaderPercentageStat.module.css"

export default function HeaderPercentageStat({percentage,text}){
    return (
        <div className={styles.container}>
            <h3 className={styles.percentage}>{percentage}%</h3>
            <img src={SparkleImage} alt="Sparkles" />
            <p className={styles.description}>{text}</p>
        </div>
    )
}