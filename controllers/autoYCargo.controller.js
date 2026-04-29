const autoService = require('../services/autoYCargo.service');

class AutoController {
  constructor(autoService) {
    this.autoService = autoService;
  }

  getAll = async (req, res) => {
    try {
      const auto = await this.autoService.getAll();
      res.json(auto);
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
      const auto = await this.autoService.getById(req.params.id);

      if (!auto) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }

      res.status(200).json(auto);
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
      const pdfData = await this.autoService.getPdfPage(req.params.id);

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

module.exports = new AutoController(autoService);