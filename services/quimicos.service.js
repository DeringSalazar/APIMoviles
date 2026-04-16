const quimicosModel = require('../models/quimicos.model.js');

class QuimicosService {
  constructor(quimicosModel) {
    this.quimicosModel = quimicosModel;
  }

  async getAll() {
    return await this.quimicosModel.getAllQuimicosCards();
  }

  async getById(id) {
    const result = await this.quimicosModel.getQuimicosDetail(id);
    return result;
  }

  async getPdfPage(id) {
    const result = await this.quimicosModel.getQuimicosPdfPage(id);
    return result;
  }
}

module.exports = new QuimicosService(quimicosModel);