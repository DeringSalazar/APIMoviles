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

  getByArticleNumber = async (req, res) => {
    if (!req.params.articleNumber) {
      return res.status(400).json({ error: 'Número de artículo es requerido' });
    }

    try {
      console.log('Número de artículo recibido:', req.params.articleNumber);
      const agro = await this.agroService.getByArticleNumber(req.params.articleNumber);

      if (!agro) {
        return res.status(404).json({ error: 'Producto AGRO con ese número de artículo no encontrado' });
      }

      res.status(200).json(agro);
    } catch (err) {
      console.error('Error en consulta AGRO:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
    }
  };

  search = async (req, res) => {
    if (!req.query.q) {
      return res.status(400).json({ error: 'Parámetro de búsqueda "q" es requerido' });
    }

    try {
      const searchTerm = req.query.q;
      console.log('Búsqueda AGRO:', searchTerm);
      const results = await this.agroService.search(searchTerm);

      res.status(200).json({
        query: searchTerm,
        count: results.length,
        results: results,
      });
    } catch (err) {
      console.error('Error en búsqueda AGRO:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
    }
  };
}

module.exports = new AgroController(agroService);
