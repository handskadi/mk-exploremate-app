import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Products from "./pages/Products/Products";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import { useEffect, useState } from "react";
import AddNewProduct from "./pages/AddNewProduct/AddNewProduct";

function App() {
  const [data, setData] = useState([]);
  const [reviews, setReviews] = useState([]);
  // const [wishListProducts, setWishListProducts] = useState([]);
  // const [cartProducts, setCartProducts] = useState([]);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [addTpCartCount, setAddTpCartCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/tours")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/reviews")
      .then((response) => response.json())
      .then((reviews) => setReviews(reviews))
      .catch((error) => console.error("Error fetching reviews data:", error));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        
        <Route
          index
          element={
            <Home
              reviews={reviews}
              products={data}
              wishlistCount={wishlistCount}
              setWishlistCount={setWishlistCount}
              addTpCartCount={addTpCartCount}
              setAddTpCartCount={setAddTpCartCount}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />

        <Route
          path="/dashboard"
          element={
            <Dashboard
              products={data}
              wishlistCount={wishlistCount}
              setWishlistCount={setWishlistCount}
              addTpCartCount={addTpCartCount}
              setAddTpCartCount={setAddTpCartCount}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        /> 

        <Route
          path="/products"
          element={
            <Products
              products={data}
              setData={setData}
              wishlistCount={wishlistCount}
              setWishlistCount={setWishlistCount}
              addTpCartCount={addTpCartCount}
              setAddTpCartCount={setAddTpCartCount}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        <Route path="/about" element={<About  products={data}
              wishlistCount={wishlistCount}
              setWishlistCount={setWishlistCount}
              addTpCartCount={addTpCartCount}
              setAddTpCartCount={setAddTpCartCount}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}/>} 
              />
        <Route path="/contact" element={<Contact  products={data}
              wishlistCount={wishlistCount}
              setWishlistCount={setWishlistCount}
              addTpCartCount={addTpCartCount}
              setAddTpCartCount={setAddTpCartCount}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}/>} 
              />
        <Route
          path="/login"
          element={
            <Login
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              products={data}
              wishlistCount={wishlistCount}
              setWishlistCount={setWishlistCount}
              addTpCartCount={addTpCartCount}
              setAddTpCartCount={setAddTpCartCount}
            />
          }
        />
        <Route
          path="/add-product"
          element={
            <AddNewProduct
              setProducts={setData}
              products={data}
              wishlistCount={wishlistCount}
              setWishlistCount={setWishlistCount}
              addTpCartCount={addTpCartCount}
              setAddTpCartCount={setAddTpCartCount}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
