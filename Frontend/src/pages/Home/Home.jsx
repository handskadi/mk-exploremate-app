import Footer from "../../compenents/Footer/Footer";
import Header from "../../compenents/Header/Header";
import styles from "./Home.module.css";
import Slider from "../../compenents/Slider/Slider";

function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Slider className={styles.homeContainer} />
        <div className={`${styles.homeContainer} ${styles.features}`}>
          Features
        </div>
        <div className={`${styles.homeContainer} ${styles.topDestination}`}>
          TopDestination
        </div>
        <div className={`${styles.homeContainer} ${styles.callToAction}`}>
          CallToAction
        </div>
        <div className={`${styles.homeContainer} ${styles.products}`}>
          Products
        </div>
        <div className={`${styles.homeContainer} ${styles.customerReviews}`}>
          CustomerReviews
        </div>
        <div className={`${styles.homeContainer} ${styles.footerDetails}`}>
          FooterDetails
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
