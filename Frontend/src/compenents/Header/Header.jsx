import Logo from "../Logo/Logo";
import MainNav from "../MainNav/MainNav";
import styles from "./Header.module.css";
import PropTypes from "prop-types";

function Header({
  wishlistCount,
  setWishlistCount,
  addTpCartCount,
  setAddTpCartCount,
}) {
  return (
    <header className={styles.header}>
      <Logo />
      <MainNav
        wishlistCount={wishlistCount}
        setWishlistCount={setWishlistCount}
        addTpCartCount={addTpCartCount}
        setAddTpCartCount={setAddTpCartCount}
      />
    </header>
  );
}

Header.propTypes = {
  wishlistCount: PropTypes.number,
  setWishlistCount: PropTypes.func,
  addTpCartCount: PropTypes.number,
  setAddTpCartCount: PropTypes.func,
};
export default Header;
