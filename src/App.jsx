import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./components/Header";
import ProductsPage from "./components/ProductsPage";
import ShoppingCart from "./ShoppingCart";
import ProductDetailPage from "./components/ProductDetailPage";
import PaymentSuccess from "./PaymentSuccess";

const App = () => {
  return (
    <Router>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            {/* Home: muestra todos los productos */}
            <Route path="/" element={<ProductsPage />} />

            {/* Listado filtrable */}
            <Route path="/products" element={<ProductsPage />} />

            {/* Detalle */}
            <Route path="/products/:id" element={<ProductDetailPage />} />

            {/* Carrito */}
            <Route path="/cart" element={<ShoppingCart />} />

            {/* Éxito pago */}
            <Route path="/payment-success" element={<PaymentSuccess />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;





