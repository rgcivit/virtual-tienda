import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useCart } from './context/cartContext'; // Descomenta si usas contexto

const PaymentSuccess = () => {
  const location = useLocation();
  // const { clearCart } = useCart(); // Descomenta si usas contexto
  const {  clearCart } = useCart(); // Asegúrate de tener el contexto de carrito configurado
  const queryParams = new URLSearchParams(location.search);
  const paymentId = queryParams.get('payment_id');
  const status = queryParams.get('status');
  const paymentMethod = queryParams.get('payment_method_id');

  // Limpia el carrito al entrar a esta página
   useEffect(() => { clearCart(); }, [clearCart]);

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '70vh',
      textAlign: 'center',
      p: 3
    }}>
      <CheckCircleIcon sx={{ fontSize: 80, color: 'success.main', mb: 3 }} />
      <Typography variant="h4" gutterBottom>
        ¡Pago Exitoso!
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Gracias por tu compra. Tu pago ha sido procesado correctamente.
      </Typography>
      <Box sx={{ bgcolor: 'background.paper', p: 3, borderRadius: 2, mt: 2, maxWidth: 500 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
          Detalles del pago:
        </Typography>
        <Typography variant="body2">
          ID de pago: {paymentId || 'N/A'}
        </Typography>
        <Typography variant="body2">
          Estado: {status || 'N/A'}
        </Typography>
        <Typography variant="body2">
          Método de pago: {paymentMethod || 'N/A'}
        </Typography>
      </Box>
      <Button 
        variant="contained" 
        color="primary" 
        component={Link} 
        to="/" 
        sx={{ mt: 4 }}
      >
        Volver al inicio
      </Button>
    </Box>
  );
};

export default PaymentSuccess;