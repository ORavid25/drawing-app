import React, { useState, useEffect } from "react";
import "../css/Messages.css";

const Messages = () => {
  const [messages, setMessages] = useState([
    {
      username: "Or Ravid",
      value: `hey shaked!!,
        ma oleh?
        
        `,
      time: "",
    },
    {
      username: "shaked",
      value: `hey or!!,
        ma oleh?
        
        `,
      time: "",
    },
 
  ]);

  return (
    <div className="messages-list">
        {messages.map((message) => {
            return(
                <div className="messages-container">
              
                  <span className="user">{message.username}:</span>
                  <span
                    className={message.value.length > 30 ? "message" : "short-message"}
                  >
                    {message.value}
                  </span>
                  <span className="date">{new Date().toLocaleTimeString()}</span>
                
              </div>
            )
        })}
     
    </div>
  );
};

export default Messages;
