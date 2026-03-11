const express = require('express');
const cors = require('cors');
const createPreference = require('./api/create_preference');
const sendOrderEmail = require('./api/send_order_email');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas API
app.post('/api/create_preference', createPreference);
app.post('/api/send_order_email', sendOrderEmail);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});