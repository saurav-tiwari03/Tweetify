import axios from "axios"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const YourTweets = () => {
  const { id } = useContext(AuthContext)
  console.log(id)
  
  const clickHandler = () => {
    axios.get('http://localhost:4000/api/v1/getYourTweets/',{id})
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error.response.data.message)
    })
  }
  return (
    <div className="flex items-center justify-center">
      <button onClick={clickHandler} className="text-white border-2 border-white p-2 rounded">Get Your tweets</button>
    </div>
  )
}
