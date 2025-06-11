import React from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { mockProducts } from '../components/Header';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const ProductsPage = () => {
  const navigate = useNavigate(); // Crea la instancia de navigate

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', mt: 4, px: 2 }}>
      <Grid container spacing={3}>
        {mockProducts.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="180"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: 'contain', bgcolor: '#fafafa' }}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                  {product.price}
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ mt: 2, width: '100%' }}
                  onClick={() => navigate(`/products/${product.id}`)} // Usa navigate aquí
                >
                  Ver detalle
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductsPage;