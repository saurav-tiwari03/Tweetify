const Tweet = require('./../models/tweet');

exports.createTweet = async (req,res) => {
  try {
    const { tweet, tweetBy } = req.body;
    const response = await Tweet.create({
      tweet,
      tweetBy
    })
    res.status(200).json({
      success:true,
      data:response.data,
      message:'Tweet created successfully'
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success:false,
      message:error.message
    })
  }
}

exports.getTweets = async (req,res) => {
  try {
    const response = await Tweet.find({});
    res.status(200).json({
      success:true,
      data:response,
      message:'Tweet found successfully'
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success:false,
      message:error.message
    })
  }
} 

exports.deleteTweet = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Tweet.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Tweet not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Tweet deleted successfully'
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
