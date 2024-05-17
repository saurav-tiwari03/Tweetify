// import { useContext } from "react"
// import { AuthContext } from "../context/AuthContext"

export const useLogOut = () => {
  // const loggingout = useContext(AuthContext)
  const logout = () => {
    localStorage.removeItem('token')
  }
  return {logout}
}
