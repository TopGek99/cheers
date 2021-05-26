const db = require("../models");

// Defining methods for the usersController
module.exports = {
  find: function (req, res) {
    console.log(req.body);
    db.User.findOne({ email: req.body.email })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
