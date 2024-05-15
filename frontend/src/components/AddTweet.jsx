import { RiLeafLine } from "react-icons/ri";
import {Toaster,toast} from 'react-hot-toast'
import { useState } from "react";

export const AddTweet = () => {
  const [tweet,setTweet] = useState(null)
  return (
    <div className="flex px-4 py-2">
      <div className="border-2 border-[#707070] px-8 py-4 rounded-lg">
        <h1 className=" text-blue-400 font-semibold text-2xl" id='form-heading'>Tweet whats in your mind</h1>
        <div>
          <input 
            className="bg-transparent border-b-[1px] outline-none w-[200px] focus:w-[250px] transition-all duration-300 ease-in-out pl-2 my-2" type="text" 
            placeholder="What is happening!" onChange={(e) => setTweet(e.target.value)}/>
        </div>
        <div className="flex items-start justify-end mt-4">
          <button className="border-[#707070] border-[2px] px-4 py-1 text-[white]
              hover:bg-[#707070] hover:text-white duration-500 rounded-lg flex items-center gap-1"
              onClick={() => toast.success(`${tweet}`)}>
            <RiLeafLine/> Post
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  )
}
