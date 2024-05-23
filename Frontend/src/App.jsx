import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProductsPage from "./pages/Products/Products";
import AboutPage from "./pages/About/About";
import ContactPage from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
