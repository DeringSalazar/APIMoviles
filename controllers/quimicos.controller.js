const quimicaService = require('../services/quimicos.service.js');

class QuimicaController {
  constructor(quimicaService) {
    this.quimicaService = quimicaService;
  }

  getAll = async (req, res) => {
    try {
      const quimicos = await this.quimicaService.getAll();
      res.json(quimicos);
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
      const quimico = await this.quimicaService.getById(req.params.id);

      if (!quimico) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }

      res.status(200).json(quimico);
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
      const pdfData = await this.quimicaService.getPdfPage(req.params.id);

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

module.exports = new QuimicaController(quimicaService);