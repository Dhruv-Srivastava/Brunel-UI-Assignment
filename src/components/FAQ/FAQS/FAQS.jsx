import { Fragment } from "react";
import { faqData } from "../../../data/faq.js";
import styles from "./FAQS.module.css";
import Accordian from "../../Accordian/Accordian.jsx";

export default function FAQS() {
  return (
    <div className={styles.faq_ques_container}>
      {faqData.map((faq, i) => {
        return (
          <Fragment key={faq.id}>
            <Accordian question={faq.question} answer={faq.answer} />
            {i !== faqData.length - 1 && (
              <hr className={styles.line_separater} />
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
