import React from 'react'
import ChatContactSection from './Components/ChatContactSection'
import ChatMessagesSection from './Components/ChatMessagesSection'

const Home = () => {
  return (
    <>
        <div className="home">
            <div className="homeContainer">
                <ChatContactSection/>
                <ChatMessagesSection/>
            </div>
        </div>
    </>
  )
}

export default Home