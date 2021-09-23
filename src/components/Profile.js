import React, { useEffect, useState } from "react";
import { storeToken, getToken} from "../auth";
import { getMessages} from "../api";

export default function Profile(props) {

  const [messages, setMessages] = useState([])
  const { defaultPosts, setDefaultPosts, isLoggedIn, setIsLoggedIn } = props;
  
  useEffect(async() => {
    const MYMESSAGES = await getMessages();
    
  setMessages(MYMESSAGES.data.messages);

   console.log(MYMESSAGES)
    const TOKEN = getToken();
    if (TOKEN) {
      setIsLoggedIn(true);
    }
  }, []);



  return (
    <div className="post-page">
      <h1>Inbox</h1>
      { messages.map((message, indx) => {
        const {content, username, fromUser, post} = message
        
        return (
          
          <div className="post" key={`message-${indx}`}>
            <div className="post-header">
              <h1>{post.title}</h1>
              <h2 className="username">{fromUser.username}</h2>
            </div>
            <div className="post-content">
              <p>{content}</p>
              
            </div>
          </div>
          
        );
      })}
      <h1>Sent</h1>
    </div>
  );
}
