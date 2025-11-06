// ...existing code...
import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Modal,
  Grid,
  IconButton,
  Rating,
  Chip,
  useTheme,
  Container
} from "@mui/material";
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";

// Imágenes
import ensendedorusb from "./assets/ensendedorusb.png";
import compresor from "./assets/compresor.png";
import filtrodeagua from "./assets/filtrodeagua4.jpg";
import ensendedordetalle from "./assets/ensendedordetalle.png";
import filtrodeaguadetalle from "./assets/filtrodeaguadetalle.jpg";
import kitemergencia from './assets/kitemergencia.jpg';
import portavaso from './assets/portavaso (1).jpg'
import portavasodetalle from './assets/portavasodetalle.jpg';
import infladorportatil from "./assets/infladorportatil.jpg";
import infladorportatildetalle from "./assets/infladorportatildetalle.jpg";
import PowerBank from "./assets/PowerBank.jpg";
import PowerBankdetalle from "./assets/PowerBankdetalle.jpg";
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

const ProductCard = ({ product, onQuickView, onAddToCart }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Card sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
      },
      position: 'relative',
      borderRadius: 2,
      overflow: 'hidden',
      border: '1px solid rgba(0, 0, 0, 0.1)'
    }}>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<ZoomInIcon />}
        onClick={() => onQuickView(product)}
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          zIndex: 1,
          borderRadius: 20,
          fontWeight: 'bold',
          textTransform: 'none',
          boxShadow: 3,
          '&:hover': {
            boxShadow: 6,
            transform: 'scale(1.05)'
          },
          transition: 'all 0.3s ease',
          bgcolor: theme.palette.primary.main,
          color: 'white',
          fontSize: '0.8rem',
          px: 1.5,
          py: 0.5
        }}
      >
        Vista Rápida
      </Button>

      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        sx={{
          objectFit: 'cover',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)'
          },
          p: 1,
          backgroundColor: '#f8f9fa',
          cursor: 'pointer'
        }}
        onClick={() => onQuickView(product)}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600 }}>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          mb: 1,
          minHeight: '60px'
        }}>
          {product.description}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" color="primary" sx={{ mt: 'auto', fontWeight: 'bold' }}>
            {product.price}
          </Typography>
          {product.stock !== undefined && (
            product.stock > 0
              ? <Chip label={`Stock: ${product.stock}`} color="primary" size="small" />
              : <Typography color="error" sx={{ fontWeight: 700, ml: 2 }}>Sin stock por el momento</Typography>
          )}
        </Box>

        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            sx={{ textTransform: 'none', fontWeight: 600 }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation(); // evitar que otros handlers del card se ejecuten
              navigate(`/products/${product.id}`);
            }}
          >
            Detalle
          </Button>
        </Box>
      </CardContent>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 'auto', borderRadius: 0, py: 1.5, fontWeight: 'bold', letterSpacing: '1px', fontSize: '1rem' }}
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); onAddToCart(product); }}
        disabled={product.stock !== undefined && product.stock <= 0}
      >
        Añadir al carrito
      </Button>
    </Card>
  );
};

const QuickViewModal = ({ product, open, onClose, onAddToCart }) => {
  const navigate = useNavigate();

  if (!product) return null;

  // Maneja el clic en "Añadir al carrito" desde el modal:
  const handleAddFromModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('QuickView: añadiendo producto al carrito ->', product?.id);
    onAddToCart(product);
    // cierra el modal para feedback inmediato
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="quick-view-modal"
      aria-describedby="quick-view-modal-description"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(3px)'
      }}
    >
      <Box sx={{
        width: '80%',
        maxWidth: 900,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
        position: 'relative',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 3,
              height: 350,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: '#f5f5f5'
            }}>
              <img
                src={product.detailImage || product.image}
                alt={product.name + " detalle"}
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain'
                }}
              />
            </Box>

            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
              <Button
                onClick={handleAddFromModal}
                variant="contained"
                color="primary"
                size="large"
                startIcon={<AddShoppingCartIcon />}
                sx={{
                  py: 1.5,
                  px: 4,
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  borderRadius: 1,
                  width: '100%'
                }}
                disabled={product.stock !== undefined && product.stock <= 0}
              >
                {product.stock !== undefined && product.stock <= 0 ? 'Sin stock por el momento' : 'Añadir al carrito'}
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom>
              {product.name}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={4.5} precision={0.5} readOnly sx={{ mr: 1 }} />
              <Typography variant="body2" color="text.secondary">(24 reseñas)</Typography>
            </Box>

            <Typography variant="h5" color="primary" sx={{ mb: 3, fontWeight: 'bold' }}>
              {product.price}
            </Typography>

            <Typography variant="body1" paragraph>
              {product.longDescription || product.description}
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
              {product.tags?.map((tag, index) => (
                <Chip key={index} label={tag} color="primary" variant="outlined" />
              ))}
            </Box>

            <Typography variant="body1" color="text.secondary">
              <strong>Disponibilidad:</strong> {product.stock !== undefined ? (product.stock > 0 ? `En stock (${product.stock})` : 'Sin stock por el momento') : 'Consultar stock'}
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigate(`/products/${product.id}`);
                }}
              >
                Ver detalle
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

const ProductGrid = () => {
  const { cart, addToCart } = useCart();

  // Lista completa de productos con campo stock
  const initialProducts = [
    {
      id: 1,
      name: "Encendedor Recargable USB con Linterna Negro",
      description: "El encendedor multipropósito es una innovación de vanguardia que hará que tus momentos sean más prácticos y emocionantes que nunca! Este versátil dispositivo es mucho más que un simple encendedor; es una herramienta multifuncional que combina elegancia y practicidad.",
      longDescription: "Este encendedor USB es recargable y tiene un diseño moderno y compacto. Perfecto para llevar contigo a todas partes. Con carga rápida USB-C y luz indicadora. Disponible en varios colores. Además, incluye una potente linterna LED que lo hace ideal para acampadas, emergencias o uso diario.",
      price: "$11.990",
      image: ensendedorusb,
      detailImage: ensendedordetalle,
      tags: ["Recargable", "Portátil", "Linterna LED", "USB-C", "Resistente"],
      stock: 1
    },
    {
      id: 2,
      name: "Grifo con Filtro de Agua ",
      description: "Grifo con Filtro de Agua – Ahorro, limpieza y flexibilidad en tu cocina o baño.",
      longDescription: "Este grifo cuenta con un filtro de agua integrado que garantiza agua limpia y purificada para tu hogar. Su diseño moderno se adapta a cualquier estilo de cocina o baño, y su instalación es rápida y sencilla.",
      price: "$12.990",
      image: filtrodeagua,
      detailImage: filtrodeaguadetalle,
      tags: ["Grifo", "Filtro de agua", "Cocina", "Baño", "Ahorro"],
      stock: 6
    },
    {
      id: 3,
      name: "Soporte Universal para Botella y Celular ",
      description: "¡La solución práctica y resistente para tus salidas en bici, moto o cochecito!.",
      longDescription: `"🚲 Ideal para bici, moto, cochecito o scooter  
🔒 Fijación giratoria con sistema de bloqueo 360°  
📱 Compartimento seguro para tu celular  
🧴 Espacio firme para botella térmica o de plástico  
🧱 Material plástico resistente y liviano (180g)  
📐 Medidas: 20 x 10 x 11 cm  
🎨 Colores disponibles: Azul, Verde y Negro  
🔧 Fácil de instalar y ajustar."`,
      price: "$29.900",
      image: portavaso,
      detailImage: portavasodetalle,
      tags: ["Soporte", "Universal", "Botella", "Celular", "Bici"],
      stock: 3
    },
    {
      id: 4,
      name: "Inflador Digital Portátil .",
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
      description: "Fácil de trasladar y guardar y podes cargar tu celular!",
      longDescription: "La linterna doméstica con kit de emergencia es la solución ideal para quienes buscan una fuente de luz confiable tanto en interiores como en exteriores.",
      price: "$30.000",
      image: kitemergencia,
      tags: ["Emergencia", "Linterna 50W", "Powerbank", "Solar", "USB"],
      stock: 5
    },
    {
      id: 6,
      name: "Power Bank 20.000 Mah 3 Entradas con Linterna",
      description: "Power Bank 20.000 Mah 3 Entradas con Linterna.",
      longDescription: "El Power Bank 20.000 Mah con 3 Entradas y Linterna es la solución ideal para mantener tus dispositivos móviles siempre cargados.",
      price: "$27.990",
      image: PowerBank,
      detailImage: PowerBankdetalle,
      tags: ["20.000 mAh", "3 entradas", "Linterna", "Portátil", "USB"],
      stock: 7
    },
    {
      id: 7,
      name: "Bolso Mochila Bandolera Cruzada Antirrobo en 4 Colores",
      description: "Bloqueo antirrobo: con función antirrobo, es práctico y conveniente.",
      longDescription: "Cierre antirrobo, bolsillo oculto, puerto de carga USB, material Oxford resistente al desgaste.",
      price: "$59.990",
      image: bolsobanano,
      detailImage: bolsobananodetalle,
      tags: ["Antirrobo", "USB", "Impermeable", "4 colores", "Organización"],
      stock: 4
    },
    {
      id: 8,
      name: "Linterna con Luz Frontal Blanca y Lateral Roja Solar y Recargable",
      description: "Esta linterna multifuncional es ideal para emergencias, camping o uso diario en el hogar.",
      longDescription: "Cuenta con luz frontal blanca y lateral roja, alimentación solar y recargable, y carga USB.",
      price: "$39.990",
      image: linternaconluzlateral,
      detailImage: linternaconluzlateraldetalle,
      tags: ["Linterna", "Recargable", "Camping", "Senderismo", "Emergencia"],
      stock: 6
    },
    {
      id: 9,
      name: "Inversor Convertidor de Corriente 200W para Auto 12V 220V",
      description: "El inversor convertidor de corriente YQ-2000WD de 200W transforma la corriente de 12V a 220V.",
      longDescription: "Ideal para camping y viajes por carretera, con salida USB integrada.",
      price: "$129.990",
      image: inversordecorriente,
      detailImage: inversordecorrientedetalle,
      tags: ["220v", "Inversor", "Power Bank", "Camping"],
      stock: 2
    },
    {
      id: 10,
      name: "Intercomunicador Audífonos para Casco de Motos Bluetooth Y20",
      description: "Bluetooth Para Casco De Moto Elikidsto Y20: Hifi, Reducción.",
      longDescription: "Intercomunicador con Bluetooth 5, alcance, reducción de ruido y resistencia al agua IPX6.",
      price: "$89.990",
      image: intercomunicadorcasco,
      detailImage: intercomunicadorcascodetalle,
      tags: ["Inalámbrica", "Bluetooth", "IPX6", "Larga duración", "Comunicación"],
      stock: 3
    },
    {
      id: 11,
      name: "Nerdminer 2 Miner Btc Solo Lotter 55-60 Kh/s",
      description: "Diseño exclusivo: la máquina de lotería BTC adopta la última tecnología.",
      longDescription: "Alta eficiencia y bajo consumo, modo Solo. Color aleatorio.",
      price: "$69.990",
      image: nerdminer1,
      detailImage: nerdminer3detalle,
      tags: ["Opera a 55-60 Kh/s", "Pantalla 2.8\"", "Eficiencia", "PCB", "Modo lotería"],
      stock: 1
    },
    {
      id: 12,
      name: "Compresor de Aire Portátil 12v",
      description: "El Compresor De Aire Calgary 150 Psi Para Vehículos 12v.",
      longDescription: "Mini compresor portátil para inflar neumáticos, colchones y pelotas. Incluye accesorios.",
      price: "$40.000",
      image: compresor,
      detailImage: compresordetalle,
      tags: ["24L", "Silencioso", "Portátil", "8 bar", "Accesorios"],
      stock: 2
    },
    {
      id: 13,
      name: "Luz De Emergencia Led Solar 5 Faros 2029",
      description: "Ilumina tus espacios de una manera eficiente y ecológica con la Ampolleta Solar Led Recargable de 5 Caras.",
      longDescription: "Foco recargable solar, forma bulbo de 5 caras, luz LED y recarga solar.",
      price: "$10.990",
      image: lamparadeemergencia,
      detailImage: lamparadeemergenciadetalle,
      tags: ["Recargable", "Luz LED", "360°", "Solar", "400 lúmenes"],
      stock: 12
    },
    {
      id: 14,
      name: "Power Bank Solar y Corriente con 4 Cables de 20.000Mah",
      description: "La Batería Genérica Power Bank Solar de 20,000mAh.",
      longDescription: "Power bank 20000mAh con carga solar, incluye 4 cables y linterna.",
      price: "$26.990",
      image: powerbanksolar,
      detailImage: powerbanksolardetalle,
      tags: ["20000 mAh", "Solar", "4 cables", "Linterna", "USB"],
      stock: 5
    },
    {
      id: 15,
      name: "Linterna Foco Multifuncional Solar o Recargable USB",
      description: "Linterna foco solar o recargable multifuncional.",
      longDescription: "Versátil, 3 modos de luz, autonomía y carga USB/solar. También sirve como powerbank en emergencia.",
      price: "$35.990",
      image: linternamultifuncional,
      detailImage: linternamultifuncionaldetalle,
      tags: ["360°", "Recargable", "Solar", "Powerbank", "Trípode"],
      stock: 8
    },
    {
      id: 16,
      name: "Cocina de Camping Portátil a Gas con Maleta Sobremesa",
      description: "Mini cocina de gas de un solo quemador con encendido automático.",
      longDescription: "Maleta de transporte, encendido automático, económico en consumo y seguro para camping.",
      price: "$35.990",
      image: cocinacamping,
      detailImage: cocinacampingdetalle,
      tags: ["Portátil", "Gas butano", "Maleta", "Encendido automático", "Camping"],
      stock: 3
    }
  ];

  const [products, setProducts] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Comprueba stock antes de añadir y decrementa stock localmente
  const handleAddToCart = (product) => {
    console.log('handleAddToCart llamado con:', product?.id);
    const idx = products.findIndex(p => p.id === product.id);
    if (idx === -1) {
      console.warn('Producto no encontrado en lista local', product);
      return;
    }

    const currentStock = products[idx].stock ?? Infinity;
    if (currentStock <= 0) {
      alert('Sin stock por el momento');
      return;
    }

    addToCart({ ...product, quantity: 1 });

    const updated = [...products];
    updated[idx] = { ...updated[idx], stock: currentStock - 1 };
    setProducts(updated);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4, backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Typography variant="h4" component="h1" sx={{
        textAlign: 'center',
        mb: 4,
        fontWeight: 700,
        color: 'primary.main',
        textTransform: 'uppercase',
        letterSpacing: 1
      }}>
        Productos Destacados
      </Typography>

      {cart.length > 0 && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">Productos en el carrito:</Typography>
          <ul>
            {cart.map((item, idx) => (
              <li key={idx}>{item.name} - {item.price} {item.quantity ? `x${item.quantity}` : ''}</li>
            ))}
          </ul>
        </Box>
      )}

      <Grid container spacing={4} justifyContent="center">
        {products.map(product => (
          <Grid
            item
            key={product.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2.4}
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <ProductCard
              product={product}
              onQuickView={handleOpenModal}
              onAddToCart={handleAddToCart}
            />
          </Grid>
        ))}
      </Grid>

      <QuickViewModal
        product={selectedProduct}
        open={modalOpen}
        onClose={handleCloseModal}
        onAddToCart={handleAddToCart}
      />
    </Container>
  );
};

export default ProductGrid;
// ...existing code...