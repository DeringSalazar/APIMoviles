const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const { testDbConnection } = require('../services/db.service');

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API funcionando correctamente' });
});

const anclajeRoutes = require('../routes/anclaje.route.js');
const autoRoutes = require('../routes/autoYCargo.route.js');
const quimicosRoutes = require('../routes/quimicos.route.js');
const tornilleriaRoutes = require('../routes/tornilleria.route.js');
const orsyRoutes = require('../routes/orsy.route');
const agroRoutes = require('../routes/agro.route');
const corteTaladroDesbasteRoutes = require('../routes/corteTaladroDesbaste.routes.js');
const electricidadRoutes = require('../routes/electricidad.routes.js');
const herramientasRoutes = require('../routes/herramientas.routes.js');
const catalogoRoutes = require('../routes/catalogo.routes.js'); 
const seguridadHigieneRoutes = require('../routes/seguridad.route.js');
const maquinasRoutes = require('../routes/maquinas.routes.js');

app.use('/anclaje', anclajeRoutes);
app.use('/auto', autoRoutes);
app.use('/quimicos', quimicosRoutes);
app.use('/tornilleria', tornilleriaRoutes);
app.use('/orsy', orsyRoutes);
app.use('/agro', agroRoutes);
app.use('/corte', corteTaladroDesbasteRoutes);
app.use(express.static(path.join(__dirname, '../public')));
app.use('/electricidad', electricidadRoutes);
app.use('/herramientas', herramientasRoutes);
app.use('/catalogo', catalogoRoutes);
app.use('/seguridad-higiene', seguridadHigieneRoutes);
app.use('/maquinas', maquinasRoutes);

testDbConnection();

module.exports = app;