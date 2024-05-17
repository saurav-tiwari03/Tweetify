import { Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import { useAuthStatus } from '../hooks/useAuthStatus';

export const Navbar = () => {
  const data = useContext(AuthContext)
  const authStatus = useAuthStatus()
  const navigate = useNavigate();
  const loggingout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div className="flex items-center justify-center pt-4">
      <div className="bg-[#707070] py-2 w-[90%] rounded-2xl">
        <div className="flex items-center justify-around">
          <h1 className="text-3xl " id='nav-heading'>Tweetify</h1>
          <div className="flex items-center gap-4">
            <p>Hello {data.name}</p>
            <div>
              {authStatus ? <button
                onClick={loggingout}
                className="border-[#242424] border-[2px] px-4 py-1 text-[#242424] hover:bg-[#242424] hover:text-white duration-300 rounded-lg"
              >
                Sign out
              </button> : <Link
                to='/login'
                className="border-[#242424] border-[2px] px-4 py-1 text-[#242424] hover:bg-[#242424] hover:text-white duration-300 rounded-lg"
              >
                Login
              </Link>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
