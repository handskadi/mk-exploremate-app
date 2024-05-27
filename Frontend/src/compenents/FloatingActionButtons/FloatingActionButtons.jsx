import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import styles from "./FloatingActionButtons.module.css";

function FloatingActionButtons() {
  return (
    <div className={styles.floatAction}>
      <button>
        <FontAwesomeIcon icon={faWhatsapp} />
      </button>
    </div>
  );
}

export default FloatingActionButtons;
