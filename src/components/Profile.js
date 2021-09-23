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
      { messages.map((post, indx) => {
        
        const { title, description, price, location, author, isAuthor } = post;
        const { username } = author;
        return (
          <div className="post" key={`post-${indx}`}>
            <div className="post-header">
              <h1>{title}</h1>
              <h2 className="username">{username}</h2>
            </div>
            <div className="post-content">
              <p>{description}</p>
              <p className="price">{price}</p>
              <p>{location}</p>
            </div>
            {(isLoggedIn === true) & (isAuthor === true) ? (
              <>
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
