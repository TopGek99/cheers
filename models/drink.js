const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
	beverage: { type: String, required: true },
	author: { type: String, required: true },
	synopsis: String,
	date: { type: Date, default: Date.now },
});

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;
