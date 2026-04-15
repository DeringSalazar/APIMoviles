const express = require('express');
const herramientasController = require('../controllers/herramientas.controller.js');

const router = express.Router();

router.get('/', herramientasController.getAll);
router.get('/:id', herramientasController.getById);
router.get('/:id/pdf', herramientasController.getPdfPage);

module.exports = router;