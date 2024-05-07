import BrandLogo from "../../assets/svg/brand.svg";
import CrossLogo from "../../assets/svg/cross.svg";
import styles from "./Navbar.module.css";

import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Navbar({ registeration }) {
  return (
    <nav className={styles.nav} style={{border:registeration?"none":"1px solid #EAEAEA"}}>
      <img src={BrandLogo} alt="Brunel" />

      {registeration ? (
        registeration.register_form ? (
          <Link to="/">
            <img src={CrossLogo} alt="" />
          </Link>
        ) : (
          <></>
        )
      ) : (
        <div className={styles.btn_container}>
          <Link to="/register">
            <Button variant="secondary">Get projects</Button>
          </Link>
          <Button variant="primary">Onboard Talent</Button>
        </div>
      )}
    </nav>
  );
}
