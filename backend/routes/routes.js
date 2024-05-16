const express = require('express')
const router = express.Router();

const { createTweet,getTweets } = require('./../controllers/Tweet');

router.get('/getTweets',getTweets)
router.post('/createTweet',createTweet)

module.exports = router