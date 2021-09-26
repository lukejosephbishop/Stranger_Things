import React, { useEffect, useState } from "react";
import { storeToken, getToken, getUserName } from "../auth";
import { personalInfo } from "../api";

export default function Profile(props) {
  const [messages, setMessages] = useState([]);
  const { defaultPosts, setDefaultPosts, isLoggedIn, setIsLoggedIn } = props;

  const [localUser, setLocalUser] = useState("");

  useEffect(async () => {
    const INFO = await personalInfo();

    setMessages(INFO.data.messages);

    const TOKEN = getToken();
    if (TOKEN) {
      setIsLoggedIn(true);
    }
    const username = getUserName();
    setLocalUser(username);
  }, []);

  const inboxArr = [];
  const sentArr = [];

  messages.forEach((elem) => {
    const { fromUser } = elem;
    if (fromUser.username !== localUser) {
      inboxArr.push(elem);
    } else {
      sentArr.push(elem);
    }
  });
  console.log(inboxArr, "inbox");
  console.log(sentArr, "sent");

  return (
    <div className="post-page">
      <div className="post-page">
        <h1>Inbox</h1>
        <div>
          {inboxArr.map((elem, indx) => {
            
            const { post, fromUser, content } = elem;
            return (
              <div className="post" key={`sent-${indx}`}>
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
        </div>
        <h1>Sent</h1>
        <div>
          {sentArr.map((elem, indx) => {
            console.log(elem)
            const { post, fromUser, content } = elem;
            return (
              <div className="post" key={`sent-${indx}`}>
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
        </div>
      </div>
    </div>
  );
}
