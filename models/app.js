const express = require('express');
const path = require('path');
const app = express();
const { testDbConnection } = require('../services/db.js');

// Middlewares
app.use(express.json());


// Rutas
app.get('/', (req, res) => {
  res.json({ message: 'API funcionando correctamente' });
});

app.use(express.static(path.join(__dirname, '../public')));

// Importar rutas
const electricidadRoutes = require('../routes/electricidad.routes.js');
const herramientasRoutes = require('../routes/herramientas.routes.js');
const catalogoRoutes = require('../routes/catalogo.routes.js'); 

app.use('/electricidad', electricidadRoutes);
app.use('/herramientas', herramientasRoutes);
app.use('/catalogo', catalogoRoutes);

testDbConnection();

module.exports = app;