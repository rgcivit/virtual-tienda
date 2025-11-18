import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

// 👇 PONÉ ACÁ LA URL DE TU BACKEND
// Si lo corrés local: por ejemplo "http://localhost:3001"
// Si está desplegado: por ejemplo "https://mi-backend.vercel.app"
const BACKEND_URL = "http://localhost:3001";  // 🔧 CAMBIÁ ESTO SI ES OTRO PUERTO/DOMINIO

const PaymentButton = ({ cartItems = [], disabled }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePay = async () => {
    if (disabled || !cartItems.length || loading) return;

    try {
      setLoading(true);
      setError('');

      const base = BACKEND_URL.replace(/\/$/, ''); // sin barra final
      const url = `${base}/create_preference`;

      console.log("Llamando a:", url, "con items:", cartItems);

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cartItems }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      console.log("Respuesta backend MP:", data);

      // 1) Backend devuelve init_point
      if (data.init_point) {
        window.location.href = data.init_point;
        return;
      }

      // 2) Backend devuelve solo id de preferencia
      if (data.id) {
        window.location.href =
          `https://www.mercadopago.cl/checkout/v1/redirect?pref_id=${data.id}`;
        return;
      }

      throw new Error('Respuesta inválida del servidor');
    } catch (err) {
      console.error('Error al iniciar pago:', err);
      setError(
        'ERROR AL INICIAR EL PROCESO DE PAGO: ' +
          (err.message || 'Error desconocido')
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      {error && (
        <Typography
          variant="body2"
          sx={{
            color: 'error.main',
            mb: 1,
            textAlign: 'center',
            fontWeight: 600,
          }}
        >
          {error}
        </Typography>
      )}

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handlePay}
        disabled={disabled || !cartItems.length || loading}
      >
        {loading ? 'Conectando con Mercado Pago...' : 'PAGAR CON MERCADO PAGO'}
      </Button>
    </Box>
  );
};

export default PaymentButton;
