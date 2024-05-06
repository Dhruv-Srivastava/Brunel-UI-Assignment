import styles from "./Button.module.css";

export default function Button({ variant, children }) {
  const btnStyles = variant === "primary" ? styles.primary : styles.secondary;
  return <button className={btnStyles}>{children}</button>;
}
