import styles from "./Button.module.css";

export default function Button({ variant, children, isDisabled }) {
  const btnStyles = variant === "primary" ? styles.primary : styles.secondary;
  console.log(isDisabled)
  return <button className={btnStyles} disabled={isDisabled}>{children}</button>;
}
