const herramientasService = require('../services/herramientas.service.js');

class HerramientasController {
  constructor(herramientasService) {
    this.herramientasService = herramientasService;
  }

  getAll = async (req, res) => {
    try {
      const herramientas = await this.herramientasService.getAll();
      res.json(herramientas);
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
      const herramienta = await this.herramientasService.getById(req.params.id);
      if (!herramienta) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }
      res.status(200).json(herramienta);
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
      const pdfData = await this.herramientasService.getPdfPage(req.params.id);
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

module.exports = new HerramientasController(herramientasService);