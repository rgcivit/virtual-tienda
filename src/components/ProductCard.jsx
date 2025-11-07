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

// Imágenes (mantén los imports que tengas en tu proyecto)
import ensendedorusb from "./assets/ensendedorusb.png";
import compresor from "./assets/compresor.png";
import filtrodeagua from "./assets/filtrodeagua4.jpg";
import ensendedordetalle from "./assets/ensendedordetalle.png";
import filtrodeaguadetalle from "./assets/filtrodeaguadetalle.jpg";
import kitemergencia from './assets/kitemergencia.jpg';
import portavaso from './assets/portavaso (1).jpg';
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
      height: '100%',              // importante: ocupa todo el alto del Grid item
      minHeight: { xs: 520, md: 620 },
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'translateY(-6px)',
        boxShadow: '0 12px 24px rgba(0,0,0,0.12)'
      },
      position: 'relative',
      borderRadius: 2,
      overflow: 'hidden',
      border: '1px solid rgba(0, 0, 0, 0.06)'
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
          bgcolor: theme.palette.primary.main,
          color: 'white',
          fontSize: '0.8rem',
          px: 1.5,
          py: 0.5
        }}
      >
        Vista Rápida
      </Button>

      {/* contenedor imagen: permite mostrar imagen completa */}
      <Box sx={{
        height: { xs: 320, md: 420 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#ffffff',
        p: 1
      }}>
        <Box
          component="img"
          src={product.image}
          alt={product.name}
          sx={{
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'contain',
            display: 'block'
          }}
          onClick={() => onQuickView(product)}
        />
      </Box>

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
              e.stopPropagation();
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

  const handleAddFromModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="quick-view-modal" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(3px)' }}>
      <Box sx={{ width: '80%', maxWidth: 900, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 24, p: 4, position: 'relative', maxHeight: '90vh', overflowY: 'auto' }}>
        <IconButton aria-label="close" onClick={onClose} sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}>
          <CloseIcon />
        </IconButton>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 3, height: 350, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f5f5' }}>
              <img src={product.detailImage || product.image} alt={product.name + " detalle"} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
            </Box>

            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
              <Button onClick={handleAddFromModal} variant="contained" color="primary" size="large" startIcon={<AddShoppingCartIcon />} sx={{ py: 1.5, px: 4, fontWeight: 'bold', letterSpacing: '1px', borderRadius: 1, width: '100%' }} disabled={product.stock !== undefined && product.stock <= 0}>
                {product.stock !== undefined && product.stock <= 0 ? 'Sin stock por el momento' : 'Añadir al carrito'}
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom>{product.name}</Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={4.5} precision={0.5} readOnly sx={{ mr: 1 }} />
              <Typography variant="body2" color="text.secondary">(24 reseñas)</Typography>
            </Box>

            <Typography variant="h5" color="primary" sx={{ mb: 3, fontWeight: 'bold' }}>{product.price}</Typography>

            <Typography variant="body1" paragraph>{product.longDescription || product.description}</Typography>

            <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
              {product.tags?.map((tag, index) => (<Chip key={index} label={tag} color="primary" variant="outlined" />))}
            </Box>

            <Typography variant="body1" color="text.secondary">
              <strong>Disponibilidad:</strong> {product.stock !== undefined ? (product.stock > 0 ? `En stock (${product.stock})` : 'Sin stock por el momento') : 'Consultar stock'}
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Button variant="outlined" color="primary" fullWidth onClick={(e) => { e.preventDefault(); e.stopPropagation(); navigate(`/products/${product.id}`); }}>
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

  const initialProducts = [ /* ...mantén tu lista completa de productos aquí (igual que antes) ... */ ];

  const [products, setProducts] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (product) => { setSelectedProduct(product); setModalOpen(true); };
  const handleCloseModal = () => { setModalOpen(false); };

  const handleAddToCart = (product) => {
    const idx = products.findIndex(p => p.id === product.id);
    if (idx === -1) return;
    const currentStock = products[idx].stock ?? Infinity;
    if (currentStock <= 0) { alert('Sin stock por el momento'); return; }
    addToCart({ ...product, quantity: 1 });
    const updated = [...products]; updated[idx] = { ...updated[idx], stock: currentStock - 1 };
    setProducts(updated);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4, backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Typography variant="h4" component="h1" sx={{ textAlign: 'center', mb: 4, fontWeight: 700, color: 'primary.main', textTransform: 'uppercase', letterSpacing: 1 }}>
        Productos Destacados
      </Typography>

      {cart.length > 0 && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">Productos en el carrito:</Typography>
          <ul>
            {cart.map((item, idx) => (<li key={idx}>{item.name} - {item.price} {item.quantity ? `x${item.quantity}` : ''}</li>))}
          </ul>
        </Box>
      )}

      {/* Grid container con alignItems stretch para que los Grid items llenen altura */}
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
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
              display: 'flex',       // importante: permite que el Card (height:100%) llene el espacio
              alignItems: 'stretch',
              justifyContent: 'center'
            }}
          >
            <ProductCard product={product} onQuickView={handleOpenModal} onAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>

      <QuickViewModal product={selectedProduct} open={modalOpen} onClose={handleCloseModal} onAddToCart={handleAddToCart} />
    </Container>
  );
};

export default ProductGrid;
// ...existing code...