const express = require('express');
const app = express();
const { testDbConnection } = require('../services/db.service');

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API funcionando correctamente' });
});

// Importar rutas
const anclajeRoutes = require('../routes/anclaje.route.js');
const autoRoutes = require('../routes/autoYCargo.route.js');
const corteTaladroDesbasteRoutes = require('../routes/corteTaladroDesbaste.routes.js');


app.use('/anclaje', anclajeRoutes);
app.use('/auto', autoRoutes);
app.use('/corte', corteTaladroDesbasteRoutes);
testDbConnection();

module.exports = app;