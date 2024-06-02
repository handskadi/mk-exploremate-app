import PropTypes from "prop-types";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

function Button({ children, type, fontSize, onClick, bgColor, link, to }) {
  const selectedType = type === "O" ? "primaryO" : "primary";

  return (
    <>
      {link && (
        <Link
          to={to}
          className={`${styles.mainBttn2} ${styles[selectedType]}`}
          style={{ fontSize: `${fontSize}`, backgroundColor: `${bgColor}` }}
        >
          {children}
        </Link>
      )}
      {!link && (
        <button
          className={`${styles.mainBttn} ${styles[selectedType]}`}
          style={{ fontSize: `${fontSize}`, backgroundColor: `${bgColor}` }}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  fontSize: PropTypes.string,
  onClick: PropTypes.func,
  bgColor: PropTypes.string,
  link: PropTypes.bool,
  to: PropTypes.string,
};
export default Button;
