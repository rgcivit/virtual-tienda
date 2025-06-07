import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa React Router
import Header from './components/Header';
import InfoCarousel from './components/InfoCarousel';
import ProductGrid from './components/ProductGrid';
import ProductDetailPage from '../src/components/ProductDetailPage'; // Crea este componente
import { Box, Typography } from '@mui/material';

const App = () => {
  return (
    <Router> {/* Envuelve todo en Router */}
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes> {/* Configura las rutas */}
            {/* Ruta principal con carrusel y grid */}
            <Route path="/" element={
              <>
                <InfoCarousel />
                <ProductGrid />
              </>
            } />
            
            {/* Ruta para detalles de producto */}
            <Route path="/products/:id" element={<ProductDetailPage />} />
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


