import ErrorLogo from "../../../assets/svg/error.svg"
import { useState } from "react";
import Button from "../../Button/Button";

import styles from "./RegisterForm.module.css";

export default function RegisterForm({setSuccess}) {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [invalidClass, setInvalidClass] = useState(false)

  function handleChange(e) {
    setInvalidClass(false)
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));
    
  }


  function handleSubmit(e) {
    e.preventDefault();
    setFormData({ name: "", email: "" });
    setSuccess(true)
  }
  return (
    <div className={styles.form_container}>
      <form onSubmit={handleSubmit}>
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
          onInvalid={()=>setInvalidClass(true)}
        />
        {invalidClass && (
          <label htmlFor="email" className="error-label">
            <img src={ErrorLogo} alt="" />
            Enter a valid email
          </label>
        )}
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
