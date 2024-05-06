import RocketImage from "../../../../assets/svg/rocket.svg"
import styles from "./HeaderDaysStat.module.css"

export default function HeaderDaysStat({numDays,text}){
    return (
        <div className={styles.container}>
            <img src={RocketImage} alt="Image of a green rocket" />
            <div>
                <h5>{numDays} DAYS</h5>
                <p>{text}</p>
            </div>
        </div>
    )
}