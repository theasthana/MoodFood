const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // The "name" field is required
  },
  age: {
    type: Number,
    required: true, // The "age" field is required
  },
  gender: {
    type: String,
    required: true, // The "gender" field is required
  },
  username: {
    type: String,
    required: true, // The "username" field is required
  },
  password: {
    type: String,
    required: true, // The "password" field is required
  },
  email: {
    type: String,
    required: true, // The "email" field is required
  },
  phone: {
    type: String,
    required: true, // The "phone" field is required
  },
  date: {
    type: Date,
    default: Date.now, // Auto-fill with the current date
    required: true,
  },
  location: {
    type: String,
    required: true, // The "location" field is required
  },
});

// Create the User model
const User = mongoose.model("User", userSchema, "users");

module.exports = User;
