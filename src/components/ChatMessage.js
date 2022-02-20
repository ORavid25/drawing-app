import React , {useState} from "react";
import '../css/ChatMessages.css';
import Messages from "./Messages";


function ChatMessage({socket}) {

  const [incomingMsg,setIncomingMsg] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('message',incomingMsg);
    setIncomingMsg('');
  }


  return (
    <div className="chat-container">

      <div className="chat-display">
        <Messages/>
      </div>
      
      <div className="input-send-container">

        <div className="btn-div">
          <button onClick={sendMessage} >Send</button>
        </div>

        <div className="input-div">
          <input type="text" value={incomingMsg} onChange={(e) => setIncomingMsg(e.target.value)}/>
        </div>
        
      </div>
    </div>
  );
}

export default ChatMessage;
