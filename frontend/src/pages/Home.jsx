/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { Navbar } from './../components/Navbar'
import { Tweet } from './../components/Tweet'
import { AddTweet } from './../components/AddTweet'
import { MdDelete } from "react-icons/md";
import { Toaster, toast } from 'react-hot-toast'
import { RiLeafLine } from "react-icons/ri";
import axios from 'axios';

export const Home = () => {
  const [tweetData, setTweetData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [length, setLength] = useState();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/getTweets`)
      .then((response) => {
        console.log(response.data.data[0])
        setLength(response.data.data.length)
        setTweetData(response.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const deleteHandler = (id) => {
    axios.delete(`http://localhost:4000/api/v1/delete/${id}`)
      .then((response) => {
        console.log(response)
        setTweetData(tweetData.filter(tweet => tweet._id !== id)); // Remove the deleted tweet from state
        toast.success('Tweet deleted successfully');
      })
      .catch((error) => {
        console.error('There was an error deleting the tweet:', error);
        toast.error('Failed to delete tweet');
      });
  }

  return (
    <div className="text-white">
      <Navbar />
      <div className='flex items-start justify-between'>
        <div className=''>
          {tweetData.map((tweet) => (
            <div key={tweet._id} className='flex relative'>
              <Tweet tweet={tweet.tweet} tweetBy={tweet.tweetBy} />
              <button onClick={() => deleteHandler(tweet._id)} className='text-3xl absolute top-10 right-8'><MdDelete /></button>
            </div>
          ))}
        </div>
        <div className="md:flex items-center justify-end hidden">
          {!showModal && <AddTweet />}
        </div>
      </div>
      <div>
        <div className={`transition-all duration-500 absolute flex md:hidden
            ${showModal ? 'translate-x-0' : '-translate-x-[1000px]'}`}>
          {showModal && <AddTweet />}
        </div>
        <div className='flex md:hidden absolute right-10 bottom-32 bg-blue-400 p-2 rounded-full text-3xl'>
          <button className="z-[10]" onClick={() => setShowModal(!showModal)}><RiLeafLine /></button>
        </div>
      </div>
      <Toaster />
    </div>
  )
}
