const express = require("express");
const router = express.Router();

const {login,signup} = require('./../controllers/UserAuth')

const {
  createTweet,
  getTweets,
  deleteTweet,
  getYourTweets,
  addFavTweets,
  getFavTweets
} = require("../controllers/Tweet");

router.get("/getTweets", getTweets);
router.get("/getYourTweets", getYourTweets);
router.get("/getFavTweets", getFavTweets);
router.post("/createTweet", createTweet);
router.post("/addtofavTweets", addFavTweets);
router.delete("/delete/:id", deleteTweet);


//Authentication Route
router.post("/login", login);
router.post("/signup", signup);

module.exports = router;
