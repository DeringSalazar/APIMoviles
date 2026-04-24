const maquinasModel = require('../models/maquinas.model.js');

class MaquinasService {
    constructor(maquinasModel) {
        this.maquinasModel = maquinasModel;
    }

    async getAll() {
        return await this.maquinasModel.getAllMaquinas();
    }

    async getById(id) {
        return await this.maquinasModel.getMaquina(id);
    }

    async getPdfPage(id) {
        return await this.maquinasModel.getMaquinaPdfPage(id);
    }
}

module.exports = new MaquinasService(maquinasModel);