const autoModel = require('../models/autoYCargo.model');

class AutoYCargoService {
  constructor(autoModel) {
    this.autoModel = autoModel;
  }

  async getAll() {
    return await this.autoModel.getAllAutoCards();
  }

  async getById(id) {
    const result = await this.autoModel.getAutoDetail(id);
    return result;
  }

  async getPdfPage(id) {
    const result = await this.autoModel.getAutoPdfPage(id);
    return result;
  }
}

module.exports = new AutoYCargoService(autoModel);