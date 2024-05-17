import {Routes,Route,Navigate} from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { useAuthStatus } from './hooks/useAuthStatus'


export default function App() {
  const authStatus = useAuthStatus()
  console.log(authStatus)
  return (
    <div className="">
      <Routes >
        <Route path='/' element={authStatus ? <Home /> : <Navigate to='/login' />} />
        <Route path='/login' element={authStatus ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}
