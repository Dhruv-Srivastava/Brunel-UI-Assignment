import RegisterTitle from "./RegisterTitle/RegisterTitle";
import RegisterForm from "./RegisterForm/RegisterForm";
import RegisterSuccess from "./RegisterSuccess/RegisterSuccess";
import styles from "./Register.module.css";

export default function Register({ success, setSuccess }) {
  return (
    <main className={styles.register_container}>
      {success ? (
        <>
          <RegisterSuccess />
        </>
      ) : (
        <>
          <RegisterTitle />
          <RegisterForm setSuccess={setSuccess} />
        </>
      )}
    </main>
  );
}
