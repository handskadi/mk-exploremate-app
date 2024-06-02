import Header from "../../compenents/Header/Header";
import Footer from "../../compenents/Footer/Footer";
import styles from "./About.module.css";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faCircleCheck,
  faCompassDrafting,
  faHandsHolding,
  faSeedling,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

function About({ state, dispatch }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Header dispatch={dispatch} state={state} />
      <div className={styles.masterContainer}>
        <div className={styles.container}>
          <h1>
            <FontAwesomeIcon icon={faWandMagicSparkles} />{" "}
            <em>You future app!</em>
            <br /> Mk ExploreMate App
          </h1>
          <p>
            Welcome to Mk ExploreMate App, the ultimate travel booking platform
            for both providers and travelers. We aim to revolutionize the way
            you plan and book your travel experiences, ensuring a seamless and
            enjoyable process from start to finish.
          </p>

          <h2>
            <FontAwesomeIcon icon={faAward} /> Who We Are
          </h2>
          <p>
            Mk ExploreMate App is designed to bring convenience and efficiency
            to the travel industry. Our platform connects providers offering
            tours, accommodations, car rentals, and unique travel experiences
            with travelers seeking memorable adventures.
          </p>

          <h2>
            {" "}
            <FontAwesomeIcon icon={faSeedling} />
            Our Mission
          </h2>
          <p>
            Our mission is to simplify travel booking by providing a
            comprehensive platform where providers can showcase their services
            and travelers can easily find, book, and enjoy their next adventure.
          </p>

          <h2>
            <FontAwesomeIcon icon={faHandsHolding} /> What We Offer
          </h2>
          <h3>Backend UI Features for Providers:</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} /> Create Tours: Providers
              can craft captivating tours with detailed itineraries and pricing,
              making it easy for travelers to find the perfect adventure.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} /> Create Accommodations:
              Showcase your accommodations with engaging descriptions, photos,
              and prices to attract potential guests.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} /> List Cars for Rental:
              Manage your car rental offerings, including make, model,
              availability, and pricing, all in one place.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} /> Create Travel
              Experiences: Develop unique experiences like guided tours and
              workshops that stand out to travelers.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} /> Product and Service
              Management: Easily add, describe, upload photos, and set prices
              for your various travel offerings.
            </li>
          </ul>

          <h3>Frontend UI Features for Travelers:</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} /> Explore Activities:
              Discover a wide range of activities, tours, and experiences
              tailored to your interests.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} /> Book Services: Enjoy a
              seamless booking process designed for ease and convenience.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} /> Cart and Wishlist: Add
              items to your cart for later or create wishlists to plan future
              adventures.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} /> Create Buyer Account:
              Access personalized features and benefits by creating your own
              buyer account.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} /> Search and Filter:
              Utilize advanced search and filter options to find exactly what
              you&apos;re looking for.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} /> Functionality Control:
              Providers can activate or deactivate specific features as needed,
              ensuring flexibility and control over their offerings.
            </li>
          </ul>

          <h2>
            <FontAwesomeIcon icon={faCompassDrafting} /> Our Technology
          </h2>
          <p>
            Our platform is built using cutting-edge technologies to ensure a
            smooth and responsive user experience. We leverage:
          </p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} /> HTML, CSS, SASS/SCSS,
              Tailwind for a beautiful and responsive design.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} /> React for a dynamic and
              interactive user interface.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} /> Express JS, NodeJS,
              MongoDB for a robust and scalable backend.
            </li>
          </ul>

          <h2>
            <FontAwesomeIcon icon={faWandMagicSparkles} /> Meet the Team
          </h2>
          <div>
            <p>
              Mohamed Kadi, our Full Stack Software Engineer, leads the
              development of Mk ExploreMate App. With his expertise and passion
              for travel, he ensures that our platform meets the highest
              standards of quality and functionality.
            </p>
          </div>

          <h2>
            <FontAwesomeIcon icon={faWandMagicSparkles} /> Join Us
          </h2>
          <p>
            Whether you&apos;re a provider looking to showcase your travel
            services or a traveler seeking your next adventure, Mk ExploreMate
            App is here to make your travel planning effortless and enjoyable.
            Join us and explore the world with ease!
          </p>

          <p>
            Thank you for choosing Mk ExploreMate App. Let&apos;s make your
            travel dreams come true!
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}

About.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object,
};
export default About;
