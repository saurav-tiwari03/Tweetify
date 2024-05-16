const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  tweet:{
    type:String,
    required:true,
    length:50
  },
  tweetBy:{
    type:String,
    required:true
  }
})
const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet