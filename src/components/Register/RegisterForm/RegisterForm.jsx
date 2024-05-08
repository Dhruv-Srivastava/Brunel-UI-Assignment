import ErrorLogo from "../../../assets/svg/error.svg";
import { useState } from "react";
import Button from "../../Button/Button";
import { motion, AnimatePresence } from "framer-motion";
import { validEmail } from "../../../utils/valid-email";

import styles from "./RegisterForm.module.css";

export default function RegisterForm({ setSuccess }) {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [invalidClass, setInvalidClass] = useState(false);

  function handleChange(e) {
    setInvalidClass(false);
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if(!validEmail(formData.email)){
      setInvalidClass(true)
      return;
    }

    // Do something with user data like store it in backend

    setFormData({ name: "", email: "" });
    setSuccess(true);
  }
  return (
    <div className={styles.form_container}>
      <form onSubmit={handleSubmit} noValidate>
        <input
          required
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <input
          required
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <AnimatePresence>
          {invalidClass && (
            <motion.label
              key="answer"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              label
              htmlFor="email"
              className="error-label"
            >
              <img src={ErrorLogo} alt="" />
              Enter a valid email
            </motion.label>
          )}
        </AnimatePresence>
        <Button
          isDisabled={!(formData.name && formData.email)}
          variant="primary"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
