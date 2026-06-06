import React from 'react'
import "./Header.scss"
function Header() {
  return (
    <div className='header-wrap'>
        <a href="/homepage">
          <label>Home</label>
        </a>
        <a href="/dashboard">
          <label>Dashboard</label>
        </a>
        <a href="/cartpage">
          <label>Cart</label>
        </a>
        <a href="/loginpage">
          <label>Login</label>
        </a>
        <a href="/productlist">
          <label>Product</label>
        </a>
        
    </div>
  )
}

export default Header