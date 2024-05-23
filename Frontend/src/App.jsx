import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProductsPage from "./pages/Products/Products";
import AboutPage from "./pages/About/About";
import ContactPage from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
