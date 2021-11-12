const express = require("express");
const Pool = require('pg').Pool;
pool = new Pool({
  user: ''
})

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const DoorController = require('./src/controllers/DoorController');

app.get("/status/:doorID", (req, res) => {
  res.status(200).send({
    isOpen: true
  });
});

app.post("/open/:doorID", (req, res) => {
  const doorControler = new DoorController(req, res);
  doorControler.open();
});

app.post("/close/:doorID", (req, res) => {
  const doorControler = new DoorController(req, res);
  doorControler.close();
});

const port = process.env.PORT || "2424";

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});