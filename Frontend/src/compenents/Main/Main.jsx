import Button from "../Button/Button";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./Main.module.css";

const products = [
  {
    title: "3 Days Tour from Marrakech to Merzouga",
    duration: 3,
    location: "Marrakech",
    code: "903MK2",
    status: "active",
    isPrivateTour: true,
    rate: "good",
    image:
      "https://www.moroccoworldnews.com/wp-content/uploads/2024/01/tripadvisor-names-merzouga-worlds-14th-best-nature-destination-800x600.jpeg",
  },
  {
    title: " 2 Days Tour from Marrakech to M'hamid",
    duration: 2,
    location: "M'hamid",
    code: "807MK4",
    status: "inactive",
    isPrivateTour: false,
    rate: "poor",
    image:
      "https://specials-images.forbesimg.com/imageserve/499553781/Main-square-of-Marrakesh/960x0.jpg",
  },
];

function Main() {
  return (
    <main className={styles.main}>
      <article>
        <div className={styles.filter}>
          <select>
            <option value="">Tours</option>
            <option value="">Activities</option>
            <option value="">Accomodation</option>
            <option value="">Car Rental</option>
          </select>
        </div>

        <header className={styles.mainHeader}>
          <h1>Products</h1>
          <Button type="O">create new product</Button>
        </header>

        {products.map((product, index) => (
          <ProductItem product={product} key={index} />
        ))}
      </article>
    </main>
  );
}

export default Main;

{
  /* <section className="product">
          <div className="product-media">
            <img src="image/tours/marrakech-1.jpg" alt="" />
            <span className="status-block">
              <i className="fa-regular fa-circle-xmark"></i> Inactive
            </span>
          </div>
          <div className="product-details">
            <h2>Full Day Your: Guided Marrakech Discovery Tour</h2>
            <span>Product code: 803MK2 </span>|
            <span>
              <a href="#" className="primary-color">
                view your product
              </a>
            </span>
            |
            <span className="warning-color">
              <strong>
                <i className="fa-solid fa-triangle-exclamation"></i>
                Average
              </strong>
            </span>
          </div>
          <div className="product-actions">
            <button className="primary-o">Promote</button>
            <button className="primary">Manage</button>
          </div>
        </section>
        <section className="product">
          <div className="product-media">
            <img src="image/tours/ouarzazate-1.jpg" alt="" />
            <span className="status-pause">
              <i className="fa-regular fa-circle-pause"></i> Pause
            </span>
          </div>
          <div className="product-details">
            <h2>Ait Benhaddou - UNESCO World Heritage Discovry Tour</h2>
            <span>Product code: 874MK2 </span>|
            <span>
              <a href="#" className="primary-color">
                view your product
              </a>
            </span>
            |
            <span className="danger-color">
              <strong>
                <i className="fa-solid fa-circle-exclamation"></i> Poor
              </strong>
            </span>
          </div>
          <div className="product-actions">
            <button className="primary-o">Promote</button>
            <button className="primary">Manage</button>
          </div>
        </section> */
}
