import React from 'react'
import './Chats.css'
import Chat from './Chat'
function Chats() {
    return (
        <div className="chats">
            <Chat
             name="mark"
             message="message"
             timestamp='timestamp'
             profilePic='profilePic'
            />
             <Chat
             name="mark"
             message="message"
             timestamp='timestamp'
             profilePic='profilePic'
            />
             <Chat
             name="mark"
             message="message"
             timestamp='timestamp'
             profilePic='profilePic'
            />
        </div>
    )
}

export default Chats
