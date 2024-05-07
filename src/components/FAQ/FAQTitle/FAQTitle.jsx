import AnchorLogo from "../../../assets/svg/union.svg"
import styles from "./FAQTitle.module.css"

export default function FAQTitle(){
    return (
        <div className={styles.title_container}>
            <p>What’s on your mind</p>
            <h2>Ask Questions</h2>
            <img src={AnchorLogo} alt="" />
        </div>
    )
}