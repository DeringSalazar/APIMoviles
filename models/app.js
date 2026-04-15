const express = require('express');
const app = express();
const { testDbConnection } = require('../services/db.js');

// Middlewares
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
  res.json({ message: 'API funcionando correctamente' });
});

// Importar rutas
const electricidadRoutes = require('../routes/electricidad.routes.js');
const herramientasRoutes = require('../routes/herramientas.routes.js');

app.use('/electricidad', electricidadRoutes);
app.use('/herramientas', herramientasRoutes);

testDbConnection();

module.exports = app;