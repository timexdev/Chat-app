import React from 'react';
import MessagesContainer from './MessagesContainer';
import InputText from "./InputText"

const ChatMessagesSection = () => {
  return (
    <div className='chatMessagesSection'>
      <div className="chatInfo">
        <span>John</span>
        <div className="chatIcons">
          <i class="bi bi-camera-video"></i>
          <i class="bi bi-images"></i>
          <i class="bi bi-three-dots"></i>
        </div>
      </div>
      <MessagesContainer/>
      <InputText/>
    </div>
  )
}

export default ChatMessagesSection