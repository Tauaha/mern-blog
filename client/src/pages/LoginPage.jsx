import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../redux/features/auth/authOperations'
import { toast } from 'react-toastify'
import { checkIsAuth } from '../redux/features/auth/authSlice'

const LoginPage = () => {
    const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { status } = useSelector((state) => state.auth)
  const isAuth = useSelector(checkIsAuth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
    useEffect(() => {
    if (status) {
     toast(status);
      }
      if (isAuth) {
        navigate('/')
      }
      
  },[status, isAuth, navigate])
    const handleSubmit = () => {
    try {
      dispatch(loginUser({username, password}))
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <form onSubmit={e => e.preventDefault()}
    className='w-2/4 h-60 mx-auto mt-40'>
      <h1 className='text-lg text-gray-700 text-center'>Authorization</h1>
      <label className='text-xs text-green-blue'>
        Username:
        <input type='text'
          placeholder='Username'
          value={username}
          onChange={e=> setUsername(e.target.value)}
          className='mt-1 text-black w-full rounded-lg bg-input
         border py-1 px-2 text-xs outline-none placeholder:text-gray-light'></input>
      </label>
       <label className='text-xs text-green-blue'>
        Password:
        <input type='password'
          placeholder='password'
          value={password}
          onChange={e=> setPassword(e.target.value)}
          className='mt-1 text-black w-full rounded-lg bg-input
         border py-1 px-2 text-xs outline-none placeholder:text-gray-light'></input>
      </label>
      <div className='flex flex-col gap-8 justify-center mt-4'>
        <button type='submit'
            onClick={handleSubmit}
          className='flex justify-center text-xs text-white rounded-sm px-4 py-2 my-2
         bg-green-blue'> LogIn</button>
        <Link to='/register' className='flex justify-center  items-center text-xs text-black'>New User? Sign Up Here</Link>
   
      </div>
</form>
  )
}

export default LoginPage
