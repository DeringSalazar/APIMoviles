const express = require('express');
const corteTaladroDesbasteController = require('../controllers/corteTaladroDesbaste.controller.js');

/**
 * @swagger
 * tags:
 *   name: CorteTaladroDesbaste
 *   description: Gestión de productos de corte, taladro y desbaste
 */
const router = express.Router();

/**
 * @swagger
 * /corteTaladroDesbaste:
 *   get:
 *     summary: Obtener todos los productos de corte, taladro y desbaste
 *     tags: [CorteTaladroDesbaste]
 *     responses:
 *       200:
 *         description: Lista de productos de corte, taladro y desbaste
 *       500:
 *         description: Error en la base de datos
 */
router.get('/', corteTaladroDesbasteController.getAll);

/**
 * @swagger
 * /corteTaladroDesbaste/{id}:
 *   get:
 *     summary: Obtener un producto de corte, taladro y desbaste por ID
 *     tags: [CorteTaladroDesbaste]
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
router.get('/:id', corteTaladroDesbasteController.getById);

/**
 * @swagger
 * /corteTaladroDesbaste/{id}/pdf:
 *   get:
 *     summary: Obtener la página PDF de un producto de corte, taladro y desbaste
 *     tags: [CorteTaladroDesbaste]
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
router.get('/:id/pdf', corteTaladroDesbasteController.getPdfPage);

module.exports = router;