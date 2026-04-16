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

app.use('/anclaje', anclajeRoutes);
app.use('/auto', autoRoutes);
app.use('/quimicos', quimicosRoutes);
app.use('/tornilleria', tornilleriaRoutes);
testDbConnection();

module.exports = app;