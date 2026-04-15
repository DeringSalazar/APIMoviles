const express = require('express');
const electricidadController = require('../controllers/electricidad.controller.js');

const router = express.Router();

router.get('/', electricidadController.getAll);
router.get('/:id', electricidadController.getById);
router.get('/:id/pdf', electricidadController.getPdfPage);

module.exports = router;