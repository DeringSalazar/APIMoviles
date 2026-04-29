const tornilleriaService = require('../services/tornilleria.service.js');

class TornilleriaController {
  constructor(tornilleriaService) {
    this.tornilleriaService = tornilleriaService;
  }

  getAll = async (req, res) => {
    try {
      const tornilleria = await this.tornilleriaService.getAll();
      res.json(tornilleria);
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
      const producto = await this.tornilleriaService.getById(req.params.id);

      if (!producto) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }

      res.status(200).json(producto);
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
      const pdfData = await this.tornilleriaService.getPdfPage(req.params.id);

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

module.exports = new TornilleriaController(tornilleriaService);