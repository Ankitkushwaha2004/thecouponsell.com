import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import Profile from './assets/components/Profile'
const Nav = () => {
  return (
    <nav className='w-full flex justify-between items-center'>
      <div className="logo">
        <h1><a href="" className='text-3xl font-medium'>TheCouponSell.com</a></h1>
      </div>
      <div className="mid-btn">
        <Link to={'/DashBoard'}>DashBoard</Link>
        <Link>ge</Link>
        <Link>ege</Link>
        <Link>egg</Link>
      </div>
      <div  className="right-btn flex items-center ">
       <h2>Category</h2>
        <div className='profile'>
          <img onClick={
            console
          } src="./imgs/profile-pic.png" alt="" className=' p-2 max-w-10 rounded-full'/>
          {/* <Profile/> */}
        </div>
      </div>
    </nav>
  )
}

export default Nav
