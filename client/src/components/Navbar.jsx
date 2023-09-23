import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {

  const isAuth = false
  const activePage = {
    color: '#00AAA1'
  }
  return (
    <div className='flex py-4 justify-between items-center'>
<span className='flex justify-center items-center w-6 h-6 bg-green-blue text-xs text-white rouded-sm '>E</span>
      {isAuth && (
          <ul className='flex gap-8'>
        <li>
          <NavLink to={'/'} href='/' className='text-xs text-nav-title hover:text-green-blue' style={({isActive})=> isActive ? activePage: undefined}>
            Home
          </NavLink></li>
          <li>
          <NavLink to={'/posts'} href='/' className='text-xs text-nav-title hover:text-green-blue'
          style={({isActive})=> isActive ? activePage: undefined}>
            My Posts
          </NavLink></li>
          <li>
          <NavLink to={'/new'} href='/' className='text-xs text-nav-title hover:text-green-blue'
          style={({isActive})=> isActive ? activePage: undefined}>
            Add Post
        </NavLink></li>
      </ul>
    )}
      <div className='flex justify-center items-center bg-green-blue text-xs text-white rouded-sm px-4 py-2'>
        {isAuth ? (
           <button>
Log Out
      </button>
     ): (<Link to={'./login'}>   <button>
Log In
      </button></Link>)}
      </div>

    </div>
  )
}

export default Navbar
