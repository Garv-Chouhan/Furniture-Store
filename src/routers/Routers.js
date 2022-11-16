import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute";
import SuccessPage from "../pages/SuccessPage";

function Routers() {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/home" />} /> */}
      <Route path="Furniture-Store/home" element={<Home />} />
      <Route path="Furniture-Store/shop" element={<Shop />} />
      <Route path="Furniture-Store/shop/:id" element={<ProductDetails />} />
      <Route path="Furniture-Store/cart" element={<Cart />} />
      <Route
        path="Furniture-Store/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route path="Furniture-Store/login" element={<Login />} />
      <Route path="Furniture-Store/signup" element={<Signup />} />
      <Route path="Furniture-Store/SuccessPage" element={<SuccessPage />} />
    </Routes>
  );
}

export default Routers;
