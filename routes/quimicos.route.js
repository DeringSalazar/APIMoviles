const express = require('express');
const quimicaController = require('../controllers/quimicos.controller.js');

/**
 * @swagger
 * tags:
 *   name: Químicos
 *   description: Gestión de productos químicos
 */
const router = express.Router();

/**
 * @swagger
 * /quimicos:
 *   get:
 *     summary: Obtener todos los productos químicos
 *     tags: [Químicos]
 *     responses:
 *       200:
 *         description: Lista de productos químicos
 *       500:
 *         description: Error en la base de datos
 */
router.get('/', quimicaController.getAll);

/**
 * @swagger
 * /quimicos/{id}:
 *   get:
 *     summary: Obtener un producto químico por ID
 *     tags: [Químicos]
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
router.get('/:id', quimicaController.getById);

/**
 * @swagger
 * /quimicos/{id}/pdf:
 *   get:
 *     summary: Obtener la página PDF de un producto químico
 *     tags: [Químicos]
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
router.get('/:id/pdf', quimicaController.getPdfPage);

module.exports = router;