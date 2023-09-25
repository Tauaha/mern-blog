import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { registerUser } from '../redux/features/auth/authOperations'
import { toast } from 'react-toastify'
import { checkIsAuth } from '../redux/features/auth/authSlice'


const RegisterPage = () => {
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
      dispatch(registerUser({username, password}))
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}
    className='w-1/4 h-60 mx-auto mt-40'>
      <h1 className='text-lg text-gray-700 text-center'>Registration</h1>
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
      <div className='flex gap-8 justify-center mt-4'>
        <button type='submit'
          onClick={handleSubmit}
          className='flex justify-center text-xs text-white rounded-sm py-w px-4
         bg-green-blue'> Create Account</button>
        <Link to='/login' className='flex justify-center  items-center text-xs text-black'>Existing user?</Link>
   
      </div>
</form>
  )
}

export default RegisterPage
