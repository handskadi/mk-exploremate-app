import TopDestinationItem from "../TopDestinationItem/TopDestinationItem";
import styles from "./TopDestination.module.css";
import PropTypes from "prop-types";

const destinations = [
  {
    image: "http://localhost:5173/images/destinations/des1.jpg",
    name: "Marrakech",
    numberOfProdutcs: 4,
  },
  {
    image: "http://localhost:5173/images/destinations/des2.jpg",
    name: "Ouarzazate",
    numberOfProdutcs: 5,
  },
  {
    image: "http://localhost:5173/images/destinations/des3.jpg",
    name: "Merzouga",
    numberOfProdutcs: 3,
  },
];
function TopDestination() {
  return (
    <div className={styles.container}>
      <div className={styles.topDestination}>
        <div className={styles.sectionTitle}>
          <h2>Top Destinations</h2>
          <p>Enjoy our Top Destinations</p>
        </div>
        <div className={styles.destinationCards}>
          {destinations.map((destination) => (
            <TopDestinationItem
              destination={destination}
              key={destination.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

TopDestination.propTypes = {
  destination: PropTypes.object,
};
export default TopDestination;
