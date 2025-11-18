// src/components/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useCart } from '../context/cartContext';
import { signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from '../firebase';
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
  ClickAwayListener,
  Drawer,
  Divider,
  ListItemButton,
} from '@mui/material';
import {
  WhatsApp,
  Instagram,
  Facebook,
  Person,
  ShoppingCart,
  Search,
  Close,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

import logotiendavirtual from './assets/logotiendavirtual.png';
import { mockProducts } from '../data/mockProducts';

const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const CATEGORIES = [
  { slug: 'todos',     label: 'Todos los productos' },
  { slug: 'tecnologia', label: 'Tecnología & Gadgets' },
  { slug: 'auto',       label: 'Accesorios para Auto' },
  { slug: 'camping',    label: 'Camping & Outdoor' },
  { slug: 'mascotas',   label: 'Mascotas & Viaje' },
  { slug: 'hogar',      label: 'Hogar y Cocina' },
];

const Logo = ({ onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      mr: { xs: 1, md: 4 },
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)',
      },
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

const Header = () => {
  const theme = useTheme();
  const location = useLocation();
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + (item?.quantity || 0), 0);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [elevated, setElevated] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 👉 categoría activa según la URL (?category=...)
  const params = new URLSearchParams(location.search);
  const activeCategory = params.get('category') || 'todos';

  const handleGoogleRegister = async () => {
    try {
      if (isMobileDevice) {
        await signInWithRedirect(auth, provider);
      } else {
        await signInWithPopup(auth, provider);
      }
    } catch (error) {
      console.error("Error en el registro:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  const openProductDetail = (product) => {
    navigate(`/products/${product.id}`, { state: { product } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSearchOpen(false);
    setSearchTerm('');
    setSearchResults([]);
  };

  const scrollToTop = () => {
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const openWhatsApp = () => {
    const phoneNumber = '5492612161271';
    const message = encodeURIComponent('Hola, estoy interesado en sus productos.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
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

  const handleClickAway = () => {
    if (searchOpen) {
      setSearchOpen(false);
      setSearchTerm('');
      setSearchResults([]);
    }
  };

  // 🔍 filtrado de búsqueda
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }
    const term = searchTerm.toLowerCase();
    const results = mockProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        (product.tags &&
          product.tags.some((tag) => tag.toLowerCase().includes(term)))
    );
    setSearchResults(results.slice());
  }, [searchTerm]);

  // sombra en scroll
  useEffect(() => {
    const handleScroll = () => {
      setElevated(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // evitar errores en consola por popup cerrado
  useEffect(() => {
    const handleUnhandledRejection = (event) => {
      if (
        event.reason?.message?.includes('window.closed') ||
        event.reason?.code === 'auth/popup-closed-by-user'
      ) {
        event.preventDefault();
      }
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  // 👉 navegación por categoría
  const handleCategoryClick = (slug) => {
    if (slug === 'todos') {
      navigate('/products');
    } else {
      navigate(`/products?category=${slug}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSearchOpen(false);
    setSearchTerm('');
    setSearchResults([]);
    setMobileMenuOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <>
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
            zIndex: theme.zIndex.appBar + 100,
          }}
        >
          {/* Barra principal */}
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              maxWidth: 1200,
              margin: '0 auto',
              width: '100%',
              px: { xs: 1, sm: 2 },
              flexDirection: isMobile && searchOpen ? 'column' : 'row',
            }}
          >
            {/* Logo + menú hamburguesa + icono buscar (mobile) */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: isMobile && searchOpen ? 2 : 0,
              }}
            >
              {isMobile && (
                <IconButton
                  onClick={() => setMobileMenuOpen(true)}
                  sx={{ mr: 1, color: 'text.secondary' }}
                  aria-label="Abrir menú"
                >
                  <MenuIcon />
                </IconButton>
              )}

              <Logo onClick={scrollToTop} />

              {isMobile && !searchOpen && (
                <IconButton
                  onClick={toggleSearch}
                  sx={{
                    ml: 1,
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'rgba(63, 81, 181, 0.1)',
                    },
                  }}
                >
                  <Search />
                </IconButton>
              )}
            </Box>

            {/* Buscador */}
            <Box
              sx={{
                position: 'relative',
                width: isMobile ? '100%' : '40%',
                maxWidth: 600,
                mb: isMobile && searchOpen ? 2 : 0,
                display: searchOpen || !isMobile ? 'block' : 'none',
              }}
            >
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
                  },
                }}
              />

              {searchResults.length > 0 && (
                <Fade in={searchResults.length > 0}>
                  <Paper
                    sx={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      right: 0,
                      zIndex: 1000,
                      mt: 1,
                      boxShadow: theme.shadows[3],
                      maxHeight: 300,
                      overflowY: 'auto',
                    }}
                  >
                    <List>
                      {searchResults.map((product) => (
                        <ListItem
                          key={product.id}
                          button
                          onClick={() => openProductDetail(product)}
                          sx={{
                            '&:hover': {
                              backgroundColor: 'action.hover',
                            },
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
                              <>
                                <Typography
                                  sx={{ display: 'inline' }}
                                  component="span"
                                  variant="body2"
                                  color="text.primary"
                                >
                                  {product.price}
                                </Typography>
                                {` — ${product.description}`}
                              </>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Fade>
              )}
            </Box>

            {/* Iconos derecha (redes, carrito, login) */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 0.5, sm: 1 },
                ml: isMobile ? 0 : 1,
              }}
            >
              {!isMobile && (
                <IconButton
                  onClick={toggleSearch}
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'rgba(63, 81, 181, 0.1)',
                    },
                  }}
                >
                  <Search />
                </IconButton>
              )}

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: { xs: 'center', sm: 'flex-start' },
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: { xs: 1, sm: 2 },
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                    flexWrap: 'wrap',
                  }}
                >
                  <IconButton
                    onClick={openWhatsApp}
                    aria-label="WhatsApp"
                    sx={{ color: 'text.secondary' }}
                  >
                    <WhatsApp
                      sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem' } }}
                    />
                  </IconButton>
                  <IconButton
                    aria-label="Instagram"
                    sx={{ color: 'text.secondary' }}
                  >
                    <Instagram
                      sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem' } }}
                    />
                  </IconButton>
                  <IconButton
                    aria-label="Facebook"
                    sx={{ color: 'text.secondary' }}
                  >
                    <Facebook
                      sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem' } }}
                    />
                  </IconButton>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: { xs: 1, sm: 2 },
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                    alignItems: 'center',
                  }}
                >
                  <Link to="/cart">
                    <IconButton
                      aria-label="Carrito"
                      sx={{ color: 'text.secondary' }}
                    >
                      <Badge badgeContent={totalItems} color="error">
                        <ShoppingCart
                          sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem' } }}
                        />
                      </Badge>
                    </IconButton>
                  </Link>

                  {!user ? (
                    <IconButton
                      onClick={handleGoogleRegister}
                      aria-label="Registro"
                      sx={{
                        color: 'text.secondary',
                        p: 0.5,
                        ml: 1,
                      }}
                    >
                      <Person
                        sx={{ fontSize: { xs: '1.7rem', sm: '1.8rem' } }}
                      />
                    </IconButton>
                  ) : (
                    <Box
                      sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                    >
                      <Avatar
                        src={user.photoURL || ''}
                        alt={user.displayName || ''}
                        sx={{
                          width: 32,
                          height: 32,
                          border: '2px solid #1976d2',
                          ml: 1,
                        }}
                      />
                      {!isMobile && (
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 600 }}
                        >
                          {user.displayName}
                        </Typography>
                      )}
                      {isMobile && (
                        <IconButton
                          onClick={handleGoogleRegister}
                          aria-label="Perfil"
                          sx={{
                            color: 'text.secondary',
                            p: 0.5,
                            ml: 1,
                          }}
                        >
                          <Person
                            sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem' } }}
                          />
                        </IconButton>
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
                          px: 1,
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

          {/* Barra de categorías (solo desktop) */}
          {!isMobile && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                py: 1,
                borderTop: '1px solid rgba(0,0,0,0.08)',
                bgcolor: 'background.paper',
              }}
            >
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.slug;

                return (
                  <Button
                    key={cat.slug}
                    onClick={() => handleCategoryClick(cat.slug)}
                    variant={isActive ? 'contained' : 'text'}
                    color={isActive ? 'primary' : 'inherit'}
                    sx={{
                      textTransform: 'none',
                      fontSize: 14,
                      fontWeight: isActive ? 700 : 500,
                      borderRadius: 999,
                      px: 2.5,
                      color: isActive ? 'common.white' : 'text.primary',
                      bgcolor: isActive ? 'primary.main' : 'transparent',
                      '&:hover': {
                        bgcolor: isActive
                          ? 'primary.dark'
                          : 'rgba(25, 118, 210, 0.08)',
                        color: isActive ? 'common.white' : 'primary.main',
                      },
                    }}
                  >
                    {cat.label}
                  </Button>
                );
              })}
            </Box>
          )}
        </AppBar>

        {/* Botón flotante de WhatsApp solo en Home */}
        {location.pathname === '/' && (
          <Box
            sx={{
              position: 'fixed',
              bottom: 40,
              right: 24,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              zIndex: 1300,
            }}
          >
            <IconButton
              onClick={openWhatsApp}
              aria-label="WhatsApp flotante"
              sx={{
                bgcolor: '#25D366',
                color: '#fff',
                boxShadow: 4,
                '&:hover': {
                  bgcolor: '#1ebe5d',
                },
                width: 64,
                height: 64,
              }}
            >
              <WhatsApp sx={{ fontSize: 38 }} />
            </IconButton>

            <Typography
              variant="caption"
              sx={{
                color: 'tomato',
                bgcolor: '#ffffff',
                px: 1.5,
                py: 0.4,
                borderRadius: 999,
                fontWeight: 600,
                textAlign: 'center',
                maxWidth: 140,
                boxShadow: 2,
                border: '1px solid #ffe0d5',
              }}
            >
              ¿Consultas? ¿Dudas?
            </Typography>
          </Box>
        )}

        {/* Menú lateral (hamburguesa) con categorías */}
        <Drawer
          anchor="left"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <Box sx={{ width: 260 }} role="presentation">
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Categorías
              </Typography>
            </Box>
            <Divider />
            <List>
              {CATEGORIES.map((cat) => (
                <ListItemButton
                  key={cat.slug}
                  onClick={() => handleCategoryClick(cat.slug)}
                >
                  <ListItemText primary={cat.label} />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Drawer>
      </>
    </ClickAwayListener>
  );
};

export default Header;
