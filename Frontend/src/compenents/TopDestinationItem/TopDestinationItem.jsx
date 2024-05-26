import styles from "./TopDestinationItem.module.css";
import PropTypes from "prop-types";

function TopDestinationItem({ destination }) {
  return (
    <button className={styles.card}>
      <img src={destination.image} alt={destination.name} />
      <h4>{destination.name}</h4>
      <span>( {destination.numberOfProdutcs} Products )</span>
    </button>
  );
}

TopDestinationItem.propTypes = {
  destination: PropTypes.object,
};
export default TopDestinationItem;
