const db = require("../models");
const bcrypt = require("bcrypt");

// Defining methods for the usersController
module.exports = {
  find: function (req, res) {
    db.User.findOne({ email: req.body.email })
      .then((dbModel) => {
        bcrypt.compare(req.body.password, dbModel.password, (err, result) => {
          res.json(dbModel);
        });
      })
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User.create(req.body)
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
};
