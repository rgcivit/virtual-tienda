// src/components/PaymentButton.jsx
import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

// Si tenés un backend aparte, podés definir VITE_BACKEND_URL en el .env
// Si no, queda vacío y usa la misma URL del front con /create_preference
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || '';

const PaymentButton = ({ cartItems = [], disabled }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePay = async () => {
    if (disabled || !cartItems.length || loading) return;

    try {
      setLoading(true);
      setError('');

      const response = await fetch(`${BACKEND_URL}/create_preference`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cartItems }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();

      // 1) Si el backend devuelve init_point (forma moderna)
      if (data.init_point) {
        window.location.href = data.init_point;
        return;
      }

      // 2) Si devuelve solo el id de la preferencia (forma clásica)
      if (data.id) {
        window.location.href = `https://www.mercadopago.cl/checkout/v1/redirect?pref_id=${data.id}`;
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
