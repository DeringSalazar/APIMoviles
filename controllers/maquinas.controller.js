const maquinasService = require('../services/maquinas.service.js');

class MaquinasController {
    constructor(maquinasService) {
        this.maquinasService = maquinasService;
    }

    getAll = async (req, res) => {
        try {
            const maquinas = await this.maquinasService.getAll();
            res.json(maquinas);
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
            const maquina = await this.maquinasService.getById(req.params.id);
            if (!maquina) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }
            res.status(200).json(maquina);
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
            const pdfData = await this.maquinasService.getPdfPage(req.params.id);
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

module.exports = new MaquinasController(maquinasService);