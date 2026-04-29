const express = require('express');
const router = express.Router();
const catalogoController = require('../controllers/catalogo.controller');

router.get('/viewer', catalogoController.getViewer);


module.exports = router;