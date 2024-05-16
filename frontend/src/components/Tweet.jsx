/* eslint-disable react/prop-types */

export const Tweet = ({tweet,tweetBy}) => {
  return (
    <div className="flex">
      <div className="border-2 border-[#60a5fa] w-[450px] md:w-[500px] h-[150px] p-4 rounded-lg m-4 ">
          <p className="text-4xl" id='nav-heading'>{tweet}</p>
          <p className="flex items-center justify-end mt-12" id='tweet-by'>~{tweetBy}</p>
      </div>
    </div>
  )
}
