class GenericRepository {
  constructor(model) {
    this.model = model;
  }

  async updateOrCreate(item) {
    await this.model.upsert(item);
  }

  async getByID(itemID) {
    console.log('itemID', itemID)
    return await this.model.findByPk(itemID);
  }
}

module.exports = GenericRepository;