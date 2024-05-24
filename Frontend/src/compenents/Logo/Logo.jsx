import { Link } from "react-router-dom";
import logo from "./../../image/logo.png";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <h1>Mk ExploreMake App</h1>
        <img src={logo} />
      </Link>
    </div>
  );
}

export default Logo;
