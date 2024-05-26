import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import styles from "./CallToAction.module.css";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";

function CallToAction() {
  return (
    <div className={styles.container}>
      <div className={styles.callToAction}>
        <div className={styles.sectionTitle}>
          <FontAwesomeIcon icon={faHandHoldingDollar} />
          <h2>Discover, List, and Book</h2>
        </div>
        <h3>Manage your products with Ease on MK ExploreMate</h3>
        <p>
          Unlock a world of travel opportunities with MK ExploreMate! Our app is
          designed to seamlessly connect travel providers and customers, making
          it effortless for companies to list their travel products and for
          travelers to book their dream adventures. Whether you`&apos;`sre a
          business looking to expand your reach or a traveler seeking
          unforgettable experiences, MK ExploreMate is your ultimate travel
          companion.
        </p>
        <Button type="O">Learn More</Button>
      </div>
    </div>
  );
}

export default CallToAction;
