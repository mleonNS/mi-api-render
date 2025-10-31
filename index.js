import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// ---- DATOS FIJOS ----
const apps = [
  { id: 1, nombre: "Siniestros" },
  { id: 2, nombre: "Emprende Mujer" },
  { id: 3, nombre: "Formularios" },
];

const roles = [
  { id: 1, nombre: "Broker", app: 1 },
  { id: 2, nombre: "Adm Roles", app: 1 },
  { id: 3, nombre: "Medico", app: 1 },
  { id: 4, nombre: "Perito", app: 1},
  { id: 5, nombre: "Borker Cotizador", app: 2 },
  { id: 6, nombre: "Broker Generador", app: 2 },
  { id: 7, nombre: "Form Broker 1", app: 3 },
  { id: 8, nombre: "Form Broker 2", app: 3 },
	   
];

const grupos = [
  { id: 1, nombre: "AIG", app: 1 },
  { id: 2, nombre: "Luis", app: 1 },
  { id: 2, nombre: "Luis", app: 1 },
];

const clientes = [
  { id: 1, empresa: "InnovaTech", pais: "Ecuador" },
  { id: 2, empresa: "SoftData", pais: "Perú" },
];

// ---- ENDPOINTS ----

// 1️⃣ Endpoint raíz
app.get("/", (req, res) => {
  res.json({
    mensaje: "Bienvenido a mi API pública 🚀",
    autor: "Marco León",
    endpoints: [
      "/api/apps",
	  "/api/roles",
      "/api/grupos",
      "/api/clientes",
      "/api/saludo",
      "/api/version"
    ]
  });
});

// 2️⃣ Apps
app.get("/api/apps", (req, res) => {
  res.json(apps);
});

// 2️⃣ Roles
app.get("/api/roles", (req, res) => {
  res.json(roles);
});

// 3️⃣ grupos
app.get("/api/grupos", (req, res) => {
  res.json(grupos);
});

// 4️⃣ Clientes
app.get("/api/clientes", (req, res) => {
  res.json(clientes);
});

// 5️⃣ Endpoint dinámico (ejemplo con parámetro)
app.get("/api/saludo/:nombre", (req, res) => {
  const { nombre } = req.params;
  res.json({ mensaje: `¡Hola, ${nombre}! Bienvenido a la API 😎` });
});

// 6️⃣ Información de versión
app.get("/api/version", (req, res) => {
  res.json({ version: "1.0.0", estado: "estable", fecha: "2025-10-31" });
});

// ---- SERVIDOR ----
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en puerto ${PORT}`);
});
