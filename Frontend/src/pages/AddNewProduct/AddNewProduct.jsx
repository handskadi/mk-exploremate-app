import styles from "./AddNewProduct.module.css";
import Header from "../../compenents/Header/Header";
import Footer from "../../compenents/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import MkIcon from "../../compenents/MkIcon/MkIcon";

function AddNewProduct({ dispatch, state }) {
  const [step, setStep] = useState(1);
  const [productType, setProductType] = useState("tour");
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("active");
  const [isPrivate, setIsPrivate] = useState(true);
  const [price, setPrice] = useState(0);
  const [currency, setCurrency] = useState("EUR");
  const [image, setImage] = useState(
    "http://localhost:5174/images/tours/default.png"
  );

  const navigate = useNavigate();
  useEffect(() => {
    if (!state.isLoggedIn) {
      navigate("/login");
    }
  }, [state.isLoggedIn, navigate]);

  () => {
    setImage();
  };
  function nextHandler(e) {
    e.preventDefault();
    if (step < 6) setStep((s) => s + 1);
  }

  function previousHandler(e) {
    e.preventDefault();
    if (step > 1) setStep((s) => s - 1);
  }

  function handleAddProductSubmit(e) {
    e.preventDefault();
    const newProduct = {
      id: `MK${Date.now()}`,
      productType,
      title,
      excerpt,
      location,
      code: `${state.loggedInUser.id}P${Date.now()}`,
      status,
      price: Number(price),
      isPrivate,
      image,
      duration: 1,
      rate: "good",
      userID: state.loggedInUser.id,
    };

    dispatch({ type: "addProduct", payload: { product: newProduct } });
    resetForm();
    setStep(6);
  }

  function resetForm() {
    setProductType("tour");
    setTitle("");
    setExcerpt("");
    setLocation("");
    setStatus("active");
    setIsPrivate(true);
    setPrice(0);
    setCurrency("EUR");
  }

  function goProducts(e) {
    e.preventDefault();
    navigate("/products");
    setStep(1);
  }

  // const longId = "a24ce40f-262c-412f-bb92-cb2d820139e3";
  // const shortId = longId.slice(0, 8);

  return (
    <>
      <Header dispatch={dispatch} state={state} />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.addProductForm}>
            {step === 1 && <h3>Let&apos;s get started</h3>}
            {step === 2 && <h3>Let&apos;s brand your product!</h3>}
            {step === 3 && <h3>Let&apos;s add some content!</h3>}
            {step === 4 && <h3>Let&apos;s price your product.</h3>}
            {step === 5 && <h3>Voilà! Ready to go!</h3>}
            {step === 6 && (
              <>
                <div className={styles.suceessAdd}>
                  <MkIcon height="50" width="50" />

                  <div>
                    <h3>Well Done!</h3>
                    <span>Get Ready for new Bookings!</span>
                  </div>
                </div>
              </>
            )}
            <form onSubmit={handleAddProductSubmit}>
              {step === 1 ? (
                <div className={styles.inputContainer}>
                  <h4>What type of product are you creating?</h4>
                  <label className={styles.inputLabel}>
                    Please choose the product type, so that we can clasify you
                    prodyct properly.
                  </label>
                  <select
                    selected={productType}
                    onChange={(e) => setProductType(e.target.value)}
                  >
                    <option value="tour">Tour</option>
                    <option value="experience">Experience</option>
                    <option value="accommodation">Accommodation</option>
                    <option value="car_rental">Car Rental</option>
                  </select>
                </div>
              ) : step === 2 ? (
                <div className={styles.inputContainer}>
                  <h4>What is your product title?</h4>
                  <label className={styles.inputLabel}>
                    Describe product in a catchy title, don not make it longer
                  </label>
                  <input
                    type="text"
                    placeholder="Enter product title..."
                    className={styles.inputField}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              ) : step === 3 ? (
                <>
                  <div className={styles.inputContainer}>
                    <h4>Tell us about your product!</h4>
                    <label className={styles.inputLabel}>
                      Tell you customers what makes your product unique
                    </label>
                    <textarea
                      id="description"
                      value={excerpt}
                      placeholder="Enter product description..."
                      className={styles.textareaField}
                      onChange={(e) => {
                        setExcerpt(e.target.value);
                      }}
                    ></textarea>
                  </div>
                  <div className={styles.inputContainer}>
                    <h4>Where does your tour start?</h4>
                    <label className={styles.inputLabel}>
                      Please provide the name of the city where your tour
                      begins.
                    </label>
                    <input
                      type="text"
                      placeholder="Enter City/location... (e.g. London)"
                      className={styles.inputField}
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <h4>Private or Shared?</h4>
                    <label className={styles.inputLabel}>
                      Indicate whether your product is private or shared.
                    </label>
                    <select
                      value={isPrivate}
                      onChange={(e) => setIsPrivate(e.target.value)}
                    >
                      <option value="private">Private</option>
                      <option value="shared">Shared</option>
                    </select>
                  </div>
                </>
              ) : step === 4 ? (
                <div className={styles.inputContainer}>
                  <h4>Price your Product!</h4>
                  <label className={styles.inputLabel}>
                    Choose your product pricing per person!
                  </label>
                  <div className={styles.pricingContainer}>
                    <input
                      type="text"
                      placeholder="Price per person..."
                      className={styles.inputField}
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />

                    <select
                      selected={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                    >
                      <option value="EUR">EUR</option>
                      <option value="USD">USD</option>
                      <option value="MAD">MAD</option>
                    </select>

                    <span> /Person</span>
                  </div>
                </div>
              ) : step === 5 ? (
                <div className={styles.inputContainer}>
                  <h4>Publish or Draft?</h4>
                  <label className={styles.inputLabel}>
                    Publish your product now or save it as a draft for future
                    publishing.
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    style={{
                      backgroundColor:
                        status === "active" ? "#77a477" : "#8b9197",
                      color: "#fff",
                    }}
                  >
                    <option value="active">Publish</option>
                    <option value="pause">Draft</option>
                  </select>
                </div>
              ) : (
                <div className={styles.inputContainer}>
                  <h4>Product Published!</h4>
                  <label className={styles.inputLabel}>
                    Congratulations! Your product is now live and ready to view
                    or manage on the products page
                  </label>
                </div>
              )}

              <div className={styles.buttonContainer}>
                <button onClick={previousHandler} className={styles.btnBack}>
                  Back
                </button>
                {step === 5 ? (
                  <button
                    onClick={handleAddProductSubmit}
                    className={styles.btnFinish}
                  >
                    {status === "active" ? "Publish now" : "Save as Draft"}
                  </button>
                ) : step === 6 ? (
                  <button onClick={goProducts}>Manage Products</button>
                ) : (
                  <button onClick={nextHandler} className={styles.btnNext}>
                    Continue
                  </button>
                )}
              </div>
            </form>
          </div>
        </main>
        <aside className={styles.aside}>
          <ul className={styles.productStats}>
            <li className={styles.productStatsMain}>
              <span>
                {step === 1 ? 25 : step === 2 ? 50 : step === 3 ? 75 : 100}%
                Complete
              </span>
              <br />
              <progress
                value={
                  step === 1 ? 25 : step === 2 ? 50 : step === 3 ? 75 : 100
                }
                max="100"
              >
                0%
              </progress>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className={step >= 1 ? styles.primaryColor : styles.evenColor}
              />{" "}
              BASICS
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className={step >= 2 ? styles.primaryColor : styles.evenColor}
              />{" "}
              BRANDING
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className={step >= 3 ? styles.primaryColor : styles.evenColor}
              />
              CONTENT
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className={step >= 4 ? styles.primaryColor : styles.evenColor}
              />
              PRICING
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className={step >= 5 ? styles.primaryColor : styles.evenColor}
              />{" "}
              FINISH
            </li>
            <hr className={styles.verticalLine} />
          </ul>
        </aside>
      </div>
      <Footer />
    </>
  );
}

AddNewProduct.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object,
};
export default AddNewProduct;
