import { Outlet } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'
import { login as storeLogin, logout as storeLogut } from './store/authSlice.js'
import { useDispatch } from 'react-redux'
import { getLoggedInUserDetails } from './api/user.api.js'

function App() {
const dispatch = useDispatch();
const [loading, setLoading] = useState(true)

useEffect(() => {
  getLoggedInUserDetails()
  .then((userData) => {
    console.log('logged in user data', userData)
    if(userData) {
      console.log('in login')
      dispatch(storeLogin(userData))
    } else {
      console.log('in logout')
      dispatch(storeLogut())
    }
  }).finally(() => {
    setLoading(false)
  })
}, [])  
  return !loading ? (
    <main className='w-full h-full'>
      <Outlet/>
    </main>
  ) : (null);
}

export default App
