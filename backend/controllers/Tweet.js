const User = require("../models/user");
const Tweet = require("./../models/tweet");

exports.createTweet = async (req, res) => {
  try {
    const { tweet, tweetById } = req.body;
    
    // Create the tweet
    const user = await User.findById({_id:tweetById});  
    const response = await Tweet.create({
      tweet,
      tweetBy:user.name,
      tweetById
    });
    user.Tweets.push({id:response.id, tweet:tweet});
    await user.save();
    console.log(tweet)
    res.status(200).json({
      success: true,
      user:user,
      message: "Tweet created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


exports.getTweets = async (req, res) => {
  try {
    const response = await Tweet.find({});
    const Tweets = {};
    response.forEach((tweet, index) => {
      Tweets[`tweet${index}`] = [tweet._id, tweet.tweet];
    });

    
    res.status(200).json({
      success: true,
      Tweets: response,
      message: "You will see All the Tweets that are Made you.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getYourTweets = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      console.log(`Please provide ID ${id}`)
      return res.status(400).json({
        success: false,
        message: 'User ID is required',
      });
    }

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    res.status(200).json({
      success: true,
      data: user.Tweets,
      message: `You will see all tweets made by you`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


exports.addFavTweets = async (req, res) => {
  try {
    const { userId,tweetId  } = req.body;
    const tweet = await Tweet.findById(tweetId);
    if (!tweet) {
      throw new Error('Tweet not found');
    }
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    const isFavorite = user.FavTweets.some(favTweetId => favTweetId.toString() === tweet._id.toString());
    if (isFavorite) {
      throw new Error('Tweet already added to favorites');
    }
    user.FavTweets.push({id : tweet._id, tweet:tweet.tweet});
    await user.save(); 
    res.status(200).json({
      success: true,
      name: user.name,
      user: user.FavTweets,
      message: "Successfully added tweet to FavTweets collection"
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getFavTweets = async(req,res) => {
  try {
    const { id } = req.body;
    if(!id){
      throw new Error('Enter user id')
    }
    const user = await User.findById(id);
    if(!user){
      res.status(404).json({
        success: false,
        message: 'User not found'
      })
    }
    res.status(200).json({
      success: true,
      data: user.FavTweets,
      message:`Successfully retrieved all Favourite Tweets by ${user.name}`
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

exports.deleteTweet = async (req, res) => {
  try {
    const { id } = req.params;

    // Delete the tweet from the Tweet collection
    const result = await Tweet.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Tweet not found",
      });
    }

    const tweetById = result.tweetById;

    const user = await User.findByIdAndUpdate(
      tweetById,
      { $pull: { Tweets: id } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user: user.Tweets,
      message: "Tweet deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting tweet:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


