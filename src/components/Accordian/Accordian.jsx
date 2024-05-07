import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import styles from "./Accordian.module.css"

export default function Accordian({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className={styles.according_container}>
      <div className={styles.ques_container}>
        <h5 style={{marginBottom:showAnswer?"2.4rem":""}}>{question}</h5>
        <div onClick={() => setShowAnswer(!showAnswer)} className={styles.toggle}>
          {showAnswer ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      {showAnswer && <p>{answer}</p>}
    </div>
  );
}
