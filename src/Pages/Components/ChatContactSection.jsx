import React from 'react'
import NavBar from "./NavBar"
import Search from "./Search";
import ChatContactList from './ChatContactList';

const ChatContactSection = () => {
  return (
    <div className='chatContactSection bg-success'>
        <NavBar/>
        <Search/>
        <ChatContactList/>
    </div>
  )
}

export default ChatContactSection 