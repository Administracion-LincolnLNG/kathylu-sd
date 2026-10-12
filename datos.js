const CONFIG = {
  negocio: "Kathylu Nails",
  lema: "Elige tu diseño y agenda tu cita en un mensaje.",
  horario: "Lunes a sábado, 9:00 a 18:00",

  // Número con código de país, sin + ni espacios. Ecuador: 593 + número sin el 0 inicial.
  whatsapp: "593999999999",

  // Textos de los botones y mensajes
  textoBotonModelo: "Agendar cita",
  mensajeModelo: "Hola Kathylu Nails, quiero agendar una cita para el modelo:",
  textoBotonTrabajadora: "Cotizar",
  mensajeTrabajadora: "Hola Kathylu Nails, quiero cotizar con:",

  // Dirección tal como la buscarías en Google Maps
  direccion: "Tu dirección aquí",

  instagram: "https://www.instagram.com/tu_usuario",
  tiktok: "https://www.tiktok.com/@tu_usuario",
};

/* ============================================================
   MODELOS
   1) Guarda la foto en la carpeta "img" (ej: img/modelo5.jpg)
   2) Copia una línea, pégala al final y cambia los datos.
   "categoria", "descripcion" y "precio" son opcionales.
   ============================================================ */

const MODELOS = [
  { nombre: "Francés clásico", imagen: "img/modelo1.jpg", categoria: "Clásicas",  descripcion: "Punta blanca y base natural.",   precio: "Desde $15" },
  { nombre: "Acrílico rosa",   imagen: "img/modelo2.jpg", categoria: "Acrílicas", descripcion: "Extensión en tono rosa pastel.", precio: "Desde $20" },
  { nombre: "Diseño floral",   imagen: "img/modelo3.jpg", categoria: "Decoradas", descripcion: "Flores pintadas a mano.",        precio: "Desde $25" },
  { nombre: "Efecto espejo",   imagen: "img/modelo4.jpg", categoria: "Decoradas", descripcion: "Acabado cromado con brillo.",    precio: "Desde $22" },
  // { nombre: "Nuevo modelo", imagen: "img/modelo5.jpg", categoria: "Clásicas", descripcion: "", precio: "" },
];

/* ============================================================
   TRABAJADORAS
   1) Guarda la foto carnet en "img" (196 x 196 px), ej: img/trabajadora4.jpg
   2) Copia una línea, pégala al final y cambia los datos.
   "descripcion" es opcional.
   ============================================================ */

const TRABAJADORAS = [
  { nombre: "Jenniffer Infante", imagen: "img/trabajadora1.jpg", rol: "DISEÑADORA",    descripcion: "" },
  { nombre: "Kathy Fajardo",     imagen: "img/trabajadora2.jpg", rol: "DISEÑADORA",    descripcion: "" },
  { nombre: "Nicol Escobar",     imagen: "img/trabajadora3.jpg", rol: "RECEPCIONISTA", descripcion: "" },
  // { nombre: "Nueva", imagen: "img/trabajadora4.jpg", rol: "", descripcion: "" },
];