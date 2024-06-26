import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Products from "./pages/Products/Products";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import { useEffect, useReducer } from "react";
import AddNewProduct from "./pages/AddNewProduct/AddNewProduct";
import Product from "./pages/Product/Product";
import AllProducts from "./pages/AllProducts/AllProducts";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function reducer(state, action) {
  switch (action.type) {
    case "usersReceived":
      return { ...state, users: action.payload };
    case "toursReceived":
      return { ...state, tours: action.payload };
    case "reviewsReceived":
      return { ...state, reviews: action.payload };
    case "login":
      return { ...state, isLoggedIn: true };
    case "logout":
      return { ...state, isLoggedIn: false };
    case "loggedInUser":
      return { ...state, loggedInUser: action.payload };
    case "addToCart":
      return { ...state, addToCartCount: state.addToCartCount + 1 };
    case "removeFromCart":
      return { ...state, addToCartCount: state.addToCartCount - 1 };
    case "addToWishList":
      return { ...state, wishListCount: state.wishListCount + 1 };
    case "removeFromWishList":
      return { ...state, wishListCount: state.wishListCount - 1 };
    case "deleteProduct":
      return {
        ...state,
        tours: state.tours.filter((tour) => tour.code !== action.payload.code),
      };
    case "addProduct":
      return {
        ...state,
        tours: [...state.tours, action.payload.product],
      };

    case "productAddedToCart":
      return {
        ...state,
        productsInCart: [...state.productsInCart, action.payload],
      };
    case "productToRemovedFromCart":
      return {
        ...state,
        productsInCart: state.productsInCart.filter(
          (product) => product.code !== action.payload.code
        ),
      };

    case "productAddedToWishList":
      return {
        ...state,
        productsInWishList: [...state.productsInWishList, action.payload],
      };
    case "productToRemovedFromWishList":
      return {
        ...state,
        productsInWishList: state.productsInWishList.filter(
          (product) => product.code !== action.payload.code
        ),
      };

    case "updateTour":
      console.log(action.payload);

      return {
        ...state,
        tours: state.tours.map((tour) =>
          tour.code === action.payload.product.code
            ? action.payload.product
            : tour
        ),
      };

    case "updateProductQuantity":
      return {
        ...state,
        productsInCart: state.productsInCart.map((product) =>
          product.id === action.payload.productId
            ? { ...product, quantity: action.payload.quantity }
            : product
        ),
      };

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

function App() {
  const initialState = {
    isLoggedIn: false,
    addToCartCount: 0,
    isAddedToCart: false,
    wishListCount: 0,
    tours: [],
    reviews: [],
    users: [],
    loggedInUser: {},
    productsInWishList: [],
    productsInCart: [],
  };

  // const [cartProducts, setCartProducts] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((response) => response.json())
      .then((users) => dispatch({ type: "usersReceived", payload: users }))
      .catch((error) => console.error("Error fetching users data:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/tours")
      .then((response) => response.json())
      .then((tours) => dispatch({ type: "toursReceived", payload: tours }))
      .catch((error) => console.error("Error fetching tours:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/reviews")
      .then((response) => response.json())
      .then((reviews) =>
        dispatch({ type: "reviewsReceived", payload: reviews })
      )
      .catch((error) => console.error("Error fetching reviews data:", error));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home dispatch={dispatch} state={state} />} />

        <Route
          path="/dashboard"
          element={<Dashboard dispatch={dispatch} state={state} />}
        />

        <Route
          path="/product/:id"
          element={<Product dispatch={dispatch} state={state} />}
        />

        <Route
          path="/products"
          element={<Products dispatch={dispatch} state={state} />}
        />
        <Route
          path="/about"
          element={<About dispatch={dispatch} state={state} />}
        />
        <Route
          path="/contact"
          element={<Contact dispatch={dispatch} state={state} />}
        />
        <Route
          path="/login"
          element={<Login dispatch={dispatch} state={state} />}
        />
        <Route
          path="/add-product"
          element={<AddNewProduct dispatch={dispatch} state={state} />}
        />

        <Route
          path="/all-products"
          element={<AllProducts dispatch={dispatch} state={state} />}
        />
      </Routes>
      {/* <div className="whataspp">
        <FontAwesomeIcon icon={faWhatsapp} />
      </div> */}
    </BrowserRouter>
  );
}

export default App;
