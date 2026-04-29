const anclajeService = require('../services/anclaje.service.js');

class AnclajeController {
  constructor(anclajeService) {
    this.anclajeService = anclajeService;
  }

  getAll = async (req, res) => {
    try {
      const anclajes = await this.anclajeService.getAll();
      res.json(anclajes);
    } catch (err) {
      console.error('Error en consulta:', err);
      res.status(500).json({ error: 'Error en la base de datos', details: err });
    }
  };

  getById = async (req, res) => {
    if (!req.params.id) {
      return res.status(400).json({ error: 'ID del producto es requerido' });
    }

    try {
      console.log('ID recibido:', req.params.id);
      const anclaje = await this.anclajeService.getById(req.params.id);

      if (!anclaje) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }

      res.status(200).json(anclaje);
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
      const pdfData = await this.anclajeService.getPdfPage(req.params.id);

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

module.exports = new AnclajeController(anclajeService);