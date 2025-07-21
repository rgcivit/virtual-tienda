import mercadopago from 'mercadopago';

mercadopago.configure({
  access_token: 'APP_USR-5595002757319588-050513-92015738b962c0e6b0a280a5c9b6ebdc-205863933',
  sandbox: false
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { items } = req.body;
    if (!items || !Array.isArray(items)) {
      return res.status(400).json({ error: 'No se recibieron items válidos' });
    }

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

    const response = await mercadopago.preferences.create(preference);
    res.status(200).json({ 
      id: response.body.id,
      init_point: response.body.init_point,
      sandbox_init_point: response.body.sandbox_init_point
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear preferencia de pago', details: error.message });
  }
}