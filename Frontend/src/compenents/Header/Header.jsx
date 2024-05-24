import Logo from "../Logo/Logo";
import MainNav from "../MainNav/MainNav";
import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <MainNav />
    </header>
  );
}
export default Header;
