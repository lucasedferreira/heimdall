const express = require("express");
const Pool = require('pg').Pool;
pool = new Pool({
  user: ''
})

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || "2424";

app.get("/status", (req, res) => {
  res.status(200).send({
    isOpen: true
  });
});

app.post("/open", (req, res) => {

  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});