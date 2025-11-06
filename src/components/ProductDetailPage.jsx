// En src/pages/ProductDetailPage.jsx
// ...existing code...
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress, Button } from '@mui/material';
import { Wallet } from '@mercadopago/sdk-react';
import ensendedorusb from "./assets/ensendedorusb.png";
import compresor from "./assets/compresor.png";
import filtrodeagua from "./assets/filtrodeagua4.jpg";
import ensendedordetalle from "./assets/ensendedordetalle.png"; 
import filtrodeaguadetalle from "./assets/filtrodeaguadetalle.jpg"; 
import kitemergencia from './assets/kitemergencia.jpg'
import portavaso from './assets/portavaso (1).jpg'
import portavasodetalle from './assets/portavasodetalle.jpg'
import infladorportatil from "./assets/infladorportatil.jpg"; 
import infladorportatildetalle from "./assets/infladorportatildetalle.jpg"; 
import PowerBank from "./assets/PowerBank.jpg"
import PowerBankdetalle from "./assets/PowerBankdetalle.jpg"
import bolsobanano from "./assets/bolsobanano.png"; 
import bolsobananodetalle from "./assets/bolsobananodetalle.png"; 
import linternaconluzlateral from "./assets/linternaconluzlateral.jpg";
import linternaconluzlateraldetalle from "./assets/linternaconluzlateraldetalle.jpg";
import inversordecorriente from "./assets/inversordecorriente.jpg";
import inversordecorrientedetalle from "./assets/inversordecorrientedetalle.jpg";
import intercomunicadorcasco from "./assets/intercomunicadorcasco.jpg";
import intercomunicadorcascodetalle from "./assets/intercomunicadorcascodetalle.jpg";
import nerdminer1 from "./assets/nerdminer1.webp";
import nerdminer3detalle from "./assets/nerdminer3detalle.webp";
import compresordetalle from "./assets/compresordetalle.png";
import lamparadeemergencia from "./assets/lamparadeemergencia.webp";
import lamparadeemergenciadetalle from "./assets/lamparadeemergenciadetalle.webp";
import powerbanksolar from "./assets/powerbanksolar.png";
import powerbanksolardetalle from "./assets/powerbanksolardetalle.jpg";
import linternamultifuncional from "./assets/linternamultifuncional.jpg";
import linternamultifuncionaldetalle from "./assets/linternamultifuncionaldetalle.webp";
import cocinacamping from "./assets/cocinacamping.png";
import cocinacampingdetalle from "./assets/cocinacampingdetalle.png";

// Función para parsear precio desde cadenas tipo "$129.990" a número 129990
const parsePrice = (priceStr) => {
  if (typeof priceStr === 'number') return priceStr;
  const s = String(priceStr || '');
  const cleaned = s.replace(/[^0-9,.-]/g, '');
  const normalized = cleaned.replace(/\./g, '').replace(',', '.');
  const n = parseFloat(normalized);
  return Number.isFinite(n) ? n : 0;
};

const ProductDetailPage = () => {
  const { id } = useParams(); // ID desde la ruta
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    if (!product) return;
    // Crear preferencia cuando se obtenga el producto
    const unitPrice = parsePrice(product.price);
    fetch('/api/create_preference', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: [
          {
            title: product.name,
            unit_price: unitPrice,
            quantity: 1
          }
        ]
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data && data.id) setPreferenceId(data.id);
        else {
          console.error('Respuesta inválida al crear preferencia:', data);
        }
      })
      .catch(err => {
        console.error('Error creando preferencia:', err);
      });
  }, [product]);

  useEffect(() => {
    const fetchProduct = () => {
      try {
        // Lista local de productos (simulada)
        const mockProducts = [
          {
            id: 1,
            name: "Encendedor Recargable USB con Linterna Negro",
            description: "El encendedor multipropósito es una innovación de vanguardia.",
            longDescription: `El encendedor multipropósito es una innovación de vanguardia que hará que tus momentos sean más prácticos y emocionantes que nunca! Este versátil dispositivo es mucho más que un simple encendedor; es una herramienta multifuncional que combina elegancia y practicidad.

Características principales:

Potente llama  despídase del tradicional encendedor de gas. Nuestro encendedor utiliza una llama de increíblemente potente, que es resistente al viento y capaz de encenderse con precisión incluso en condiciones adversas.

Recargable y ecológico: olvídate de la necesidad constante de comprar encendedores desechables. Nuestro encendedor es recargable mediante USB, lo que lo convierte en una opción rentable y respetuosa con el medio ambiente.

Multiusos: este encendedor no se limita a encender solo cigarrillos. Es perfecto para encender velas, quemadores de incienso, estufas de gas e incluso como herramienta de supervivencia en situaciones de emergencia.

Diseño sofisticado: su diseño elegante y moderno no solo impresiona sino que también se adapta perfectamente a cualquier estilo de vida. Este es un accesorio que querrás mostrar a tus amigos.

Seguro y sin llama abierta: gracias a la tecnología de plasma, nuestro encendedor es seguro de usar, sin llama abierta. Adiós a las preocupaciones por los niños curiosos o los vientos fuertes.

Nuestro encendedor también tiene una supe linterna integrada, con dos modos de uso disponibles.

Color Negro.`,
            price: "$11.990",
            image: ensendedorusb,
            detailImage: ensendedordetalle,
            tags: ["Recargable", "Portátil", "Linterna LED", "USB-C", "Resistente"],
            stock: 10
          },
          {
            id: 2,
            name: "Grifo con Filtro de Agua",
            description: "Grifo con Filtro de Agua – Ahorro, limpieza y flexibilidad en tu cocina o baño.",
            longDescription: `* Diseño de la cabeza del grifo de la cocina: el ventilador dentro del filtro del fregadero de la cocina puede reducir el agua. La presión del filtro de agua de la ducha es a prueba de salpicaduras y puede ayudar a ahorrar agua por 40% - 70%, la temperatura del rociador del grifo no debe exceder de 60 grados.
* Flexibilidad del filtro del cabezal de ducha: Estos grifos de fregadero de cocina tienen un diseño de rotación de 360 grados. Estos filtros de grifo de agua para fregadero de cocina limpian fácilmente las esquinas ciegas. Hemos combinado la flexibilidad del grifo para el lavabo del baño con la de los pequeños purificadores de agua que se adaptan principalmente a los grifos.
* Fácil de instalar y limpiar: el grifo del fregadero del baño es adecuado para 99% tipos de filtro de agua del grifo. Este Filtro de ducha de agua es práctico y flexible. Este grifo de agua puede ahorrarle tiempo. Este filtro de agua de grifo para fregadero de cocina es fácil de ajustar el ángulo del extensor del fregadero.
* Amplias aplicaciones: el accesorio del grifo se puede utilizar como grifos de fregadero ajustables de fregadero de cocina, grifo de baño y grifo de lavabo, etc. Los grifos de baño se pueden instalar como cualquier grifo de cocina, grifos de baño y grifos de lavabo. Estos filtros de agua para grifos conservan el agua al permitir que el aire se mezcle con agua.
* Tamaño del filtro de agua del baño: Este filtro de agua para grifo es aplicable al cabezal de ducha del baño para un diámetro redondo de 16-22mm. Puede ajustar la estanqueidad del filtro del grifo del baño libremente. Y puede ajustar el tamaño del purificador de agua de la cocina para el grifo de acuerdo con su fregadero con filtro de agua.


Especificaciones:
* Material: polipropileno
* Tamaño: 3,2 "de alto x 1,75" de ancho x 0,7 "de largo
* Color: rosa, verde, azul




Contenido del paquete
1 x grifo con filtro de agua


Nota:
1. El color real del artículo puede ser ligeramente diferente de las imágenes que se muestran en el sitio web debido a muchos factores, como el brillo de su monitor y el brillo de la luz.
2. Permite una ligera desviación de medición manual para los datos.`,
            price: "$12.990",
            image: filtrodeagua,
            detailImage: filtrodeaguadetalle,
            tags: ["Grifo", "Filtro de agua", "Cocina", "Baño", "Ahorro"],
            stock: 6
          },
          {
            id: 3,
            name: "Soporte Universal para Botella y Celular ¡Tu aliado perfecto para moverte con comodidad y estilo!",
            description: "Soporte Universal para Botella y Celular ¡La solución práctica y resistente para tus salidas en bici, moto o cochecito!",
            longDescription: `🧃📱 Soporte Universal para Botella y Celular  
¡Tu aliado perfecto para moverte con comodidad y estilo!

🚲 Ideal para bici, moto, cochecito o scooter  
🔒 Fijación giratoria con sistema de bloqueo 360°  
📱 Compartimento seguro para tu celular  
🧴 Espacio firme para botella térmica o de plástico  
🧱 Material plástico resistente y liviano (180g)  
📐 Medidas: 20 x 10 x 11 cm  
🎨 Colores disponibles: Azul, Verde y Negro  
🔧 Fácil de instalar y ajustar

✅ Compatible con manubrios de distintos tamaños  
✅ Mantiene tus objetos estables y accesibles durante el trayecto  
✅ Perfecto para delivery, paseos, senderismo o uso urbano

🌟 ¡Llevá tu hidratación y tu conexión siempre a mano!`,
            price: "$89.990",
            image: portavaso,
            detailImage: portavasodetalle,
            tags: ["98V", "Doble batería", "40 N.m", "Herramientas", "Tasbel"],
            stock: 2
          },
          {
            id: 4,
            name: "Inflador Digital Portátil.",
      description: "Tu compañero ideal para la aventura ¡Compacto, potente y listo para cualquier terreno!.",
      longDescription: `"🏕️ Perfecto para salidas de camping, travesías en bici o senderismo  
🔋 Batería de larga duración (4000mAh) para inflar sin depender de enchufes  
📈 Presión máxima de 150 PSI – ideal para bicicletas, motos, pelotas y más  
🎯 Pantalla digital con lectura precisa y apagado automático  
🔇 Funcionamiento silencioso (menos de 78dB)  
👜 Diseño compacto, fácil de guardar en mochila o alforja

✅ Preset de presión para distintos tipos de ruedas  
✅ Compatible con válvulas comunes (Presta, Schrader, etc.)  
✅ Carga por USB – ¡siempre listo!

💥 Precio especial: $55.000

🌄 ¡No te quedes varado en medio del camino! Este inflador es tu seguro de movilidad en cualquier aventura 🚵‍♀️"`,
      price: "$55.000",
      image: infladorportatil,
      detailImage: infladorportatildetalle,
      tags: ["Inflador", "Portátil", "Batería de larga duración", "Variable", "Digital"],
            stock: 3
          },
          {
            id: 5,
            name: "Kit de emergencia con linterna 50w",
            description: "Fácil de trasladar y útil como powerbank.",
            longDescription: `Linterna doméstica con panel solar y carga USB. Incluye 2 focos, panel solar y una linterna. Duración de batería extendida y modo powerbank para emergencias.`,
            price: "$30.000",
            image: kitemergencia,
            detailImage: kitemergencia,
            tags: ["Emergencia", "Linterna 50W", "Powerbank", "Solar", "USB"],
            stock: 5
          },
          {
            id: 6,
            name: "Power Bank 20.000 Mah 3 Entradas con Linterna",
            description: "Power Bank 20.000 mAh con linterna integrada.",
            longDescription: `Batería portátil de 20000 mAh con 3 salidas. Ideal para viajes y uso diario. Incluye linterna integrada y varios puertos de carga.`,
            price: "$27.990",
            image: PowerBank,
            detailImage: PowerBankdetalle,
            tags: ["20.000 mAh", "3 entradas", "Linterna", "Portátil", "USB"],
            stock: 7
          },
          {
            id: 7,
            name: "Bolso Mochila Bandolera Cruzada Antirrobo en 4 Colores",
            description: "Bolso antirrobo con puerto USB y compartimentos ocultos.",
            longDescription: `Cierre antirrobo, bolsillo oculto trasero, puerto de carga USB (batería externa no incluida). Material Oxford resistente y varios compartimentos de organización.`,
            price: "$59.990",
            image: bolsobanano,
            detailImage: bolsobananodetalle,
            tags: ["Antirrobo", "USB", "Impermeable", "4 colores", "Organización"],
            stock: 4
          },
          {
            id: 8,
            name: "Linterna con Luz Frontal Blanca y Lateral Roja Solar y Recargable",
            description: "Linterna recargable con panel solar y modos múltiples.",
            longDescription: `Linterna con luz frontal blanca, luz lateral roja y carga solar/USB. Durabilidad, resistencia al polvo y varios modos de iluminación.`,
            price: "$39.990",
            image: linternaconluzlateral,
            detailImage: linternaconluzlateraldetalle,
            tags: ["Linterna", "Recargable", "Camping", "Senderismo", "Emergencia"],
            stock: 6
          },
          {
            id: 9,
            name: "Inversor Convertidor de Corriente 200W para Auto 12V 220V",
            description: "Inversor compacto para uso en vehículo.",
            longDescription: `Convierte 12V DC a 220V AC, ideal para camping y viajes. Incluye salida USB y controles de seguridad.`,
            price: "$129.990",
            image: inversordecorriente,
            detailImage: inversordecorrientedetalle,
            tags: ["220v", "Inversor", "Power Bank", "Camping"],
            stock: 2
          },
          {
            id: 10,
            name: "Intercomunicador Audífonos para Casco de Motos Bluetooth Y20",
            description: "Intercomunicador Bluetooth para cascos de moto.",
            longDescription: `Alcance extendido, reducción de ruido, Bluetooth estable y resistencia al agua IPX6. Autonomía prolongada para viajes largos.`,
            price: "$89.990",
            image: intercomunicadorcasco,
            detailImage: intercomunicadorcascodetalle,
            tags: ["Inalámbrica", "Bluetooth", "IPX6", "Larga duración", "Comunicación"],
            stock: 3
          },
          {
            id: 11,
            name: "Nerdminer 2 Miner Btc Solo Lotter 55-60 Kh/s",
            description: "Equipo de minería en modo lotería.",
            longDescription: `Alta eficiencia y bajo consumo. Modo Solo para operación individual. Puede variar en apariencia según lote.`,
            price: "$69.990",
            image: nerdminer1,
            detailImage: nerdminer3detalle,
            tags: ["55-60 Kh/s", "Pantalla 2.8\"", "Eficiencia", "Modo lotería"],
            stock: 1
          },
          {
            id: 12,
            name: "Compresor de Aire Portátil 12v",
            description: "Mini compresor portátil para inflado.",
            longDescription: `Mini compresor 12V para neumáticos, colchones y pelotas. Incluye accesorios y manómetro integrado.`,
            price: "$40.000",
            image: compresor,
            detailImage: compresordetalle,
            tags: ["24L", "Silencioso", "Portátil", "8 bar", "Accesorios"],
            stock: 2
          },
          {
            id: 13,
            name: "Luz De Emergencia Led Solar 5 Faros 2029",
            description: "Ampolleta solar recargable de 5 caras.",
            longDescription: `Foco LED recargable con panel solar. Cobertura amplia, instalación sencilla y larga duración.`,
            price: "$10.990",
            image: lamparadeemergencia,
            detailImage: lamparadeemergenciadetalle,
            tags: ["Recargable", "Luz LED", "360°", "Solar", "400 lúmenes"],
            stock: 12
          },
          {
            id: 14,
            name: "Power Bank Solar y Corriente con 4 Cables de 20.000Mah",
            description: "Power bank 20000mAh con carga solar.",
            longDescription: `Batería portátil 20000 mAh con carga solar y cuatro cables incluidos. Ideal para actividades al aire libre.`,
            price: "$26.990",
            image: powerbanksolar,
            detailImage: powerbanksolardetalle,
            tags: ["20000 mAh", "Solar", "4 cables", "Linterna", "USB"],
            stock: 5
          },
          {
            id: 15,
            name: "Linterna Foco Multifuncional Solar o Recargable USB",
            description: "Linterna multifuncional con modos y powerbank.",
            longDescription: `Linterna multifunción con 3 modos, carga USB/solar y función powerbank para emergencias.`,
            price: "$35.990",
            image: linternamultifuncional,
            detailImage: linternamultifuncionaldetalle,
            tags: ["360°", "Recargable", "Solar", "Powerbank", "Trípode"],
            stock: 8
          },
          {
            id: 16,
            name: "Cocina de Camping Portátil a Gas con Maleta Sobremesa",
            description: "Mini cocina portátil con encendido automático.",
            longDescription: `Cocina portátil de gas con maleta de transporte, encendido automático y buena eficiencia en consumo de gas.`,
            price: "$35.990",
            image: cocinacamping,
            detailImage: cocinacampingdetalle,
            tags: ["Portátil", "Gas butano", "Maleta", "Encendido automático", "Camping"],
            stock: 3
          }
        ];

        const foundProduct = mockProducts.find(p => p.id === parseInt(id, 10));
        setProduct(foundProduct || null);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!product) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h4">Producto no encontrado</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">{product.name}</Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
        {product.price}
      </Typography>

      <Box
        component="img"
        src={product.detailImage || product.image}
        alt={product.name}
        sx={{
          maxWidth: '100%',
          height: 'auto',
          display: 'block',
          margin: '20px 0',
          borderRadius: 2,
          boxShadow: 3,
          maxHeight: 500,
          objectFit: 'contain'
        }}
      />

      <Typography variant="body1" paragraph>
        {product.longDescription || product.description}
      </Typography>

      <Typography variant="body1" color={product.stock > 0 ? 'text.primary' : 'error'} sx={{ mb: 2 }}>
        {product.stock > 0 ? `Disponibilidad: En stock (${product.stock})` : 'Sin stock por el momento'}
      </Typography>

      {/* BOTÓN / WALLET DE MERCADO PAGO */}
      <Box sx={{ mt: 3 }}>
        {preferenceId ? (
          <Wallet
            initialization={{ preferenceId }}
            customization={{ texts: { valueProp: 'smart_option' } }}
          />
        ) : (
          <Button variant="contained" disabled>
            Preparando pago...
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ProductDetailPage;
// ...existing code...