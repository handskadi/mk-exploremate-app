import logo from "./../../image/logo.png";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <h1>Mk ExploreMake App</h1>
      <img src={logo} />
    </div>
  );
}

export default Logo;
