const express = require('express');
const maquinasController = require('../controllers/maquinas.controller.js');

const router = express.Router();

router.get('/', maquinasController.getAll);
router.get('/:id', maquinasController.getById);
router.get('/:id/pdf', maquinasController.getPdfPage);

module.exports = router;