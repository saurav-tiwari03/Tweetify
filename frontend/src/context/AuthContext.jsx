/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [authStatus,setAuthStatus] = useState(null);

  const getDecodedToken = (token) => {
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error('Invalid token', error);
      return null;
    }
  };  

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedUser = getDecodedToken(token);
        // console.log(decodedUser.payLoad.name);
        setName(decodedUser.payLoad.name)
        setEmail(decodedUser.payLoad.email)
        setAuthStatus(true);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{name,email,authStatus}}>
      {children}
    </AuthContext.Provider>
  );
};
