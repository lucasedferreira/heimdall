class GenericRepository {
  constructor(model) {
    this.model = model;
  }

  async updateOrCreate(item) {
    await this.model.upsert(item);
  }
}

module.exports = GenericRepository;