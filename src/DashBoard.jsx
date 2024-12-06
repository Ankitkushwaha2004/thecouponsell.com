import React from 'react';
import UserTable from './assets/components/UserTable';
import CouponTable from './assets/components/CouponTable';
import { Link, Route, Routes } from 'react-router-dom';
const DashBoard = () => {

  return (
    <div className='dashboard h-full flex gap-4 overflow-hidden'>
      <div className="menu flex flex-col">
        <Link to={'/UserTable'}>User Table</Link> 
        <Link to={'/CouponTable'}>Coupon Table</Link>
      </div>
      <div className="display ">
        <Routes>
          <Route path='/UserTable' element={<UserTable/>}/>
          <Route path='/CouponTable' element={<CouponTable/>}/>
        </Routes>
      </div>

    </div>
  )
}

export default DashBoard
