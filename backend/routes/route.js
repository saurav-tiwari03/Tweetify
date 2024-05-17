const express = require('express')
const router = express.Router();

const { createTweet,getTweets,deleteTweet } = require('../controllers/Tweet');

router.get('/getTweets',getTweets)
router.post('/createTweet',createTweet)
router.delete('/delete/:id',deleteTweet)

module.exports = router