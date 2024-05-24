import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ children, type }) {
  const selectedType = type === "O" ? "primaryO" : "primary";
  return (
    <button className={`${styles.mainBttn} ${styles[selectedType]}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};
export default Button;
