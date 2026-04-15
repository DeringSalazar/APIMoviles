const herramientasModel = require('../models/herramientas.model.js');

class HerramientasService {
  constructor(herramientasModel) {
    this.herramientasModel = herramientasModel;
  }

  async getAll() {
    return await this.herramientasModel.getAllHerramientas();
  }

  async getById(id) {
    return await this.herramientasModel.getHerramienta(id);
  }

  async getPdfPage(id) {
    return await this.herramientasModel.getHerramientaPdfPage(id);
  }
}

module.exports = new HerramientasService(herramientasModel);