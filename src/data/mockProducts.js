// src/data/mockProducts.js

// IMPORTS DE IMÁGENES
import ensendedorusb from "../components/assets/ensendedorusb.png";
import ensendedordetalle from "../components/assets/ensendedordetalle.png";

import filtrodeagua from "../components/assets/filtrodeagua4.jpg";
import filtrodeaguadetalle from "../components/assets/filtrodeaguadetalle.jpg";

import portavaso from "../components/assets/portavaso (1).jpg";
import portavasodetalle from "../components/assets/portavasodetalle.jpg";

import infladorportatil from "../components/assets/infladorportatil.jpg";
import infladorportatildetalle from "../components/assets/infladorportatildetalle.jpg";

import restauradorfaros from "../components/assets/restauradorfaros.jpg";
import restauradorfarosdetalle from "../components/assets/restauradorfarosdetalle.jpg";

import gafasinteligentes from "../components/assets/gafasinteligentes.jpg";
import gafasinteligentesdetalle from "../components/assets/gafasinteligentesdetalle.jpg";

import multimedia from "../components/assets/multimedia.jpg";
import multimediadetalle from "../components/assets/multimediadetalle.jpg";

import motosierra from "../components/assets/motosierra.jpg";
import motosierradetalle from "../components/assets/motosierradetalle.jpg";

import guantesled from "../components/assets/guantesled.jpg";
import guantesleddetalle from "../components/assets/guantesleddetalle.jpg";

import pulceramagnetica from "../components/assets/pulceramagnetica.jpg";
import pulceramagneticadetalle from "../components/assets/pulceramagneticadetalle.jpg";

import asientomascotas from "../components/assets/asientomascotas.jpg";
import asientomascotasdetalle from "../components/assets/asientomascotasdetalle.jpg";
import asientomascotasdetalle1 from "../components/assets/asientomascotasdetalle1.jpg";
import asientomascotasdetalle2 from "../components/assets/asientomascotasdetalle2.jpg";

import cubreasiento from "../components/assets/cubreasiento.jpg";
import cubreasientodetalle1 from "../components/assets/cubreasientodetalle1.jpg";
import cubreasientodetalle2 from "../components/assets/cubreasientodetalle2.jpg";
import cubreasientodetalle3 from "../components/assets/cubreasientodetalle3.jpg";
import cubreasientodetalle4 from "../components/assets/cubreasientodetalle4.jpg";
import cubreasientodetalle5 from "../components/assets/cubreasientodetalle5.jpg";

import fitnesswatch from "../components/assets/fitnesswatch.jpg";
import fitnesswatchdetalle1 from "../components/assets/fitnesswatchdetalle1.jpg";
import fitnesswatchdetalle2 from "../components/assets/fitnesswatchdetalle2.jpg";
import fitnesswatchdetalle3 from "../components/assets/fitnesswatchdetalle3.jpg";
import fitnesswatchdetalle4 from "../components/assets/fitnesswatchdetalle4.jpg";
import fitnesswatchdetalle5 from "../components/assets/fitnesswatchdetalle5.jpg";
import fitnesswatchdetalle6 from "../components/assets/fitnesswatchdetalle6.jpg";
import fitnesswatchdetalle7 from "../components/assets/fitnesswatchdetalle7.jpg";
import fitnesswatchdetalle8 from "../components/assets/fitnesswatchdetalle8.jpg";

import powerbanksolar from "../components/assets/powerbanksolar.png";
import powerbanksolardetalle from "../components/assets/powerbanksolardetalle.jpg";

import linternamultifuncional from "../components/assets/linternamultifuncional.jpg";
import linternamultifuncionaldetalle from "../components/assets/linternamultifuncionaldetalle.webp";

import cocinacamping from "../components/assets/cocinacamping.png";
import cocinacampingdetalle from "../components/assets/cocinacampingdetalle.png";

// --------------------------------------------
// LISTA COMPLETA DE PRODUCTOS
// --------------------------------------------

export const mockProducts = [
  {
    id: 1,
    name: "Encendedor Recargable USB con Linterna Negro",
    description: "Encendedor multipropósito recargable con linterna LED, compacto y moderno.",
    longDescription:
      "Este encendedor USB es recargable, con carga rápida USB-C, luz indicadora y linterna LED ideal para camping, emergencias o uso diario.",
    price: "$11.990",
    image: ensendedorusb,
    detailImage: ensendedordetalle,
    tags: ["Recargable", "Portátil", "Linterna LED", "USB-C", "Resistente"],
    stock: 1,
    category: "tecnologia",
  },

  {
    id: 2,
    name: "Grifo con Filtro de Agua",
    description: "Grifo con filtro integrado para agua más limpia y ahorro en tu hogar.",
    longDescription:
      "Este grifo cuenta con un filtro de agua integrado, diseño moderno y fácil instalación para cocina o baño.",
    price: "$12.990",
    image: filtrodeagua,
    detailImage: filtrodeaguadetalle,
    tags: ["Grifo", "Filtro de agua", "Cocina", "Baño", "Ahorro"],
    stock: 6,
    category: "hogar",
  },

  {
    id: 3,
    name: "Soporte Universal para Botella y Celular",
    description:
      "Soporte resistente para botella y celular, ideal para bici, moto o cochecito.",
    longDescription:
      "Fijación giratoria 360°, compartimento seguro para celular y espacio firme para botella.",
    price: "$29.900",
    image: portavaso,
    detailImage: portavasodetalle,
    tags: ["Soporte", "Universal", "Botella", "Celular", "Bici"],
    stock: 3,
    category: "auto",
  },

  {
    id: 4,
    name: "Inflador Digital Portátil",
    description: "Compacto, potente y listo para inflar neumáticos, pelotas y más.",
    longDescription:
      "Batería 4000mAh, 150 PSI máx, pantalla digital, apagado automático y diseño compacto.",
    price: "$55.000",
    image: infladorportatil,
    detailImage: infladorportatildetalle,
    tags: ["Inflador", "Portátil", "Batería", "Digital"],
    stock: 3,
    category: "auto",
  },

  {
    id: 5,
    name: "KIT RESTAURADOR DE FAROS",
    description: "Kit completo para devolver la claridad a los faros opacos o amarillentos.",
    longDescription:
      "Incluye lijas, pasta pulidora, aplicador, cinta de enmascarar y protector UV.",
    price: "$14.990",
    image: restauradorfaros,
    detailImage: restauradorfarosdetalle,
    tags: ["Restaurador", "Pulido", "Auto"],
    stock: 5,
    category: "auto",
  },

  {
    id: 6,
    name: "Lentes Inteligentes con Bluetooth y Audio Integrado",
    description: "Audio, llamadas y estilo en un solo accesorio.",
    longDescription:
      "Bluetooth, control táctil, batería recargable, lentes polarizados UV400.",
    price: "$29.900",
    image: gafasinteligentes,
    detailImage: gafasinteligentesdetalle,
    tags: ["Bluetooth", "Audio", "Estilo", "Tecnología"],
    stock: 3,
    category: "tecnologia",
  },

  {
    id: 7,
    name: "Reproductor Universal para Autos",
    description: "Pantalla táctil 7'' con Bluetooth, USB, SD, radio FM.",
    longDescription:
      "Reproduce MP5/MP4/MP3, entradas USB/SD/AUX, manos libres Bluetooth.",
    price: "$89.990",
    image: multimedia,
    detailImage: multimediadetalle,
    tags: ["Multimedia", "Bluetooth", "Audio", "Auto"],
    stock: 2,
    category: "auto",
  },

  {
    id: 8,
    name: "Mini Motosierra Eléctrica BEKR 24V",
    description: "Potencia portátil para poda y corte de troncos.",
    longDescription:
      "Batería integrada 24V, ligera y portátil, ideal para jardinería y poda.",
    price: "$59.990",
    image: motosierra,
    detailImage: motosierradetalle,
    tags: ["Motosierra", "Eléctrica", "Portátil"],
    stock: 2,
    category: "camping",
  },

  {
    id: 9,
    name: "Guantes con Linterna LED Luz Blanca",
    description:
      "Guantes con LED integrados para trabajo nocturno o bricolaje.",
    longDescription:
      "Material cómodo y linterna LED en los dedos.",
    price: "$14.990",
    image: guantesled,
    detailImage: guantesleddetalle,
    tags: ["Guantes", "LED", "Iluminación"],
    stock: 4,
    category: "camping",
  },

  {
    id: 10,
    name: "Pulsera Magnética para Tornillos",
    description:
      "Mantiene tornillos y herramientas pequeñas siempre a mano.",
    longDescription:
      "Imanes potentes integrados, ideal para carpintería y mecánica.",
    price: "$14.990",
    image: pulceramagnetica,
    detailImage: pulceramagneticadetalle,
    tags: ["Magnética", "Herramientas", "DIY"],
    stock: 3,
    category: "hogar",
  },

  {
    id: 11,
    name: "Asiento Elevado para Mascotas – Pet Booster Seat",
    description:
      "Lleva a tu mascota segura, cómoda y cerca tuyo.",
    longDescription:
      "Soporta hasta 12 kg, tela resistente y fácil de limpiar.",
    price: "$34.990",
    image: asientomascotas,
    detailImage: asientomascotasdetalle,
    gallery: [asientomascotasdetalle, asientomascotasdetalle1, asientomascotasdetalle2],
    tags: ["Mascotas", "Seguridad", "Viaje"],
    stock: 1,
    category: "mascotas",
  },

  {
    id: 12,
    name: "Funda Protectora de Auto para Mascota",
    description: "Funda impermeable para proteger tapizados.",
    longDescription:
      "Impermeable, lavable y compatible con la mayoría de vehículos.",
    price: "$24.990",
    image: cubreasiento,
    detailImage: cubreasientodetalle1,
    gallery: [
      cubreasientodetalle1,
      cubreasientodetalle2,
      cubreasientodetalle3,
      cubreasientodetalle4,
      cubreasientodetalle5,
    ],
    tags: ["Impermeable", "Funda", "Mascotas", "Auto"],
    stock: 1,
    category: "mascotas",
  },

  {
    id: 13,
    name: "Reloj Fitness con Monitor de Ritmo Cardíaco IP68",
    description:
      "Smartwatch con pulsómetro, podómetro y monitor de sueño.",
    longDescription:
      "Registra pasos, calorías, ritmo cardíaco y sueño.",
    price: "$14.990",
    image: fitnesswatch,
    detailImage: fitnesswatchdetalle1,
    gallery: [
      fitnesswatchdetalle1,
      fitnesswatchdetalle2,
      fitnesswatchdetalle3,
      fitnesswatchdetalle4,
      fitnesswatchdetalle5,
      fitnesswatchdetalle6,
      fitnesswatchdetalle7,
      fitnesswatchdetalle8,
    ],
    tags: ["Smartwatch", "Cardíaco", "Pasos", "IP68"],
    stock: 1,
    category: "tecnologia",
  },

  {
    id: 14,
    name: "Power Bank Solar 20.000mAh con 4 Cables",
    description: "Batería externa de alta capacidad con carga solar.",
    longDescription:
      "20000mAh, puertos USB múltiples, linterna integrada y carga solar.",
    price: "$26.990",
    image: powerbanksolar,
    detailImage: powerbanksolardetalle,
    tags: ["Powerbank", "Solar", "20000mAh"],
    stock: 0,
    category: "tecnologia",
  },

  {
    id: 15,
    name: "Linterna Multifuncional Solar / USB",
    description: "Linterna versátil con carga solar y USB.",
    longDescription:
      "Varios modos de iluminación y función powerbank.",
    price: "$35.990",
    image: linternamultifuncional,
    detailImage: linternamultifuncionaldetalle,
    tags: ["Linterna", "Solar", "USB"],
    stock: 0,
    category: "camping",
  },

  {
    id: 16,
    name: "Cocina de Camping Portátil a Gas",
    description:
      "Cocina portátil con encendido automático y maleta.",
    longDescription:
      "Compacta, segura y práctica para camping o emergencias.",
    price: "$35.990",
    image: cocinacamping,
    detailImage: cocinacampingdetalle,
    tags: ["Camping", "Cocina", "Portátil"],
    stock: 0,
    category: "camping",
  },
];
