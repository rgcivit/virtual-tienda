// src/ShoppingCart.jsx  (o src/components/ShoppingCart.jsx si lo tenés ahí)
import React, { useMemo, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  Grid,
  Divider,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PaymentButton from './PaymentButton';
import { useCart } from './context/cartContext'; // ✅ ruta correcta, sin "x" y con "./"

// Función para convertir cadenas como "$129.990" a número (ej: 129990)
const parsePrice = (priceStr) => {
  if (typeof priceStr === 'number') return priceStr;
  const s = String(priceStr || '');
  // Elimina todo lo que no sea dígito o coma/punto, luego normaliza
  const cleaned = s.replace(/[^0-9,.-]/g, '');
  // Quitar puntos de miles y cambiar coma decimal a punto
  const normalized = cleaned.replace(/\./g, '').replace(',', '.');
  const n = parseFloat(normalized);
  return Number.isFinite(n) ? n : 0;
};

const formatPrice = (value) =>
  new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0
  }).format(value);

const SHIPPING_FEE = 4500; // Ajusta si necesitas otro monto

const ShoppingCart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart() || {};
  const [shippingOption, setShippingOption] = useState('pickup'); // 'pickup' o 'delivery'

  const subtotal = useMemo(() => {
    return (cart || []).reduce((sum, item) => {
      const unit = parsePrice(item.price);
      const qty = item.quantity ?? 1;
      return sum + unit * qty;
    }, 0);
  }, [cart]);

  const shippingCost = shippingOption === 'delivery' ? SHIPPING_FEE : 0;
  const total = subtotal + shippingCost;

  const handleChangeShipping = (e) => setShippingOption(e.target.value);

  const handleDecrease = (item) => {
    const newQty = Math.max(1, (item.quantity ?? 1) - 1);
    updateQuantity?.(item.id, newQty);
  };

  const handleIncrease = (item) => {
    const newQty = (item.quantity ?? 1) + 1;
    updateQuantity?.(item.id, newQty);
  };

  // Prepara los items que se enviarán al PaymentButton (incluye envío si corresponde)
  const itemsForPayment = useMemo(() => {
    const items = (cart || []).map((item) => ({
      id: item.id,
      title: item.name,
      unit_price: parsePrice(item.price),
      quantity: item.quantity ?? 1
    }));
    if (shippingOption === 'delivery' && (cart || []).length > 0) {
      items.push({
        id: 'shipping',
        title: 'Envío a domicilio',
        unit_price: SHIPPING_FEE,
        quantity: 1
      });
    }
    return items;
  }, [cart, shippingOption]);

  return (
    <Box sx={{ maxWidth: 1200, margin: '0 auto', p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Carrito de Compras
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          {(!cart || cart.length === 0) ? (
            <Typography variant="h6" sx={{ textAlign: 'center', py: 4 }}>
              Tu carrito está vacío
            </Typography>
          ) : (
            (cart || []).map((item) => (
              <Paper
                key={item.id}
                sx={{ mb: 2, p: 2, display: 'flex', alignItems: 'center', gap: 2 }}
              >
                <Box sx={{ width: 100, height: 100, mr: 2 }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    sx={{ fontWeight: 'bold', mt: 1 }}
                  >
                    {formatPrice(parsePrice(item.price) * (item.quantity ?? 1))}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleDecrease(item)}
                      disabled={(item.quantity ?? 1) <= 1}
                    >
                      -
                    </Button>
                    <Typography sx={{ mx: 2 }}>{item.quantity ?? 1}</Typography>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleIncrease(item)}
                    >
                      +
                    </Button>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  <IconButton
                    onClick={() => removeFromCart?.(item.id)}
                    color="error"
                    sx={{ alignSelf: 'flex-end' }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
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
              <Typography>{formatPrice(subtotal)}</Typography>
            </Box>

            <Divider sx={{ my: 1 }} />

            <FormControl component="fieldset" sx={{ mb: 2 }}>
              <FormLabel component="legend">Opciones de envío</FormLabel>
              <RadioGroup value={shippingOption} onChange={handleChangeShipping}>
                <FormControlLabel
                  value="pickup"
                  control={<Radio />}
                  label="Retirar en tienda (Gratis)"
                />
                <FormControlLabel
                  value="delivery"
                  control={<Radio />}
                  label={`Envío a domicilio (${formatPrice(SHIPPING_FEE)})`}
                />
              </RadioGroup>
            </FormControl>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
              <Typography>Envío:</Typography>
              <Typography color={shippingCost > 0 ? 'text.primary' : 'text.secondary'}>
                {shippingCost > 0 ? formatPrice(shippingCost) : 'Gratis'}
              </Typography>
            </Box>

            <Divider sx={{ my: 1 }} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography variant="h6">Total:</Typography>
              <Typography variant="h6" color="primary">
                {formatPrice(total)}
              </Typography>
            </Box>

            {/* Botón de pago con Mercado Pago */}
            <Box sx={{ mb: 1 }}>
              <PaymentButton
                cartItems={itemsForPayment}
                disabled={!(cart && cart.length > 0)}
              />
            </Box>

            <Button
              variant="text"
              color="inherit"
              fullWidth
              sx={{ mt: 1 }}
              onClick={() => clearCart?.()}
            >
              Vaciar carrito
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShoppingCart;

