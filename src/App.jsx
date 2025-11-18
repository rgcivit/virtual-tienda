import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import ProductsPage from './components/ProductsPage';
import InfoCarousel from './components/InfoCarousel';
import ProductGrid from './components/ProductGrid';
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

const Home = () => (
  <>
    <InfoCarousel />
    <ProductGrid />
  </>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            {/* Inicio */}
            <Route path="/" element={<Home />} />
             <Route path="/products" element={<ProductsPage />} />
            {/* Listado general de productos (si lo usás aparte del home) */}
            <Route path="/products" element={<ProductsPage />} />

            {/* Detalle de producto */}
            <Route path="/products/:id" element={<ProductDetailPage />} />

            {/* Categorías */}
            <Route path="/categoria/:cat" element={<ProductGrid />} />
            <Route path="/categoria/:cat/:sub" element={<ProductGrid />} />

            {/* Carrito */}
            <Route path="/cart" element={<ShoppingCart />} />

            {/* Éxito de pago */}
            <Route path="/payment/success" element={<PaymentSuccess />} />

            {/* 404 opcional */}
            {/* <Route path="*" element={<Typography sx={{ p: 4 }}>Página no encontrada</Typography>} /> */}
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




