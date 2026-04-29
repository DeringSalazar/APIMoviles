const express = require('express');
const anclajeController = require('../controllers/anclaje.controller.js');

/**
 * @swagger
 * tags:
 *   name: Anclajes
 *   description: Gestión de productos de anclaje
 */
const router = express.Router();

/**
 * @swagger
 * /anclaje:
 *   get:
 *     summary: Obtener todos los productos de anclaje
 *     tags: [Anclajes]
 *     responses:
 *       200:
 *         description: Lista de productos de anclaje
 *       500:
 *         description: Error en la base de datos
 */
router.get('/', anclajeController.getAll);

/**
 * @swagger
 * /anclaje/{id}:
 *   get:
 *     summary: Obtener un producto de anclaje por ID
 *     tags: [Anclajes]
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
router.get('/:id', anclajeController.getById);

/**
 * @swagger
 * /anclaje/{id}/pdf:
 *   get:
 *     summary: Obtener la página PDF de un producto de anclaje
 *     tags: [Anclajes]
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
router.get('/:id/pdf', anclajeController.getPdfPage);

module.exports = router;