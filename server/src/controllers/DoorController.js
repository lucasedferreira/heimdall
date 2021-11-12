const DoorRepository = require('../repositories/DoorRepository');

class DoorController {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  async status() {
    const doorID = this.req.params.doorID;
    const doorRepository = new DoorRepository();
    const doorIsOpen = await doorRepository.checkIfIsOpen(doorID);
    this.res.status(200).send({
      isOpen: doorIsOpen
    });
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