import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductsPage from './components/ProductsPage';
import InfoCarousel from './components/InfoCarousel';
import ProductGrid from './components/ProductGrid';
import ProductDetailPage from './components/ProductDetailPage';
import { Box, Typography } from '@mui/material';
import ShoppingCart from './ShoppingCart';

const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={
              <>
                <InfoCarousel />
                <ProductGrid />
              </>
            } />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<ShoppingCart />} />
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


