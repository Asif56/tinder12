import React,{useState} from 'react'
import { Avatar } from '@material-ui/core'
import './ChatScreen.css'
function ChatScreen() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name:"bmnm",
            image:"bvhcb",
            message:"nnbnbbnbnbn"
        },
        {
            message:'bhhbfhbhbh'
        }
    ])

    const handler=(e)=>{
      e.preventDefault()
      setMessages([...messages,{message:input}])
      setInput('');
    }
    return (
        <div className='chatScreen'>
            <p className='chatScreen_timestamp'>YOU HAVE MATCHED</p>
            {messages.map(message=>(
                message.name ? (
                    <div className="chatScreen_message">
                    <Avatar
                    className="chatScreen_image"
                    src={message.image}
                    alt={message.name}
                    />
                    <p className='chatScreen_text'>{message.message}</p>
                </div>
                ):(
                    <div className="chatScreen_message">
                   <p className='chatScreen_textUser' >{message.message}</p>
                </div> 
                )
                
            ))}
          <div >
              <form className="chatScreen_input">
                  <input
                  value={input}
                  onChange={(e)=>setInput(e.target.value)}
                  className="chatScreen_inputField"
                  placeholder="Please Write here"
                  type='text'
                  />
                  <button type='submit'
                  onClick={handler}
                  className="chatScreen_inputButton">SEND</button>
              </form>
          </div>

        </div>
    )
}

export default ChatScreen
