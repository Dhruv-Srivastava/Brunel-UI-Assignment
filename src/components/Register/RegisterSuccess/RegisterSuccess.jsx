import { useEffect, useState } from "react";
import SuccessLogo from "../../../assets/svg/success.svg";
import styles from "./RegisterSuccess.module.css";
import { useNavigate } from "react-router";

export default function RegisterSuccess() {
    const [timer, setTimer] = useState(5);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (timer > 0) {
        const interval = setInterval(() => {
          setTimer((prevCount) => prevCount - 1);
        }, 1000);
  
        return () => clearInterval(interval);
      }
      else if (timer === 0) {
        navigate("/");
      }
    }, [timer,navigate]);
  
  return (
    <section className={styles.success_info_container}>
      <header >
        <img src={SuccessLogo} alt="Green Checkmark Logo" />
        <h3>Success Submitted</h3>
        <h1>Congratulations</h1>
        <p>
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </p>
      </header>
      <p className={styles.redirection}>Redirecting you to Homepage in <span>{timer} Second{timer===1?"":"s"}</span></p>
    </section>
  );
}
