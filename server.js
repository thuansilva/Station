const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
//inicando o App
const app = express();
app.use(express.json());

//Inicnado o BD
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true
});

requireDir("./src/models");

//rota
app.use("/api", require("./src/routes"));
app.listen(3001);
