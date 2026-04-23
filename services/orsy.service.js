const orsyModel = require('../models/orsy.model');

class OrsyService {
  constructor(orsyModel) {
    this.orsyModel = orsyModel;
  }

  async getAll() {
    return await this.orsyModel.getAllOrsy();
  }

  async getById(id) {
    return await this.orsyModel.getOrsyDetail(id);
  }

  async getPdfPage(id) {
    return await this.orsyModel.getOrsyPdfPage(id);
  }
}

module.exports = new OrsyService(orsyModel);