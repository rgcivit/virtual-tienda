// src/components/CategoriesNav.jsx
import React, { useMemo, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Typography,
  Popover,
  Grid,
  Chip,
  useMediaQuery,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Divider,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CategoryIcon from "@mui/icons-material/Category";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

/** UTIL: convierte texto a slug url-friendly */
const slugify = (s = "") =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/** Datos de ejemplo (editá a gusto) */
const CATEGORIES = [
  {
    name: "Electrónica",
    color: "primary",
    items: [
      "Audio & Parlantes",
      "Multimedia para autos",
      "Power Banks",
      "Luces LED / Linternas",
      "Cables & Accesorios",
    ],
  },
  {
    name: "Hogar & Cocina",
    color: "secondary",
    items: ["Filtro de agua", "Cocina camping", "Limpieza", "Organizadores"],
  },
  {
    name: "Herramientas",
    color: "success",
    items: ["Motosierras", "Pulsera magnética", "Guantes LED", "Accesorios"],
  },
  {
    name: "Aventura",
    color: "warning",
    items: ["Infladores", "Camping", "Iluminación exterior"],
  },
];

export default function CategoriesNav({
  onSearch, // opcional: (q) => void
  showBrand, // opcional: mostrar logo/título
  brand,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  // --- Desktop popover state
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // --- Mobile drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState({}); // { [slug]: bool }
  const [q, setQ] = useState("");

  const toggleDrawer = (val) => () => setDrawerOpen(val);

  const handleOpenCategories = (e) => setAnchorEl(e.currentTarget);
  const handleCloseCategories = () => setAnchorEl(null);

  const filteredCats = useMemo(() => {
    if (!q.trim()) return CATEGORIES;
    const query = q.toLowerCase();
    return CATEGORIES.map((c) => ({
      ...c,
      items: c.items.filter(
        (i) => i.toLowerCase().includes(query) || c.name.toLowerCase().includes(query)
      ),
    })).filter((c) => c.items.length > 0 || c.name.toLowerCase().includes(query));
  }, [q]);

  const goTo = (catName, subName) => {
    const catSlug = slugify(catName);
    const subSlug = subName ? slugify(subName) : null;
    const path = subSlug ? `/categoria/${catSlug}/${subSlug}` : `/categoria/${catSlug}`;
    navigate(path);
    // cerrar UI
    handleCloseCategories();
    setDrawerOpen(false);
  };

  const renderDesktop = () => (
    <>
      {/* Botón Categorías */}
      <Button
        color="inherit"
        startIcon={<CategoryIcon />}
        onMouseEnter={handleOpenCategories}
        onClick={handleOpenCategories}
        sx={{ textTransform: "none", fontWeight: 600 }}
      >
        Categorías
      </Button>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleCloseCategories}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        PaperProps={{
          sx: {
            mt: 1,
            px: 2,
            py: 2,
            borderRadius: 2,
            width: 720,
            maxWidth: "calc(100vw - 32px)",
          },
          onMouseLeave: handleCloseCategories,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <SearchIcon fontSize="small" />
          <TextField
            size="small"
            placeholder="Buscar en categorías…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            fullWidth
          />
        </Box>

        <Grid container spacing={2}>
          {filteredCats.map((cat) => (
            <Grid item xs={12} sm={6} md={6} key={cat.name}>
              <Box sx={{ mb: 1 }}>
                <Chip
                  label={cat.name}
                  color={cat.color || "default"}
                  variant="filled"
                  sx={{ fontWeight: 700 }}
                  onClick={() => goTo(cat.name)}
                />
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                {cat.items.map((sub) => (
                  <Button
                    key={sub}
                    onClick={() => goTo(cat.name, sub)}
                    sx={{
                      justifyContent: "flex-start",
                      textTransform: "none",
                      color: "text.primary",
                    }}
                  >
                    {sub}
                  </Button>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Popover>
    </>
  );

  const renderMobile = () => (
    <>
      <IconButton
        color="inherit"
        onClick={toggleDrawer(true)}
        aria-label="Abrir menú"
        edge="start"
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 300, p: 2, display: "flex", flexDirection: "column", gap: 1 }}
          role="presentation"
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CategoryIcon />
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Categorías
            </Typography>
          </Box>

          <TextField
            size="small"
            placeholder="Buscar en categorías…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            InputProps={{ startAdornment: <SearchIcon sx={{ mr: 1 }} /> }}
          />

          <Divider sx={{ my: 1 }} />

          <List dense disablePadding>
            {filteredCats.map((cat) => {
              const key = slugify(cat.name);
              const open = !!openGroup[key];
              return (
                <Box key={cat.name}>
                  <ListItemButton
                    onClick={() => setOpenGroup((s) => ({ ...s, [key]: !open }))}
                  >
                    <ListItemText
                      primary={cat.name}
                      primaryTypographyProps={{ fontWeight: 700 }}
                      onClick={(e) => {
                        // si se toca el texto principal, ir a la categoría
                        e.stopPropagation();
                        goTo(cat.name);
                      }}
                    />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {cat.items.map((sub) => (
                        <ListItemButton
                          key={sub}
                          sx={{ pl: 4 }}
                          onClick={() => goTo(cat.name, sub)}
                        >
                          <ListItemText primary={sub} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                  <Divider />
                </Box>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );

  return (
    <AppBar position="sticky" color="primary" elevation={0}>
      <Toolbar sx={{ gap: 1 }}>
        {isMobile ? (
          <>
            {renderMobile()}
            {showBrand && (
              <Typography sx={{ fontWeight: 800, flexGrow: 1 }}>{brand || "Virtual Tienda"}</Typography>
            )}
          </>
        ) : (
          <>
            {showBrand && (
              <Typography sx={{ fontWeight: 800, mr: 2 }}>{brand || "Virtual Tienda"}</Typography>
            )}
            {renderDesktop()}
            <Box sx={{ flexGrow: 1 }} />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
