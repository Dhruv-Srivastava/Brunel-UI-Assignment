import styles from "./RegisterTitle.module.css"

export default function RegisterTitle(){
    return (
        <div className={styles.wrapper}>
            <p className={styles.paragraph}>Registration Form</p>
            <h1 className={styles.main_heading}>Start your success Journey here!</h1>
        </div>
    )
}