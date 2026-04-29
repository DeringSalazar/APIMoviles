const electricidadModel = require('../models/electricidad.model.js');

class ElectricidadService {
  constructor(electricidadModel) {
    this.electricidadModel = electricidadModel;
  }

  async getAll() {
    return await this.electricidadModel.getAllElectricidad(); 
  }

  async getById(id) {
    return await this.electricidadModel.getElectricidad(id); 
  }

  async getPdfPage(id) {
    return await this.electricidadModel.getElectricidadPdfPage(id); 
  }
}

module.exports = new ElectricidadService(electricidadModel);