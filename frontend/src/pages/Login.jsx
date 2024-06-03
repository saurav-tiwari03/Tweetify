import { useState } from "react"
import axios from "axios";
import { MdOutlineMail } from "react-icons/md";
import { MdKey } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom'


export const Login = () => {

  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [showPassword,setShowPassword] = useState(false)
  const navigate = useNavigate()

  const loginHandler = () => {
    axios.post(`http://localhost:4000/api/v1/login`,{email,password})
    .then((response) => {
      console.log(response.data.data);
      localStorage.setItem('token', response.data.data.token)
      navigate('/')
    })
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center text-black">
      <div className="flex items-center justify-center flex-col gap-4 bg-[#4a4a4a] rounded-3xl p-12">
        <h1 className="text-4xl text-center text-blue-500" id='form-heading'>Welcome Back! Please Login</h1>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 bg-[#242424] p-2 rounded-lg">
            <p className="text-3xl text-white"><MdOutlineMail/></p>
            <input className="outline-none bg-transparent border-b-2 border-white text-white"  type="email" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="flex items-center gap-2 relative bg-[#242424] p-2 rounded-lg">
            <p className="text-3xl text-white"><MdKey/></p>
            <input className="outline-none bg-transparent border-b-2 border-white text-white" type={`${showPassword ? 'text' : 'password'}`} onChange={(e) => setPassword(e.target.value)}/>
            <button className="absolute right-2 text-white text-xl" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaRegEye/> : <FaRegEyeSlash/>}</button>
          </div>
        </div>
        <div className="flex items-center justify-between w-[300px]">
          <button className="bg-blue-400 px-4 py-2 rounded-3xl font-semibold hover:bg-blue-600 hover:text-white duration-300 outline-none" onClick={loginHandler}>Login</button>
          <Link className="bg-blue-400 px-4 py-2 rounded-3xl font-semibold hover:bg-blue-600 hover:text-white duration-300 outline-none" to='/signup'>Sign up</Link>
        </div>
      </div>
    </div>
  )
}
