import mercadopago from 'mercadopago';

// Configura tu access token de Mercado Pago
mercadopago.configure({
  access_token: 'APP_USR-5595002757319588-050513-92015738b962c0e6b0a280a5c9b6ebdc-205863933',
  sandbox: false
});

// Función handler para Vercel Serverless API
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    // Si usas Vercel, puede que el body llegue como string, intenta parsear si es necesario
    let items = req.body.items;
    if (!items && typeof req.body === 'string') {
      const body = JSON.parse(req.body);
      items = body.items;
    }

    // Validación básica
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'No se recibieron items válidos' });
    }

    // Formatea los items para Mercado Pago
    const preference = {
      items: items.map(item => ({
        title: item.title || 'Producto sin nombre',
        unit_price: Number(item.unit_price) || 0,
        quantity: Number(item.quantity) || 1,
        currency_id: 'ARS'
      })),
      back_urls: {
        success: 'https://virtual-tienda.vercel.app/payment/success',
        failure: 'https://virtual-tienda.vercel.app/payment/failure',
        pending: 'https://virtual-tienda.vercel.app/payment/pending'
      },
      auto_return: 'approved',
      binary_mode: true
    };

    // Crea la preferencia en Mercado Pago
    const response = await mercadopago.preferences.create(preference);

    // Devuelve los datos necesarios al frontend
    res.status(200).json({
      id: response.body.id,
      init_point: response.body.init_point,
      sandbox_init_point: response.body.sandbox_init_point
    });
  } catch (error) {
    // Log para debug en Vercel
    console.error('Error al crear preferencia:', error);
    res.status(500).json({
      error: 'Error al crear preferencia de pago',
      details: error.message
    });
  }
}