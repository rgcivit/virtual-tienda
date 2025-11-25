// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid'; 
import InfoCarousel from './components/InfoCarousel';
import ProductDetailPage from './components/ProductDetailPage';
import { Box, Typography } from '@mui/material';
import ShoppingCart from './ShoppingCart';
import PaymentSuccess from './PaymentSuccess';
import TopBar from "./components/TopBar";


// Helper: sube al tope al cambiar de ruta
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

// Componente que envuelve el carrusel Y la lista de productos (ProductGrid)
const HomeWrapper = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    
    return (
        <>
            {/* Carrusel solo en la Home */}
            {isHome && <InfoCarousel />}
            
            {/* USAMOS ProductGrid para mostrar la lista principal */}
            <ProductGrid /> 
        </>
    );
};

const App = () => {
  return (
    <Router>
      {/* ✅ CORRECCIÓN: Nombre correcto del componente */}
      <ScrollToTop /> 
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            {/* 1. La RUTA PRINCIPAL (Home) y la de PRODUCTOS cargan HomeWrapper */}
            <Route path="/" element={<HomeWrapper />} />
            <Route path="/products" element={<HomeWrapper />} /> 

            {/* 2. Detalle de producto */}
            <Route path="/products/:id" element={<ProductDetailPage />} />

            {/* 3. Carrito */}
            <Route path="/cart" element={<ShoppingCart />} />

            {/* 4. Éxito de pago */}
            <Route path="/payment/success" element={<PaymentSuccess />} />
          </Routes>
        </Box>

        <Box component="footer" sx={{ py: 3, bgcolor: 'background.paper', textAlign: 'center' }}>
          <Typography variant="body1">
            © {new Date().getFullYear()} Virtual Tienda - Rodrigo Guevara Civit Developer - Todos los derechos reservados
          </Typography>
        </Box>
      </Box>
    </Router>
  );
};

export default App;




