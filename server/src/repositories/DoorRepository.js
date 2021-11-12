const GenericRepository = require("./GenericRepository");
const DoorModel = require('../../database/models').Door;

class DoorRepository extends GenericRepository {
  constructor() {
    super(DoorModel);
  }

  async checkIfIsOpen(doorID) {
    const door = await this.getByID(doorID);
    return door?.isOpen;
  }
}

module.exports = DoorRepository;