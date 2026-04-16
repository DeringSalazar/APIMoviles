const express = require('express');
const app = express();
const { testDbConnection } = require('../services/db');


const orsyRoute = require('../routes/orsy.route');
const agroRoute = require('../routes/agro.route');

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API funcionando correctamente' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  await testDbConnection();
});