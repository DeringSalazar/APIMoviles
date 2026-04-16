const express = require('express');
const app = express();
const { testDbConnection } = require('../services/db.service');

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

app.use('/anclaje', anclajeRoutes);
app.use('/auto', autoRoutes);
app.use('/quimicos', quimicosRoutes);
app.use('/tornilleria', tornilleriaRoutes);
app.use('/orsy', orsyRoutes);
app.use('/agro', agroRoutes);

testDbConnection();

module.exports = app;