import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cartContext';
import { Link } from 'react-router-dom';
import ensendedorusb from "./assets/ensendedorusb.png";
import compresor from "./assets/compresor.png";
import compresordetalle from "./assets/compresordetalle.png";
import kitsoldador from "./assets/kitsoldador.jpg";
import ensendedordetalle from "./assets/ensendedordetalle.png"; 
import kitsoldadordetalle from "./assets/kitsoldadordetalle.jpg"; 
import kitemergencia from './assets/kitemergencia.jpg'
import taladroinalambrico98v from './assets/taladroinalambrico98v.png'
import taladroinalambrico98vdetallado from './assets/taladroinalambrico98vdetallado.png'
import taladropequeñotasbel from "./assets/taladropequeñotasbel.jpg"; 
import taladropequeñotasbeldetalle from "./assets/taladropequeñotasbeldetalle.jpg"; 
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
import lamparadeemergencia from "./assets/lamparadeemergencia.webp";
import lamparadeemergenciadetalle from "./assets/lamparadeemergenciadetalle.webp";
import powerbanksolar from "./assets/powerbanksolar.png";
import powerbanksolardetalle from "./assets/powerbanksolardetalle.jpg";
import linternamultifuncional from "./assets/linternamultifuncional.jpg";
import linternamultifuncionaldetalle from "./assets/linternamultifuncionaldetalle.webp";
import cocinacamping from "./assets/cocinacamping.png";
import cocinacampingdetalle from "./assets/cocinacampingdetalle.png";
import { auth, provider, signInWithPopup, signInWithRedirect, getRedirectResult } from '../firebase';
import { signOut } from 'firebase/auth';

import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Box, 
  useMediaQuery, 
  Button, 
  Badge,
  TextField,
  InputAdornment,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Fade,
  ClickAwayListener
} from '@mui/material';
import { 
  WhatsApp, 
  Instagram, 
  Facebook, 
  Person, 
  ShoppingCart, 
  Search, 
  Close 
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

// Importa tu logo
import logotiendavirtual from './assets/logotiendavirtual.png';

// Mock de productos para la búsqueda (deberías importar tus productos reales)
const mockProducts = [
  // ... (tu array de productos, igual que antes)
  // No lo repito aquí por espacio, pero mantenlo igual que en tu código original.
  // ...
];

const Logo = ({ onClick }) => {
  return (
    <Box 
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        mr: { xs: 1, md: 4 },
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)'
        }
      }}
    >
      <img 
        src={logotiendavirtual} 
        alt="Logo Virtual Tienda" 
        style={{ 
          height: '100px',
          width: 'auto',
          maxWidth: '200px',
          objectFit: 'contain',
          transition: 'all 0.3s ease',
        }} 
      />
    </Box>
  );
};

const Header = () => {
  const theme = useTheme();
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [elevated, setElevated] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Detectar si es un dispositivo móvil
  const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Login Google
  const handleGoogleRegister = async () => {
    try {
      if (isMobileDevice) {
        await signInWithRedirect(auth, provider);
      } else {
        const result = await signInWithPopup(auth, provider);
        if (result && result.user) setUser(result.user);
      }
    } catch (error) {
      console.error("Error en el registro:", error);
    }
  };

  // Efecto para manejar el resultado de la redirección (móvil)
  useEffect(() => {
    const handleRedirectResultAsync = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result && result.user) setUser(result.user);
      } catch (error) {
        console.error("Error al manejar redirección:", error);
      }
    };
    handleRedirectResultAsync();
  }, []);

  // Función para hacer scroll suave al inicio
  const scrollToTop = () => {
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Función para abrir chat de WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = '5492612161271';
    const message = encodeURIComponent('Hola, estoy interesado en sus productos.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  // Alternar visibilidad del buscador
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setTimeout(() => {
        if (searchRef.current) {
          searchRef.current.focus();
        }
      }, 100);
    } else {
      setSearchTerm('');
      setSearchResults([]);
    }
  };

  // Cerrar el buscador al hacer clic fuera
  const handleClickAway = () => {
    if (searchOpen) {
      setSearchOpen(false);
      setSearchTerm('');
      setSearchResults([]);
    }
  };

  // Filtrar productos según el término de búsqueda
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }
    const term = searchTerm.toLowerCase();
    const results = mockProducts.filter(product =>
      product.name.toLowerCase().includes(term) ||
      (product.tags && product.tags.some(tag => tag.toLowerCase().includes(term)))
    );
    setSearchResults(results.slice());
  }, [searchTerm]);

  // Efecto para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      setElevated(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manejador global de errores para evitar mensajes en consola
  useEffect(() => {
    const handleUnhandledRejection = (event) => {
      if (event.reason?.message?.includes('window.closed') || 
          event.reason?.code === 'auth/popup-closed-by-user') {
        event.preventDefault();
      }
    };
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <AppBar
        position="sticky"
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          boxShadow: elevated ? theme.shadows[3] : 'none',
          borderBottom: elevated ? 'none' : '1px solid rgba(0, 0, 0, 0.12)',
          py: 1,
          transition: 'all 0.3s ease',
          top: 0,
          zIndex: theme.zIndex.appBar + 100
        }}
      >
        <Toolbar sx={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: 1200,
          margin: '0 auto',
          width: '100%',
          px: { xs: 1, sm: 2 },
          flexDirection: isMobile && searchOpen ? 'column' : 'row'
        }}>
          {/* Logo con función para scroll suave */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            mb: isMobile && searchOpen ? 2 : 0
          }}>
            <Logo onClick={scrollToTop} />

            {/* En móviles: Botón de búsqueda cuando no está abierto */}
            {isMobile && !searchOpen && (
              <IconButton
                onClick={toggleSearch}
                sx={{
                  ml: 1,
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'rgba(63, 81, 181, 0.1)',
                  }
                }}
              >
                <Search />
              </IconButton>
            )}
          </Box>

          {/* Buscador */}
          <Box sx={{
            position: 'relative',
            width: isMobile ? '100%' : '40%',
            maxWidth: 600,
            mb: isMobile && searchOpen ? 2 : 0,
            display: searchOpen || !isMobile ? 'block' : 'none'
          }}>
            <TextField
              inputRef={searchRef}
              fullWidth
              variant="outlined"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
                endAdornment: searchTerm && (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      onClick={() => setSearchTerm('')}
                    >
                      <Close fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  boxShadow: theme.shadows[1],
                  '& fieldset': {
                    border: 'none',
                  },
                }
              }}
            />

            {/* Resultados de búsqueda */}
            {searchResults.length > 0 && (
              <Fade in={searchResults.length > 0}>
                <Paper sx={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  zIndex: 1000,
                  mt: 1,
                  boxShadow: theme.shadows[3],
                  maxHeight: 300,
                  overflowY: 'auto'
                }}>
                  <List>
                    {searchResults.map(product => (
                      <ListItem
                        key={product.id}
                        component={Link}
                        to={`/products/${product.id}`}
                        onClick={() => {
                          setSearchOpen(false);
                          setSearchTerm('');
                          setSearchResults([]);
                        }}
                        sx={{
                          '&:hover': {
                            backgroundColor: 'action.hover'
                          }
                        }}
                      >
                        <ListItemAvatar>
                          <Avatar
                            alt={product.name}
                            src={product.image}
                            variant="rounded"
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={product.name}
                          secondary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                {product.price}
                              </Typography>
                              {` — ${product.description}`}
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Fade>
            )}
          </Box>

          {/* Botones de redes sociales y acciones */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 0.5, sm: 1 },
            ml: isMobile ? 0 : 1
          }}>
            {/* En escritorio: Botón de búsqueda */}
            {!isMobile && (
              <IconButton
                onClick={toggleSearch}
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'rgba(63, 81, 181, 0.1)',
                  }
                }}
              >
                <Search />
              </IconButton>
            )}

            {/* Contenedor general de las dos filas */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', sm: 'flex-start' },
                gap: 1
              }}
            >
              {/* Fila de íconos de redes sociales */}
              <Box
                sx={{
                  display: 'flex',
                  gap: { xs: 1, sm: 2 },
                  justifyContent: { xs: 'center', sm: 'flex-start' },
                  flexWrap: 'wrap'
                }}
              >
                <IconButton onClick={openWhatsApp} aria-label="WhatsApp" sx={{ color: 'text.secondary' }}>
                  <WhatsApp sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem' } }} />
                </IconButton>
                <IconButton aria-label="Instagram" sx={{ color: 'text.secondary' }}>
                  <Instagram sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem' } }} />
                </IconButton>
                <IconButton aria-label="Facebook" sx={{ color: 'text.secondary' }}>
                  <Facebook sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem' } }} />
                </IconButton>
              </Box>

              {/* Fila de carrito, registro y buscador*/}
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: { xs: 1, sm: 2 },
                  justifyContent: { xs: 'center', sm: 'flex-start' },
                  alignItems: 'center'
                }}
              >
                <Link to="/cart">
                  <IconButton aria-label="Carrito" sx={{ color: 'text.secondary' }}>
                    <Badge badgeContent={totalItems} color="error">
                      <ShoppingCart sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem' } }} />
                    </Badge>
                  </IconButton>
                </Link>

                {/* Registro/Login Google */}
                {!user ? (
                  <IconButton
                    onClick={handleGoogleRegister}
                    aria-label="Registro"
                    sx={{
                      color: 'text.secondary',
                      p: 0.5,
                      ml: 1
                    }}
                  >
                    <Person sx={{ fontSize: { xs: '1.7rem', sm: '1.8rem' } }} />
                  </IconButton>
                ) : (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar
                      src={user.photoURL}
                      alt={user.displayName}
                      sx={{
                        width: 32,
                        height: 32,
                        border: '2px solid #1976d2',
                        ml: 1
                      }}
                    />
                    {/* Solo muestra el nombre en escritorio */}
                    {!isMobile && (
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {user.displayName}
                      </Typography>
                    )}
                    <Button
                      variant="text"
                      color="secondary"
                      onClick={async () => {
                        await signOut(auth);
                        setUser(null);
                      }}
                      sx={{
                        ml: 1,
                        fontSize: { xs: '0.8rem', sm: '0.875rem' },
                        minWidth: 0,
                        px: 1
                      }}
                    >
                      Logout
                    </Button>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ClickAwayListener>
  );
};

export { mockProducts };
export default Header;