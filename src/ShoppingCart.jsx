import React from 'react';
import { Box, Typography, Button, Paper, Grid, Divider, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PaymentButton from './PaymentButton';
import { useCart } from './context/cartContext'; // Ajusta la ruta según tu estructura

// Agrega esta función aquí:
const parsePrice = (priceStr) =>
  Number(priceStr.replace(/\./g, '').replace(/[^0-9]/g, ''));

const ShoppingCart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + (parsePrice(item.price) * item.quantity), 0);
  const shipping = 1500;
  const total = subtotal + shipping;

  return (
    <Box sx={{ maxWidth: 1200, margin: '0 auto', p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Carrito de Compras
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          {cart.length === 0 ? (
            <Typography variant="h6" sx={{ textAlign: 'center', py: 4 }}>
              Tu carrito está vacío
            </Typography>
          ) : (
            cart.map((item) => (
              <Paper key={item.id} sx={{ mb: 2, p: 2, display: 'flex' }}>
                <Box sx={{ width: 100, height: 100, mr: 2 }}>
                  <img 
                    src={item.image}
                    alt={item.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                  />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body1" color="primary" sx={{ fontWeight: 'bold', mt: 1 }}>
                    ${(parsePrice(item.price) * item.quantity).toLocaleString('es-AR')}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Button 
                      variant="outlined" 
                      size="small"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >-</Button>
                    <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                    <Button 
                      variant="outlined" 
                      size="small"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >+</Button>
                  </Box>
                </Box>
                <IconButton 
                  onClick={() => removeFromCart(item.id)}
                  color="error"
                  sx={{ alignSelf: 'flex-start' }}
                >
                  <DeleteIcon />
                </IconButton>
              </Paper>
            ))
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, position: 'sticky', top: 20 }}>
            <Typography variant="h6" gutterBottom>
              Resumen del Pedido
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>Subtotal:</Typography>
              <Typography>${subtotal.toLocaleString('es-AR')}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography>Envío:</Typography>
              <Typography>${shipping.toLocaleString('es-AR')}</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography variant="h6">Total:</Typography>
              <Typography variant="h6" color="primary">
                ${total.toLocaleString('es-AR')}
              </Typography>
            </Box>
            {cart.length > 0 && (
              <PaymentButton cartItems={cart.map(item => ({
  id: item.id,
  title: item.name, // ✅ Usar 'title'
  unit_price: parsePrice(item.price),
  quantity: item.quantity
}))} />
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShoppingCart;