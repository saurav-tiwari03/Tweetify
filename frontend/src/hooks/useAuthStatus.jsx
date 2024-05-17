import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthStatus = () => {
  const auth = useContext(AuthContext)
  return (auth.authStatus)
}
