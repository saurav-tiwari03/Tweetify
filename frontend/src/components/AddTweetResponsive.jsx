import { RiLeafLine } from "react-icons/ri";
import {Toaster,toast} from 'react-hot-toast'
import { useState } from "react";
import { AddTweet } from "./AddTweet";

export const AddTweetResponsive = () => {
  const [tweet,setTweet] = useState(null)
  const tweetBy = 'Saurav Tiwari'
  const [showModal,setShowModal] = useState(false) 

  const postHandler = () => {
    toast.success('Tweeted Successfully', {
      style: {
        border: '1px solid #707070',
        paddingRight:'40px',
        paddingLeft:'40px',
        paddingTop:'20px',
        paddingBottom:'20px',
        color: '#fff',
        background:'#222'
      },
      iconTheme:{
        primary: '#707070',
        secondary: '#fff',
      }

    });
    const existingTweets = JSON.parse(localStorage.getItem("Tweet-info")) || [];
    const newTweet = { tweet, tweetBy };
    const updatedTweets = [...existingTweets, newTweet];
    localStorage.setItem('Tweet-info', JSON.stringify(updatedTweets));
  }

  return (
    <div className="relative">
      <button className="z-[10]" onClick={() => setShowModal(!showModal)}><RiLeafLine /></button>
      {showModal && 
      <div className="absolute bottom-20 right-0">
        <AddTweet />
      </div>
      }
    </div>
  )
}

