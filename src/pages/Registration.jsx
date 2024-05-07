import { useState } from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Register from "../components/Register/Register.jsx";

export default function Registration() {
  const [success, setSuccess] = useState(false);
  return (
    <>
      <Navbar registeration={{ register_form: !success ? true : false }} />
      <Register success={success} setSuccess={setSuccess} />
    </>
  );
}
