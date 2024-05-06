import styles from "./HeaderMoneyStat.module.css"

export default function HeaderMoneyStat({amount, suffix, text}){
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>${amount} <span>{suffix}</span></h2>
            <p className={styles.description}>{text}</p>
        </div>
    )
}