// src/components/ProductsPage.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import ProductGrid from './ProductGrid';
import { mockProducts } from '../data/mockProducts';

const CATEGORIES_LABELS = {
  todos: 'Todos los productos',
  tecnologia: 'Tecnología & Gadgets',
  auto: 'Accesorios para Auto',
  camping: 'Camping & Outdoor',
  mascotas: 'Mascotas & Viaje',
  hogar: 'Hogar y Cocina',
};

const ProductsPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  // Obtiene el slug de la categoría de la URL. Por defecto, 'todos'.
  const category = params.get('category') || 'todos'; 

  // 🧠 Filtrado por categoría:
  const filteredProducts =
    category === 'todos'
      ? mockProducts // Si es 'todos', devuelve la lista completa
      // Si no es 'todos', filtra los productos donde product.category coincida con el slug.
      : mockProducts.filter((product) => product.category === category);

  const title = CATEGORIES_LABELS[category] || 'Productos';

  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: 'auto',
        px: { xs: 1.5, sm: 2, md: 3 },
        py: { xs: 3, sm: 4 },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 3,
          fontWeight: 700,
          textAlign: 'left',
        }}
      >
        {title}
      </Typography>

      <ProductGrid products={filteredProducts} />
    </Box>
  );
};

export default ProductsPage;