const agroModel = require('../models/agro.model');

class AgroService {
  constructor(agroModel) {
    this.agroModel = agroModel;
  }

  async getAll() {
    return await this.agroModel.getAllAgro();
  }

  async getById(id) {
    const result = await this.agroModel.getAgroDetail(id);
    return result;
  }

  async getByArticleNumber(articleNumber) {
    const result = await this.agroModel.getAgroByArticle(articleNumber);
    return result;
  }

  async search(searchTerm) {
    if (!searchTerm || searchTerm.trim() === '') {
      return [];
    }
    const result = await this.agroModel.searchAgro(searchTerm);
    return result;
  }
}

module.exports = new AgroService(agroModel);
