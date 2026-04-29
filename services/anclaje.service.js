const anclajeModel = require('../models/anclaje.model.js');

class AnclajeService {
  constructor(anclajeModel) {
    this.anclajeModel = anclajeModel;
  }

  async getAll() {
    return await this.anclajeModel.getAllAnclajeCards();
  }

  async getById(id) {
    const result = await this.anclajeModel.getAnclajeDetail(id);
    return result;
  }

  async getPdfPage(id) {
    const result = await this.anclajeModel.getAnclajePdfPage(id);
    return result;
  }
}

module.exports = new AnclajeService(anclajeModel);