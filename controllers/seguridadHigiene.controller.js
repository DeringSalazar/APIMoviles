const seguridadHigieneService = require('../services/seguridadHigiene.service.js');

class SeguridadHigieneController {
    constructor(seguridadHigieneService) {
        this.seguridadHigieneService = seguridadHigieneService;
    }

    getAll = async (req, res) => {
        try {
            const items = await this.seguridadHigieneService.getAll();
            res.json(items);
        } catch (err) {
            console.error('Error en consulta:', err);
            res.status(500).json({ error: 'Error en la base de datos' });
        }
    };

    getById = async (req, res) => {
        if (!req.params.id) {
            return res.status(400).json({ error: 'ID del producto es requerido' });
        }
        try {
            console.log('ID recibido:', req.params.id);
            const item = await this.seguridadHigieneService.getById(req.params.id);
            if (!item) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }
            res.status(200).json(item);
        } catch (err) {
            console.error('Error en consulta:', err);
            res.status(500).json({ error: 'Error en la base de datos' });
        }
    };

    getPdfPage = async (req, res) => {
        if (!req.params.id) {
            return res.status(400).json({ error: 'ID del producto es requerido' });
        }
        try {
            const pdfData = await this.seguridadHigieneService.getPdfPage(req.params.id);
            if (!pdfData) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }
            res.status(200).json(pdfData);
        } catch (err) {
            console.error('Error en consulta:', err);
            res.status(500).json({ error: 'Error en la base de datos' });
        }
    };
}

module.exports = new SeguridadHigieneController(seguridadHigieneService);