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
  const [wishlistCount, setWishlistCount] = useState(0);
  const [addTpCartCount, setAddTpCartCount] = useState(0);

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
              products={data}
              reviews={reviews}
              wishlistCount={wishlistCount}
              setWishlistCount={setWishlistCount}
              addTpCartCount={addTpCartCount}
              setAddTpCartCount={setAddTpCartCount}
            />
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/products"
          element={<Products products={data} setData={setData} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/add-product"
          element={<AddNewProduct setProducts={setData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
