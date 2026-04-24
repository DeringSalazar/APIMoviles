const seguridadHigieneModel = require('../models/seguridadHigiene.model.js');

class SeguridadHigieneService {
  constructor(seguridadHigieneModel) {
    this.seguridadHigieneModel = seguridadHigieneModel;
  }

  async getAll() {
    return await this.seguridadHigieneModel.getAllSeguridadHigiene();
  }

  async getById(id) {
    return await this.seguridadHigieneModel.getSeguridadHigiene(id);
  }

  async getPdfPage(id) {
    return await this.seguridadHigieneModel.getSeguridadHigienePdfPage(id);
  }
}

module.exports = new SeguridadHigieneService(seguridadHigieneModel);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              