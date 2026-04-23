const agroService = require('../services/agro.service');

class AgroController {
  constructor(agroService) {
    this.agroService = agroService;
  }

  getAll = async (req, res) => {
    try {
      const agro = await this.agroService.getAll();
      res.json(agro);
    } catch (err) {
      console.error('Error en consulta AGRO:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
    }
  };

  getById = async (req, res) => {
    if (!req.params.id) {
      return res.status(400).json({ error: 'ID del producto es requerido' });
    }

    try {
      console.log('ID recibido:', req.params.id);
      const agro = await this.agroService.getById(req.params.id);

      if (!agro) {
        return res.status(404).json({ error: 'Producto AGRO no encontrado' });
      }

      res.status(200).json(agro);
    } catch (err) {
      console.error('Error en consulta AGRO:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
    }
  };

  getPdfPage = async (req, res) => {
    if (!req.params.id) {
      return res.status(400).json({ error: 'ID del producto es requerido' });
    }

    try {
      const pdfData = await this.agroService.getPdfPage(req.params.id);
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

module.exports = new AgroController(agroService);
