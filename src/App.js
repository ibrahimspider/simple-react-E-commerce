import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import AboutPage from "./pages/aboutPage";
import HomePage from "./pages/homePage";
import ProductsPage from "./pages/productsPage";
import ProductDetails from "./pages/ProductDetails";
import CategoriseProduct from "./pages/CategoriseProduct";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const toggleLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  useEffect(() => {
    toggleLoading();
  }, []);
  return (
    <div className="App">
      {loading && <Loading />}
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <AboutPage />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <ProductsPage />
            </>
          }
        />
        <Route
          path="/product/:ProductId"
          element={
            <>
              <ProductDetails />
            </>
          }
        />
        <Route
          path="/category/:CategoryName"
          element={
            <>
              <CategoriseProduct />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
