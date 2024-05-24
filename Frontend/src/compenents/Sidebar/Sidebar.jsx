import styles from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCirclePause,
  faFontAwesome,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { faHandPointLeft } from "@fortawesome/free-regular-svg-icons";

function Sidebar() {
  return (
    <aside className={styles.aside}>
      <ul className={styles.productStats}>
        <li className={styles.productStatsMain}>
          <FontAwesomeIcon icon={faFontAwesome} />
          <span>3 items</span> <FontAwesomeIcon icon={faHandPointLeft} />
        </li>
        <li>
          <FontAwesomeIcon
            icon={faCircleCheck}
            className={styles.primaryColor}
          />
          Active:
          <span>1</span>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className={styles.dangerColor}
          />
          Inactive:
          <span>1</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCirclePause} className={styles.evenColor} />
          Paused:
          <span>1</span>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
