const express = require('express');
const tornilleriaController = require('../controllers/tornilleria.controller.js');

/**
 * @swagger
 * tags:
 *   name: Tornillería
 *   description: Gestión de productos de tornillería
 */
const router = express.Router();

/**
 * @swagger
 * /tornilleria:
 *   get:
 *     summary: Obtener todos los productos de tornillería
 *     tags: [Tornillería]
 *     responses:
 *       200:
 *         description: Lista de productos de tornillería
 *       500:
 *         description: Error en la base de datos
 */
router.get('/', tornilleriaController.getAll);

/**
 * @swagger
 * /tornilleria/{id}:
 *   get:
 *     summary: Obtener un producto de tornillería por ID
 *     tags: [Tornillería]
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
router.get('/:id', tornilleriaController.getById);

/**
 * @swagger
 * /tornilleria/{id}/pdf:
 *   get:
 *     summary: Obtener la página PDF de un producto de tornillería
 *     tags: [Tornillería]
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
router.get('/:id/pdf', tornilleriaController.getPdfPage);

module.exports = router;