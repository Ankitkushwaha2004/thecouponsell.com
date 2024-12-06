import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='border-2 w-auto h-1/3'>
        <div className="profile-pic">
            <img className='w-16' src="https://images.unsplash.com/photo-1553181001-f9cf6c45afca?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="about">
            <h2>User Name</h2>
            <Link></Link>
            <Link></Link>
            <Link></Link>
        </div>
    </div>
  )
}

export default Profile
