import { User } from "../models";
import { compare } from "bcrypt";

// Defining methods for the usersController
export function getAuth(req, res) {
  res.json({
    userId: req.session.userId,
    loggedIn: req.session.loggedIn,
  });
}
export function logOut(req, res) {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
}
export function logIn(req, res) {
  console.log(req.session);
  User.findOne({ email: req.body.email }).then((dbModel) => {
    compare(req.body.password, dbModel.password, (err, result) => {
      req.session.loggedIn = true;
      req.session.userId = dbModel._id;
      console.log(req.session);
      res.json(dbModel);
    });
  });
  // .catch((err) => res.status(404).json(err));
}
export function findById(req, res) {
  User.findById({ _id: req.params.id })
    .then((dbModel) => {
      res.status(200).json(dbModel);
    })
    .catch((err) => res.status(404).json(err));
}
export function create(req, res) {
  User.create(req.body)
    .then((dbModel) => {
      req.session.loggedIn = true;
      req.session.userId = dbModel._id;
      res.json(dbModel);
    })
    .catch((err) => res.status(404).json(err));
}
export function createDrink(req, res) {
  User.findById(req.session.userId).then((dbModel) => {
    dbModel.drinks.unshift(req.body);
    dbModel
      .save()
      .then(() => {
        res.json(dbModel);
      })
      .catch((err) => res.status(404).json(err));
  });
}
