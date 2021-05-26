const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
  beverage: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true },
  location: { type: String, required: true },
});

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;
