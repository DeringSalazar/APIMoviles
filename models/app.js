const express = require('express');
const app = express();
const { testDbConnection } = require('../services/db.js');


app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API funcionando correctamente' });
});


const orsyRoutes = require('../routes/orsy.route');
const agroRoutes = require('../routes/agro.route');

app.use('/orsy', orsyRoutes);
app.use('/agro', agroRoutes);

testDbConnection();

module.exports = app;