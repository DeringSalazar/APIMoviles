const seguridadHigieneModel = require('../models/seguridadHigiene.model');

class SeguridadHigieneService {
  constructor(seguridadHigieneModel) {
    this.seguridadHigieneModel = seguridadHigieneModel;
  }

  async getAll() {
    return await this.seguridadHigieneModel.getAllSeguridadHigiene();
  }

  async getById(id) {
    const result = await this.seguridadHigieneModel.getSeguridadHigieneById(id);
    return result;
  }

  async getPdfPage(id) {
    const result = await this.seguridadHigieneModel.getSeguridadHigienePdfPage(id);
    return result;
  }
}

module.exports = new SeguridadHigieneService(seguridadHigieneModel);