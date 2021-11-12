const GenericRepository = require("./GenericRepository");
const DoorModel = require('../../database/models').Door;

class DoorRepository extends GenericRepository {
  constructor() {
    super(DoorModel);
  }
}

module.exports = DoorRepository;