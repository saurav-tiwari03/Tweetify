const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  Tweets: {
    type: Array,
  },
  FavTweets: {
    type: Array,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
