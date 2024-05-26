import styles from "./HomeFooterDetails.module.css";

const HomeFooterDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footweDetails}>
        <div className={styles.sectionTitle}>
          <h2>Get in Touch with Us!</h2>
          <p>Contact Us for Any Inquiries or Assistance</p>
        </div>
        <div className={styles.footerCards}>
          <div className={styles.footerCard}>+212 651 466 226</div>
          <div className={styles.footerCard}>contact@mohamedkadi.com</div>
          <div className={styles.footerCard}>WhatApp</div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooterDetails;
