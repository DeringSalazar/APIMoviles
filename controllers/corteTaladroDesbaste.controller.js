const corteTaladroDesbasteService = require('../services/corteTaladroDesbaste.service.js');

class CorteTaladroDesbasteController {
  constructor(corteTaladroDesbasteService) {
    this.corteTaladroDesbasteService = corteTaladroDesbasteService;
  }

  getAll = async (req, res) => {
    try {
      const productos = await this.corteTaladroDesbasteService.getAll();
      res.json(productos);
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
      const producto = await this.corteTaladroDesbasteService.getById(req.params.id);

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
      const pdfData = await this.corteTaladroDesbasteService.getPdfPage(req.params.id);

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

module.exports = new CorteTaladroDesbasteController(corteTaladroDesbasteService);