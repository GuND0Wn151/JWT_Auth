const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 255,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    max: 1025,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
