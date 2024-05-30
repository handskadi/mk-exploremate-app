import Logo from "../Logo/Logo";
import MainNav from "../MainNav/MainNav";
import styles from "./Header.module.css";
import PropTypes from "prop-types";

function Header({ dispatch, state }) {
  return (
    <header className={styles.header}>
      <Logo />
      <MainNav dispatch={dispatch} state={state} />
    </header>
  );
}

Header.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object,
};
export default Header;
