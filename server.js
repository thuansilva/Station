const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
//inicando o App
const app = express();
app.use(express.json()); //trabalha com resposta do tipo json
app.use(cors()); // comunicação entre servidoeres e dominios diferentes

//Iniciando o BD
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true
});

requireDir("./src/models");

//rota
app.use("/api", require("./src/routes"));
app.listen(3001);
