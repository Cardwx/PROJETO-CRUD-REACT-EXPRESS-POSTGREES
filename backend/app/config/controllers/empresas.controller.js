const db = require("../models");
const Empresa = db.empresas;
const Op = db.Sequelize.Op;

// Create and Save a new empresa
exports.create = (req, res) => {
  // Validate request
  if (!req.body.manufacturer_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a empresa
  const empresa = {
    manufacturer_name: req.body.manufacturer_name,
    manufacturer_cnpj: req.body.manufacturer_cnpj,
    published: req.body.published ? req.body.published : false
  };

  // Save empresa in the database
  Empresa.create(empresa)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the empresa."
      });
    });
};

// Retrieve all empresa from the database.
exports.findAll = (req, res) => {
  const manufacturer_name = req.query.manufacturer_name;
  var condition = manufacturer_name ? { manufacturer_name: { [Op.iLike]: `%${manufacturer_name}%` } } : null;

  Empresa.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving empresa."
      });
    });
};

// Find a single empresa with an id
exports.findOne = (req, res) => {
  const id = req.params.manufacturer_name;

  Empresa.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Empresa with id=" + id
      });
    });
};

// Update a Empresa by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Empresa.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Empresa was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Empresa with id=${id}. Maybe Empresa was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Empresa with id=" + id
      });
    });
};

// Delete a Empresa with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Empresa.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Empresa was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Empresa with id=${id}. Maybe Empresa was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Empresa with id=" + id
      });
    });
};

// Delete all Empresa from the database.
exports.deleteAll = (req, res) => {
    Empresa.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Empresa were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Empresa."
      });
    });
};

// find all published Empresa
exports.findAllPublished = (req, res) => {
    Empresa.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Empresas."
      });
    });
};