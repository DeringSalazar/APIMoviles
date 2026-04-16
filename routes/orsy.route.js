const express = require('express');
const orsyController = require('../controllers/orsy.controller');

/**
 * @swagger
 * tags:
 *   name: ORSY
 *   description: Gestión de productos de orsy
 */
const router = express.Router();

/**
 * @swagger
 * /orsy:
 *   get:
 *     summary: Obtener todos los productos de orsy
 *     tags: [ORSY]
 *     responses:
 *       200:
 *         description: Lista de productos de orsy
 *       500:
 *         description: Error en la base de datos
 */
router.get('/', orsyController.getAll);

/**
 * @swagger
 * /orsy/{id}:
 *   get:
 *     summary: Obtener un producto de orsy por ID
 *     tags: [ORSY]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto obtenido correctamente
 *       400:
 *         description: ID del producto es requerido
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error en la base de datos
 */
router.get('/:id', orsyController.getById);

/**
 * @swagger
 * /orsy/{id}/pdf:
 *   get:
 *     summary: Obtener la página PDF de un producto de orsy
 *     tags: [ORSY]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Página PDF obtenida correctamente
 *       400:
 *         description: ID del producto es requerido
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error en la base de datos
 */
router.get('/:id/pdf', orsyController.getPdfPage);

module.exports = router;