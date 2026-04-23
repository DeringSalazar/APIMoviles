const agroModel = require('../models/agro.model');

class AgroService {
  constructor(agroModel) {
    this.agroModel = agroModel;
  }

  async getAll() {
    return await this.agroModel.getAllAgro();
  }

  async getById(id) {
    return await this.agroModel.getAgroDetail(id);
  }

  async getPdfPage(id) {
    return await this.agroModel.getAgroPdfPage(id);
  }
}

module.exports = new AgroService(agroModel);