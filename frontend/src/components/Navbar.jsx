import {Toaster,toast} from 'react-hot-toast'

export const Navbar = () => {
  return (
  <div className="flex items-center justify-center pt-4">
    <div className="bg-[#707070] py-2 w-[90%] rounded-2xl">
        <div className="flex items-center justify-around">
          <h1 className="text-3xl " id='nav-heading'>Tweetify</h1>
          <div className="flex items-center gap-4">
            <p>Hello Saurav</p>
            <div >
              <button className="border-[#242424] border-[2px] px-4 py-1 text-[#242424]
              hover:bg-[#242424] hover:text-white duration-300 rounded-lg"
              onClick={() => toast.error('Backend Not Yet Implemented')}
              >Login</button>
            </div>
          </div>
        </div>
      </div>
      <Toaster/>
  </div>
  )
}
