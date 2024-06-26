import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faBell,
  faBoxes,
  faCircleInfo,
  faDashboard,
  faHome,
  faRightFromBracket,
  faHeart,
  faSliders,
  faArrowRightFromBracket,
  faShoppingBag,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import NotificationPanel from "../NotificationPanel/NotificationPanel";
import { useState } from "react";

function MainNav({ dispatch, state }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIscartOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const { isLoggedIn, loggedInUser, productsInWishList, productsInCart } =
    state;

  const totalPrice = state.productsInCart.reduce((total, product) => {
    return total + product.price * (product.quantity || 1);
  }, 0);
  const formattedPrice = totalPrice.toFixed(2);

  const handleQuantityChange = (productId, quantity) => {
    dispatch({
      type: "updateProductQuantity",
      payload: { productId, quantity: parseInt(quantity, 10) },
    });
  };

  return (
    <>
      <nav className={styles.mainNav}>
        <ul>
          <li>
            <NavLink to="/">
              <span className={styles.icon}>
                <FontAwesomeIcon icon={faHome} />
              </span>
              <span className={styles.text}>Home</span>
            </NavLink>
          </li>
          {isLoggedIn && (
            <>
              <li>
                <NavLink to="/dashboard">
                  <span className={styles.icon}>
                    <FontAwesomeIcon icon={faDashboard} />
                  </span>
                  <span className={styles.text}>Dashboard</span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/products">
                  <span className={styles.icon}>
                    <FontAwesomeIcon icon={faBoxes} />
                  </span>
                  <span className={styles.text}> Products</span>
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink to="/about">
              <span className={styles.icon}>
                <FontAwesomeIcon icon={faCircleInfo} />
              </span>
              <span className={styles.text}>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <span className={styles.icon}>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className={styles.text}>Contact</span>
            </NavLink>
          </li>

          <li>
            {!isLoggedIn && (
              <NavLink to="/login">
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faRightFromBracket} />
                </span>
                <span className={styles.text}>Login</span>
              </NavLink>
            )}
            {isLoggedIn && (
              <div className={styles.loginContainer}>
                <div
                  className={styles.loginActionsBtn}
                  style={{ display: isUserMenuOpen ? "block" : "none" }}
                >
                  <button onClick={() => dispatch({ type: "logout" })}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    Logout
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faSliders} />
                    Setting
                  </button>
                </div>
                <img
                  src={loggedInUser.userImage}
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                />
              </div>
            )}
          </li>
        </ul>
        <div
          className={styles.cartPanelContainer}
          style={{ display: isCartOpen ? "block" : "none" }}
        >
          <div className={styles.cartPanel}>
            <div className={styles.cartHeader}>
              <h3>
                {" "}
                <FontAwesomeIcon icon={faShoppingBag} /> My Cart
              </h3>
            </div>
            <div className={styles.cartProductsHolder}>
              {!state.productsInCart.length > 0 && (
                <p>No Products in your Cart!</p>
              )}
              {state.productsInCart.map((product, index) => {
                return (
                  <div
                    className={styles.cartProducts}
                    key={index}
                    style={{ position: "relative", right: 1, top: 1 }}
                  >
                    <div className={styles.cartMediaGroup}>
                      <img src={product.image} alt="" />
                      <div className="productTitle">{product.title}</div>
                    </div>
                    <div className={styles.productTextGroup}>
                      <div className="productText">
                        <span>Price/Unit</span>
                        <br />${product.price}
                      </div>
                      <div className="productText">
                        <span>Quantity</span>
                        <br />
                        <select
                          value={product.quantity}
                          onChange={(e) =>
                            handleQuantityChange(product.id, e.target.value)
                          }
                        >
                          {[...Array(10).keys()].map((num) => (
                            <option key={num + 1} value={num + 1}>
                              {num + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <button
                      className={styles.cartProClodeBtn}
                      onClick={() => {
                        dispatch({
                          type: "productToRemovedFromCart",
                          payload: product,
                        });
                      }}
                    >
                      x
                    </button>
                  </div>
                );
              })}
            </div>
            <div className={styles.cartPricing}>
              <span>Total:</span>
              <span>{formattedPrice}</span>
            </div>
            <div className={styles.cartFooter}>
              <button>
                <FontAwesomeIcon icon={faLock} /> Checkout
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className={styles.rightNav}>
        <ul>
          <li className={styles.shoppingTools}>
            <button onClick={() => setIsOpen(!isOpen)}>
              <FontAwesomeIcon icon={faHeart} />
              {productsInWishList.length > 0 && (
                <span>{productsInWishList.length}</span>
              )}
              <NotificationPanel
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                dispatch={dispatch}
                state={state}
              />
            </button>
            <button onClick={() => setIscartOpen(!isCartOpen)}>
              <FontAwesomeIcon icon={faBasketShopping} />
              {productsInCart.length > 0 && (
                <span>{productsInCart.length}</span>
              )}
            </button>
            <button>
              <FontAwesomeIcon icon={faBell} />
              <span>9+</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

MainNav.propTypes = {
  state: PropTypes.object,
  dispatch: PropTypes.func,
};
export default MainNav;
