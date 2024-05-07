import styles from "./Footer.module.css"

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <p><span>&copy;</span>Talup {(new Date).getFullYear()}. All rights reserved</p>
            <div className="terms_privacy_container">
                <a>Terms & Conditions</a>
                <a>Privacy Policy</a>
            </div>
        </footer>
    )
}