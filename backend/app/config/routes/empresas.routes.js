const { Router } = require("express")
const { empresas } = require("../models")

module.exports = app => {
    const empresas = require("../controllers/empresas.controller");
  
    var router = require("express").Router();
  
    // Create a new empresas
    router.post("/", empresas.create);
  
    // Retrieve all empresas
    router.get("/", empresas.findAll);
  
    // Retrieve all published empresas
    router.get("/published", empresas.findAllPublished);
  
    // Retrieve a single empresas with id
    router.get("/:id", empresas.findOne);
  
    // Update a empresas with id
    router.put("/:id", empresas.update);
  
    // Delete a empresas with id
    router.delete("/:id", empresas.delete);
  
    // Delete all empresas
    router.delete("/", empresas.deleteAll);
  
    app.use("/api/empresas", router);
  };