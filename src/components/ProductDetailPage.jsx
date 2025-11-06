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
import taladroinalambrico98v from './assets/taladroinalambrico98v.png'
import taladroinalambrico98vdetallado from './assets/taladroinalambrico98vdetallado.png'
import taladropequenotasbel from "./assets/taladropequenotasbel.jpg"; 
import taladropequenotasbeldetalle from "./assets/taladropequenotasbeldetalle.jpg"; 
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
            longDescription: `Este encendedor USB es recargable y tiene un diseño moderno y compacto. Perfecto para llevar contigo a todas partes. Con carga rápida USB-C y luz indicadora. Además incluye una potente linterna LED ideal para acampadas, emergencias o uso diario.`,
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
            longDescription: `Diseño de la cabeza del grifo de la cocina: el filtro puede reducir el consumo de agua. La presión del filtro de la ducha ayuda a ahorrar agua entre 40% y 70%. La temperatura del rociador no debe exceder los 60°C. Fácil de instalar y limpiar, compatible con la mayoría de grifos. Tamaño aplicable: diámetro 16-22mm.`,
            price: "$12.990",
            image: filtrodeagua,
            detailImage: filtrodeaguadetalle,
            tags: ["Grifo", "Filtro de agua", "Cocina", "Baño", "Ahorro"],
            stock: 6
          },
          {
            id: 3,
            name: "Taladro Portátil Recargable Inalámbrico 98V 2 Baterías y Herramientas",
            description: "Taladro profesional Tasbel con doble batería.",
            longDescription: `Con velocidad variable (0-500 / 0-1400 rpm), torque de 40 N.m, incluye cargador y dos baterías. Ideal para uso doméstico y profesional, viene con accesorios y bolsa de transporte.`,
            price: "$89.990",
            image: taladroinalambrico98v,
            detailImage: taladroinalambrico98vdetallado,
            tags: ["98V", "Doble batería", "40 N.m", "Herramientas", "Tasbel"],
            stock: 2
          },
          {
            id: 4,
            name: "Taladro Pequeño Tasbel con 2 Baterías de 48V.",
            description: "Taladro Inalámbrico Tasbel 48V con 2 Baterías – Compacto y Potente.",
            longDescription: `Diseño ergonómico y liviano. Incluye 2 baterías recargables, velocidad variable, control de torque y portabrocas de cambio rápido. Perfecto para bricolaje y trabajos domésticos.`,
            price: "$39.990",
            image: taladropequenotasbel,
            detailImage: taladropequenotasbeldetalle,
            tags: ["48V", "Compacto", "2 baterías", "Velocidad variable", "Tasbel"],
            stock: 0
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