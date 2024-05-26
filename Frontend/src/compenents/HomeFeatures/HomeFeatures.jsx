import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./HomeFeatures.module.css";
import { faBoxOpen, faShop } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";

const features = [
  {
    icon: faShop,
    name: "Product Listing",
    text: "As a provider, you can list your products and connect with potential customers.",
  },
  {
    icon: faCalendarCheck,
    name: "Effortless Booking",
    text: "As a traveler, you can easily book your preferred tours, activities, or accommodations.",
  },
  {
    icon: faBoxOpen,
    name: "Diverse Categories",
    text: "You can list a tour, experience, accommodation property, or even rent a car.",
  },
];
function HomeFeatures() {
  return (
    <div className={styles.container}>
      <div className={styles.features}>
        <div className={styles.sectionTitle}>
          <h2>App Features</h2>
          <p>MK ExploreMate&apos;s Key Features</p>
        </div>
        <div className={styles.featureCards}>
          {features.map((feature) => (
            <Feature feature={feature} key={feature.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Feature({ feature }) {
  return (
    <div className={styles.featureCard}>
      <span>
        <FontAwesomeIcon icon={feature.icon} />
      </span>
      <h3>{feature.name}</h3>
      <p>{feature.text}</p>
    </div>
  );
}

HomeFeatures.propTypes = {
  features: PropTypes.object,
};

Feature.propTypes = {
  feature: PropTypes.object,
};

export default HomeFeatures;
