const DoorRepository = require('../repositories/DoorRepository');

class DoorController {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  async open() {
    let door = {
      ...this.req.body,
      ...{
        id: this.req.params.doorID,
        isOpen: true
      }
    };

    const doorRepository = new DoorRepository();
    await doorRepository.updateOrCreate(door);

    this.res.status(201).send();
  }

  async close() {
    const door = {
      id: this.req.params.doorID,
      isOpen: false,
      closeAt: null
    };

    const doorRepository = new DoorRepository();
    await doorRepository.updateOrCreate(door);

    this.res.status(201).send();
  }
}

module.exports = DoorController;