const mercadopago = require('mercadopago');

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

    const preference = {
      items: items.map(item => ({
        title: item.title,
        unit_price: Number(item.unit_price),
        quantity: item.quantity,
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
    res.status(200).json({ id: response.body.id });
  } catch (error) {
    console.error('Error creando preferencia:', error);
    if (error.response) {
      console.error('Detalle Mercado Pago:', error.response.data);
    }
    res.status(500).json({ error: 'Error al crear preferencia de pago' });
  }
}