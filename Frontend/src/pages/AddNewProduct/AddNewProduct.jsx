import styles from "./AddNewProduct.module.css";
import Header from "../../compenents/Header/Header";
import Footer from "../../compenents/Footer/Footer";
function AddNewProduct() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.addProductForm}>
            <h3>Let&apos;s get started</h3>
            <form>
              <div className={styles.inputContainer}>
                <h4>Are you Done?</h4>
                <label className={styles.inputLabel}>
                  Please review your product befor you submit it!
                </label>
              </div>

              <div className={styles.inputContainer}>
                <h4>What type of product are you creating?</h4>
                <label className="input-label">
                  Please choose the product type, so that we can clasify you
                  prodyct properly.
                </label>
                <select name="category" id="category" selected="experience">
                  <option value="tour">Tour</option>
                  <option value="experience">Experience</option>
                  <option value="accommodation">Accommodation</option>
                  <option value="car_rental">Car Rental</option>
                </select>
              </div>

              <div className="input-container">
                <h4>What is your product title?</h4>
                <label className="input-label">
                  Describe product in a catchy title, don not make it longer
                </label>
                <input
                  type="text"
                  placeholder="Enter product title..."
                  className="input-field"
                  value="Ait ben Haddou Day Trip From MArrakech"
                />
              </div>

              <div className="input-container">
                <h4>Tell us about your product!</h4>
                <label className="input-label">
                  Tell you customers what makes your product unique
                </label>
                <textarea
                  id="description"
                  placeholder="Enter product description..."
                  className="textarea-field"
                >
                  Ait ben Haddou Day Trip From MArrakech, Ait ben Haddou Day
                  Trip From MArrakech, Ait ben Haddou Day Trip From MArrakech,
                  Ait ben Haddou Day Trip From MArrakech, Ait ben Haddou Day
                  Trip From MArrakech
                </textarea>
              </div>

              <div className="input-container">
                <h4>Price your Product!</h4>
                <label className="input-label">
                  Choose your product pricing per person!
                </label>
                <div className="pricing-container">
                  <input
                    type="text"
                    placeholder="Price per person..."
                    className="input-field"
                    value="2500"
                  />

                  <select selected="mad">
                    <option value="">EUR</option>
                    <option value="">USD</option>
                    <option value="mad">MAD</option>
                  </select>

                  <select selected="4">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="4">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>
                  </select>

                  <span> /Person</span>
                </div>
              </div>

              <div className="button-container">
                <button>Save and continue</button>
              </div>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default AddNewProduct;
