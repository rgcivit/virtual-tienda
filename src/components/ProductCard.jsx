import React from 'react';
import { useCart } from '../context/cartContext';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card
      component={Link}
      to={`/products/${product.id}`}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s',
        textDecoration: 'none',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: 6
        }
      }}
    >
      {/* ...otros elementos... */}
      <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
        <Typography variant="h6" color="primary">
          {product.price}
        </Typography>
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={e => {
          e.preventDefault(); // Evita la navegación al detalle
          e.stopPropagation();
        
          addToCart(product); // Agrega el producto al carrito
        }}
      >
        Agregar al carrito
      </Button>
    </CardActions>
  </Card>
);
};

export default ProductCard;