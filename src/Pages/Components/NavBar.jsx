import React from 'react'

const NavBar = () => {
  return (
    <div className='navBar'>
      <div className="logo">Timex Chat</div>
      <div className="user">
        <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?q=10&h=200" alt="" />
        <span>Peter</span>
        <button className='bg-success'>Log Out </button>
      </div>
    </div>
  )
}

export default NavBar