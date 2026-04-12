const express = require('express');
const app = express();

// Middlewares


// Rutas


app.get('/', (req, res) => {
  res.json({ message: 'API funcionando correctamente' });
});

module.exports = app;