const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = 4000;

app.get("/", (req, res) => {
  res.sendStatus(200);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log("Server is running on Port: " + PORT);
  });
}

module.exports = app;
