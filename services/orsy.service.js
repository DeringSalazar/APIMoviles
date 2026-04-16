const autoModel = require('../models/orsy.model');

class OrsyService {
  constructor(orsyModel) {
    this.orsyModel = orsyModel;
  }

  async getAll() {
    return await this.orsyModel.getAllOrsy();
  }

  async getById(id) {
    const result = await this.orsyModel.getOrsyDetail(id);
    return result;
  }

  async getPdfPage(id) {
    const result = await this.orsyModel.getOrsyPdfPage(id);
    return result;
  }
}

module.exports = new OrsyService(orsyModel);