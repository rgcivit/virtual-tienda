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
  const category = params.get('category') || 'todos';

  // 🧠 Filtrado por categoría:
  // - si category === 'todos' → devuelve todos
  // - si no, filtra por:
  //      product.category === category
  //      o el tag incluye el slug de categoría
  const filteredProducts =
    category === 'todos'
      ? mockProducts
      : mockProducts.filter((product) => {
          const matchesCategory =
            product.category && product.category === category;

          const matchesTag =
            Array.isArray(product.tags) &&
            product.tags.some((tag) =>
              String(tag).toLowerCase() === category.toLowerCase()
            );

          return matchesCategory || matchesTag;
        });

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
