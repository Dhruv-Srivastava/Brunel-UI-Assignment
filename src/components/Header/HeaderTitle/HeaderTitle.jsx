import styles from "./HeaderTitle.module.css"

export default function HeaderTitle(){
    return (
        <div className={styles.wrapper}>
            <p className={styles.paragraph}>Success stories</p>
            <h1 className={styles.main_heading}>Every success journey we’ve encountered.</h1>
        </div>
    )
}