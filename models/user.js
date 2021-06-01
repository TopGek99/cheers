const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isEmail } = require("validator");

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: {
    type: String,
    validate: {
      validator: isEmail,
      message: "Invalid email address",
    },
    required: true,
  },
  drinks: [
    {
      beverage: { type: String, required: true },
      date: { type: Date, default: Date.now, required: true },
      location: { type: String, required: true },
    },
  ],
});

userSchema.plugin(require("mongoose-bcrypt"));

const User = mongoose.model("User", userSchema);

module.exports = User;
