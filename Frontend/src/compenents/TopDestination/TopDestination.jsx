import styles from "./TopDestination.module.css";

function TopDestination() {
  return (
    <div className={styles.container}>
      <div className={styles.topDestination}>
        <div className={styles.sectionTitle}>
          <h2>Top Destination</h2>
          <p>Enjoy our Top Destinations</p>
        </div>
        <div className={styles.destinationCards}>
          <button className={styles.card}>
            <img
              src="http://localhost:5173/images/destinations/des1.jpg"
              alt=""
            />
            <h4>Marrakech</h4>
            <span>( 3 Products )</span>
          </button>
          <button className={styles.card}>
            <img
              src="http://localhost:5173/images/destinations/des2.jpg"
              alt=""
            />
            <h4>Ouarzazate</h4>
            <span>( 5 Products )</span>
          </button>
          <button className={styles.card}>
            <img
              src="http://localhost:5173/images/destinations/des3.jpg"
              alt=""
            />
            <h4>Merzouga</h4>
            <span>( 3 Products )</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopDestination;
