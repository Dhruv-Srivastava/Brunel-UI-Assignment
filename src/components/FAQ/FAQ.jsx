import styles from "./FAQ.module.css"
import FAQS from "./FAQS/FAQS"
import FAQTitle from "./FAQTitle/FAQTitle"

export default function FAQ(){
    return (
        <section className={styles.faq_section}>
            <FAQTitle />
            <FAQS />
        </section>
    )
}