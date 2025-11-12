// src/components/TopBar.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate, Link } from "react-router-dom";

const CATEGORIES = [
  // Usamos los mismos textos que aparecen en tus "tags"
  "Accesorios",
  "Automotor",
  "Bluetooth",
  "Camping",
  "Cocina",
  "DIY",
  "Herramientas",
  "Iluminación",
  "Powerbank",
  "Recargable",
  "Solar",
  "Tecnología",
  "Universal",
];

export default function TopBar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileEl, setMobileEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const openMobile = Boolean(mobileEl);

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleOpenMobile = (e) => setMobileEl(e.currentTarget);
  const handleCloseMobile = () => setMobileEl(null);

  const goTag = (tag) => {
    handleClose();
    handleCloseMobile();
    navigate(`/?tag=${encodeURIComponent(tag)}`);
  };

  return (
    <AppBar position="sticky" elevation={1} sx={{ bgcolor: "white", color: "text.primary" }}>
      <Toolbar sx={{ gap: 2 }}>
        {/* Menú hamburguesa (mobile) */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton size="large" onClick={handleOpenMobile}>
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={mobileEl} open={openMobile} onClose={handleCloseMobile}>
            <MenuItem component={Link} to="/" onClick={handleCloseMobile}>
              Inicio
            </MenuItem>
            <MenuItem onClick={handleOpen}>Productos <ArrowDropDownIcon /></MenuItem>
            {CATEGORIES.map((c) => (
              <MenuItem key={c} onClick={() => goTag(c)} sx={{ pl: 4 }}>
                {c}
              </MenuItem>
            ))}
            <MenuItem component={Link} to="/cart" onClick={handleCloseMobile}>
              Carrito
            </MenuItem>
          </Menu>
        </Box>

        {/* Logo / Marca */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ textDecoration: "none", color: "inherit", fontWeight: 700, flexShrink: 0 }}
        >
          Virtual Tienda
        </Typography>

        {/* Espaciador */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Navegación desktop */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <Button component={Link} to="/" color="inherit">Inicio</Button>

          <Button
            color="inherit"
            endIcon={<ArrowDropDownIcon />}
            onClick={handleOpen}
          >
            Productos
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            {CATEGORIES.map((c) => (
              <MenuItem key={c} onClick={() => goTag(c)}>
                {c}
              </MenuItem>
            ))}
          </Menu>

          <Button component={Link} to="/cart" color="inherit">Carrito</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
