import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <form onSubmit={e => e.preventDefault()}
    className='w-1/4 h-60 mx-auto mt-40'>
      <h1 className='text-lg text-gray-700 text-center'>Registration</h1>
      <label className='text-xs text-green-blue'>
        Username:
        <input type='text' placeholder='Username' className='mt-1 text-black w-full rounded-lg bg-input
         border py-1 px-2 text-xs outline-none placeholder: text-placeholder'></input>
      </label>
       <label className='text-xs text-green-blue'>
        Password:
        <input type='password' placeholder='password' className='mt-1 text-black w-full rounded-lg bg-input
         border py-1 px-2 text-xs outline-none placeholder: text-placeholder'></input>
      </label>
      <div className='flex gap-8 justify-center mt-4'>
        <button type='submit' className='flex justify-center text-xs text-white rounded-sm py-w px-4
         bg-green-blue'> Create Account</button>
        <Link to='/login' className='flex justify-center  items-center text-xs text-black'>Existing user?</Link>
   
      </div>
</form>
  )
}

export default RegisterPage
