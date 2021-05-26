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
      type: Schema.ObjectId,
      ref: "Drink",
    },
  ],
});

userSchema.plugin(require("mongoose-bcrypt"));

const User = mongoose.model("User", userSchema);

module.exports = User;
