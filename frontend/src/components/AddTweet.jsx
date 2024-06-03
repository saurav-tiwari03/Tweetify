import { RiLeafLine } from "react-icons/ri";
import { Toaster, toast } from 'react-hot-toast';
import { useState, useContext } from "react";
import axios from 'axios';
import { AuthContext } from './../context/AuthContext';

export const AddTweet = () => {
  const { id } = useContext(AuthContext);
  const [tweet, setTweet] = useState('');

  const postHandler = () => {
    try {
      if (tweet.length === 0) {
        toast.error('Please Enter Something');
      } else {
        console.log(tweet);
        console.log(id);
        axios.post(`http://localhost:4000/api/v1/createTweet`, { tweet, tweetById: id })
          .then((response) => {
            console.log(response.data);
            toast.success('Tweeted Successfully', {
              style: {  
                border: '1px solid #707070',
                paddingRight: '40px',
                paddingLeft: '40px',
                paddingTop: '20px',
                paddingBottom: '20px',
                color: '#fff',
                background: '#222'
              },
              iconTheme: {
                primary: '#707070',
                secondary: '#fff',
              }
            });
          })
          .catch((error) => {
            console.log(error);
            toast.error(`${error.message}`, {
              style: {  
                border: '1px solid #707070',
                paddingRight: '40px',
                paddingLeft: '40px',
                paddingTop: '20px',
                paddingBottom: '20px',
                color: '#fff',
                background: '#222'
              },
              iconTheme: {
                primary: '#707070',
                secondary: '#fff',
              }
            });
          });
      }
    } catch (error) {
      console.log(error);
      toast.error('Unable to Tweet', {
        style: {  
          border: '1px solid #707070',
          paddingRight: '40px',
          paddingLeft: '40px',
          paddingTop: '20px',
          paddingBottom: '20px',
          color: '#fff',
          background: '#222'
        },
        iconTheme: {
          primary: '#707070',
          secondary: '#fff',
        }
      });
    }
  };

  return (
    <div className="flex px-4 py-2">
      <div className="border-2 border-[#707070] px-8 py-4 rounded-lg bg-[#242424]">
        <h1 className="text-blue-400 font-semibold text-2xl" id='form-heading'>Tweet what's on your mind</h1>
        <div>
          <input 
            className="bg-transparent border-b-[1px] outline-none w-[200px] focus:w-[250px] transition-all duration-300 ease-in-out pl-2 my-2" 
            type="text" 
            placeholder="What is happening!" 
            onChange={(e) => setTweet(e.target.value)}
          />
        </div>
        <div className="flex items-start justify-end mt-4">
          <button 
            className="border-[#707070] border-[2px] px-4 py-1 text-white hover:bg-[#707070] hover:text-white duration-500 rounded-lg flex items-center gap-1" 
            onClick={postHandler}
          >
            <RiLeafLine /> Post
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};
