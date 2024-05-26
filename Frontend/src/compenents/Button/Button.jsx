import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ children, type, fontSize, onClick, bgColor }) {
  const selectedType = type === "O" ? "primaryO" : "primary";
  return (
    <button
      className={`${styles.mainBttn} ${styles[selectedType]}`}
      style={{ fontSize: `${fontSize}`, backgroundColor: `${bgColor}` }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  fontSize: PropTypes.string,
  onClick: PropTypes.func,
  bgColor: PropTypes.string,
};
export default Button;
