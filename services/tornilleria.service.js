const tornilleriaModel = require('../models/tornilleria.model.js');

class TornilleriaService {
  constructor(tornilleriaModel) {
    this.tornilleriaModel = tornilleriaModel;
  }

  async getAll() {
    return await this.tornilleriaModel.getAllTornilleriaCards();
  }

  async getById(id) {
    const result = await this.tornilleriaModel.getTornilleriaDetail(id);
    return result;
  }

  async getPdfPage(id) {
    const result = await this.tornilleriaModel.getTornilleriaPdfPage(id);
    return result;
  }
}

module.exports = new TornilleriaService(tornilleriaModel);