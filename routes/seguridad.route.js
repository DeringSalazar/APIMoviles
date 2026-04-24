const express = require('express');
const seguridadHigieneController = require('../controllers/seguridadHigiene.controller.js');

const router = express.Router();

router.get('/', seguridadHigieneController.getAll);
router.get('/:id', seguridadHigieneController.getById);
router.get('/:id/pdf', seguridadHigieneController.getPdfPage);

module.exports = router;