const maquinasModel = require('../models/maquinas.model');

class MaquinasService {
  constructor(maquinasModel) {
    this.maquinasModel = maquinasModel;
  }

  async getAll() {
    return await this.maquinasModel.getAllMaquinas();
  }

  async getById(id) {
    const result = await this.maquinasModel.getMaquinaById(id);
    return result;
  }

  async getPdfPage(id) {
    const result = await this.maquinasModel.getMaquinaPdfPage(id);
    return result;
  }
}

module.exports = new MaquinasService(maquinasModel);