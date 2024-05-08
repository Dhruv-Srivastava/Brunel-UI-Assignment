import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Accordian.module.css";

export default function Accordian({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <motion.div>
      <div className={styles.according_container}>
        <AnimatePresence initial={false}>
          <div className={styles.ques_container}>
            <h5 style={{ marginBottom: showAnswer ? "2.4rem" : "" }}>
              {question}
            </h5>
            <div
              onClick={() => setShowAnswer(!showAnswer)}
              className={styles.toggle}
            >
              {showAnswer ? <FaMinus /> : <FaPlus />}
            </div>
          </div>
        </AnimatePresence>
        <AnimatePresence initial={false} mode="wait">
          {showAnswer && (
            <motion.div
              key="answer"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <p>{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
