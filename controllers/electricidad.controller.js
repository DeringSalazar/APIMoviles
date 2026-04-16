const electricidadService = require('../services/electricidad.service.js');

class ElectricidadController {
    constructor(electricidadService) {
        this.electricidadService = electricidadService;
    }

    getAll = async (req, res) => {
    try {
      const electricidades = await this.electricidadService.getAll();
      res.json(electricidades);
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
      const electricidad = await this.electricidadService.getById(req.params.id);
      if (!electricidad) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }
      res.status(200).json(electricidad);
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
      const pdfData = await this.electricidadService.getPdfPage(req.params.id);
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

module.exports = new ElectricidadController(electricidadService);