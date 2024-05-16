/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { Navbar } from './../components/Navbar'
import { Tweet } from './../components/Tweet'
import { AddTweet } from './../components/AddTweet'
import { MdDelete } from "react-icons/md";
import {Toaster,toast} from 'react-hot-toast'
import { RiLeafLine } from "react-icons/ri";



export const Home = () => {

  const [tweetData, setTweetData] = useState([]);
  const [showModal,setShowModal] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('Tweet-info'));
    if(data) {
      setTweetData(data);
    }
  },[tweetData])

  const deleteHandler = (index) => {
    toast.success('Tweet Deleted Successfully', {
      style: {
        border: '1px solid #707070',
        padding: '16px',
        color: '#fff',
        background:'#222'
      },
      iconTheme:{
        primary: '#707070',
        secondary: '#fff',
      }

    });
    const updatedTweets = [...tweetData];
    updatedTweets.splice(index, 1);
    setTweetData(updatedTweets);
    localStorage.setItem('Tweet-info', JSON.stringify(updatedTweets));
  }


  return (
    <div className="text-white">
      <Navbar />  
      <div className='flex items-start justify-between'>
        <div className=''>
          {tweetData.map((tweet, index) => (
            <div key={index} className='flex relative'>
              <Tweet tweet={tweet.tweet} tweetBy={tweet.tweetBy} />
              <button onClick={() => deleteHandler(index)} className='text-3xl absolute top-10 right-8'><MdDelete/></button>
            </div>
          ))} 
        </div>
        <div className="md:flex items-center justify-end hidden">
          {!showModal && <AddTweet />}
        </div>
      </div>
      <div>
        <div className={`transition-all duration-500 absolute flex md:hidden
            ${showModal ? 'translate-x-0' :'-translate-x-[1000px]' }`}>
          {showModal && <AddTweet/>}
        </div>
        <div className='flex md:hidden absolute right-10 bottom-32 bg-blue-400 p-2 rounded-full text-3xl'>
          <button className="z-[10]" onClick={() => setShowModal(!showModal)}><RiLeafLine /></button>
        </div>
      </div>
      <Toaster />
    </div>
  )
}
