import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <label htmlFor="search"> <i class="bi bi-search text-white pe-1"></i></label>
        <input type="text" placeholder='Search' id='search' />
      </div>
      <div className="userChat">
        <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?q=10&h=200" alt="" />
        <div className="userChatInfo">
          <span>John</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Search