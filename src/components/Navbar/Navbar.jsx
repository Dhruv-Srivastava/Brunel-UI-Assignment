import BrandLogo from "../../assets/svg/brand.svg";
import styles from "./Navbar.module.css";

import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <img src={BrandLogo} alt="Brunel" />
      <div className="btn-container">
        <Link to="/register">
          <Button variant="secondary">Get projects</Button>
        </Link>
        <Button variant="primary">Onboard Talent</Button>
      </div>
    </nav>
  );
}
