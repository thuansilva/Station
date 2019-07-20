const express = require("express");

const routes = express.Router();
const ProductControler = require("./Controllers/ProductController");
routes.get("/products", ProductControler.index); //buscar
routes.get("/products/:id", ProductControler.show); //mostrar um unico dado
routes.post("/products", ProductControler.store); //inserir dados
routes.put("/products:id", ProductControler.update); // atualizar dados
routes.delete("/products:id", ProductControler.destroy);
module.exports = routes;
