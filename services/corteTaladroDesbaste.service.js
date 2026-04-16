const corteTaladroDesbasteModel = require('../models/corteTaladroDesbaste.model.js');

class CorteTaladroDesbasteService {
  constructor(corteTaladroDesbasteModel) {
    this.corteTaladroDesbasteModel = corteTaladroDesbasteModel;
  }

  async getAll() {
    return await this.corteTaladroDesbasteModel.getAllCorteTaladroDesbasteCards();
  }

  async getById(id) {
    const result = await this.corteTaladroDesbasteModel.getCorteTaladroDesbasteDetail(id);
    return result;
  }

  async getPdfPage(id) {
    const result = await this.corteTaladroDesbasteModel.getCorteTaladroDesbastePdfPage(id);
    return result;
  }
}

module.exports = new CorteTaladroDesbasteService(corteTaladroDesbasteModel);