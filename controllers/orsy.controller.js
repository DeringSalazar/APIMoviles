const orsyService = require('../services/orsy.service');

class OrsyController {
  constructor(orsyService) {
    this.orsyService = orsyService;
  }

  getAll = async (req, res) => {
    try {
      const orsy = await this.orsyService.getAll();
      res.json(orsy);
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
      const orsy = await this.orsyService.getById(req.params.id);

      if (!orsy) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }

      res.status(200).json(orsy);
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
      const pdfData = await this.orsyService.getPdfPage(req.params.id);

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

module.exports = new OrsyController(orsyService);