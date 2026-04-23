const express = require('express');
const agroController = require('../controllers/agro.controller');

/**
 * @swagger
 * tags:
 *   name: AGRO
 *   description: Gestión de productos AGRO
 */
const router = express.Router();

/**
 * @swagger
 * /agro:
 *   get:
 *     summary: Obtener todos los productos AGRO
 *     tags: [AGRO]
 *     responses:
 *       200:
 *         description: Lista de productos AGRO
 *       500:
 *         description: Error en la base de datos
 */
router.get('/', agroController.getAll);

/**
 * @swagger
 * /agro/{id}:
 *   get:
 *     summary: Obtener un producto AGRO por ID
 *     tags: [AGRO]
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
router.get('/:id', agroController.getById);

/**
 * @swagger
 * /agro/{id}/pdf:
 *   get:
 *     summary: Obtener la página PDF de un producto de agro
 *     tags: [AGRO]
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
router.get('/:id/pdf', agroController.getPdfPage);

module.exports = router;
