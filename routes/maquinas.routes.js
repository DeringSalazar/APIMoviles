const express = require('express');
const maquinasController = require('../controllers/maquinas.controller');

/**
 * @swagger
 * tags:
 *   name: Máquinas
 *   description: Gestión de productos de máquinas
 */
const router = express.Router();

/**
 * @swagger
 * /máquinas:
 *   get:
 *     summary: Obtener todos los productos de máquinas
 *     tags: [Máquinas]
 *     responses:
 *       200:
 *         description: Lista de productos de máquinas
 *       500:
 *         description: Error en la base de datos
 */
router.get('/', maquinasController.getAll);

/**
 * @swagger
 * /máquinas/{id}:
 *   get:
 *     summary: Obtener un producto de máquinas por ID
 *     tags: [Máquinas]
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
router.get('/:id', maquinasController.getById);

/**
 * @swagger
 * /máquinas/{id}/pdf:
 *   get:
 *     summary: Obtener la página PDF de un producto de máquinas
 *     tags: [Máquinas]
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
router.get('/:id/pdf', maquinasController.getPdfPage);

module.exports = router;