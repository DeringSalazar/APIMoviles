const express = require('express');
const seguridadHigieneController = require('../controllers/seguridadHigiene.controller');

/**
 * @swagger
 * tags:
 *   name: Seguridad e Higiene
 *   description: Gestión de productos de Seguridad e Higiene
 */
const router = express.Router();

/**
 * @swagger
 * /seguridad-higiene:
 *   get:
 *     summary: Obtener todos los productos de seguridad e higiene
 *     tags: [Seguridad e Higiene]
 *     responses:
 *       200:
 *         description: Lista de productos de seguridad e higiene
 *       500:
 *         description: Error en la base de datos
 */
router.get('/', seguridadHigieneController.getAll);

/**
 * @swagger
 * /seguridad-higiene/{id}:
 *   get:
 *     summary: Obtener un producto de seguridad e higiene por ID
 *     tags: [Seguridad e Higiene]
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
router.get('/:id', seguridadHigieneController.getById);

/**
 * @swagger
 * /seguridad-higiene/{id}/pdf:
 *   get:
 *     summary: Obtener la página PDF de un producto de seguridad e higiene
 *     tags: [Seguridad e Higiene]
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
router.get('/:id/pdf', seguridadHigieneController.getPdfPage);

module.exports = router;