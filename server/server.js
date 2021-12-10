const express = require("express");
const Pool = require('pg').Pool;
const cors = require('cors')
const SerialPort = require('serialport');

pool = new Pool({
  user: ''
})

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const arduinoCOMPort = "COM3";

var arduinoSerialPort = new SerialPort(arduinoCOMPort, {  
  baudRate: 9600
});

arduinoSerialPort.on('open',function() {
  console.log('Serial Port ' + arduinoCOMPort + ' is opened.');
});

const DoorController = require('./src/controllers/DoorController');

app.get("/status/:doorID", (req, res) => {
  const doorControler = new DoorController(req, res);
  doorControler.status();
});

app.post("/open/:doorID", (req, res) => {
  const doorControler = new DoorController(req, res);
  arduinoSerialPort.write("o");
  doorControler.open();
});

app.post("/close/:doorID", (req, res) => {
  const doorControler = new DoorController(req, res);
  arduinoSerialPort.write("c");
  doorControler.close();
});

const port = process.env.PORT || "2424";

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});