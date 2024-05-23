import React from 'react';
import './navbar.css'
const navbar = () => {
  return (
    <div className='navbar'>
      <div className='navContainer'>    
        <span className='navLogo'>IamBooking</span>
        <div className='navItems'>
          <button className='navButton btn-register'>Register</button>
          <button className='navButton btn-login'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default navbar
