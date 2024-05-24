import Footer from "../../compenents/Footer/Footer";
import Header from "../../compenents/Header/Header";
import Main from "../../compenents/Main/Main";
import Sidebar from "../../compenents/Sidebar/Sidebar";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Main />
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}

export default Home;
