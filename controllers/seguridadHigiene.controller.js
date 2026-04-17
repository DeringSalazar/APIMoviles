const seguridadhigieneService = require('../services/seguridadHigiene.service');

class SeguridadHigieneController {
  constructor(seguridadHigieneService) {
    this.seguridadhigieneService = seguridadHigieneService;
  }

  getAll = async (req, res) => {
    try {
      const seguridadHigiene = await this.seguridadhigieneService.getAll();
      res.json(seguridadHigiene);
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
      const seguridadHigiene = await this.seguridadhigieneService.getById(req.params.id);

      if (!seguridadHigiene) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }

      res.status(200).json(seguridadHigiene);
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
      const pdfData = await this.seguridadhigieneService.getPdfPage(req.params.id);

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

module.exports = new SeguridadHigieneController(seguridadhigieneService);