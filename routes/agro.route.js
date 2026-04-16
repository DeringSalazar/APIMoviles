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
 * /agro/search:
 *   get:
 *     summary: Buscar productos AGRO por nombre o número de artículo
 *     tags: [AGRO]
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         schema:
 *           type: string
 *         description: Término de búsqueda
 *     responses:
 *       200:
 *         description: Resultados de la búsqueda
 *       400:
 *         description: Parámetro de búsqueda requerido
 *       500:
 *         description: Error en la base de datos
 */
router.get('/search', agroController.search);

/**
 * @swagger
 * /agro/article/{articleNumber}:
 *   get:
 *     summary: Obtener un producto AGRO por número de artículo
 *     tags: [AGRO]
 *     parameters:
 *       - in: path
 *         name: articleNumber
 *         required: true
 *         schema:
 *           type: string
 *         description: Número de artículo del producto
 *     responses:
 *       200:
 *         description: Producto obtenido correctamente
 *       400:
 *         description: Número de artículo es requerido
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error en la base de datos
 */
router.get('/article/:articleNumber', agroController.getByArticleNumber);

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

module.exports = router;
