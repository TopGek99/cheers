const db = require("../models");
const bcrypt = require("bcrypt");

// Defining methods for the usersController
module.exports = {
  getAuth: function (req, res) {
    res.json({
      userId: req.session.userId,
      loggedIn: req.session.loggedIn,
    });
  },
  logOut: function (req, res) {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  },
  logIn: function (req, res) {
    db.User.findOne({ email: req.body.email })
      .then((dbModel) => {
        bcrypt.compare(req.body.password, dbModel.password, (err, result) => {
          req.session.loggedIn = true;
          req.session.userId = dbModel._id;

          res.json(dbModel);
        });
      })
      .catch((err) => res.status(404).json(err));
  },
  findById: function (req, res) {
    db.User.findById({ _id: req.params.id })
      .then((dbModel) => {
        res.status(200).json(dbModel);
      })
      .catch((err) => res.status(404).json(err));
  },
  create: function (req, res) {
    db.User.create(req.body)
      .then((dbModel) => {
        req.session.loggedIn = true;
        req.session.userId = dbModel._id;
        res.json(dbModel);
      })
      .catch((err) => res.status(404).json(err));
  },
  createDrink: function (req, res) {
    db.User.findById(req.session.userId).then((dbModel) => {
      dbModel.drinks.unshift(req.body);
      dbModel
        .save()
        .then(() => {
          res.json(dbModel);
        })
        .catch((err) => res.status(404).json(err));
    });
  },
};
