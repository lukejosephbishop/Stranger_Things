import React, { useState, useEffect } from "react";
import { messages } from "../api";
import {  getPostId } from "../auth";
import { useHistory } from "react-router-dom";

export default function SendMessage(props) {
  const { postId, defaultPosts} = props;

  const [personaldata, setPersonal] = useState([]);
  const [messageContent, setMessageContent] = useState("");

  useEffect(() => {
    const POSTID = getPostId();

    setPersonal(POSTID);
  }, []);

  const history = useHistory();

  const sendMessageArr = [];
  defaultPosts.forEach((elem) => {
    if (elem._id === personaldata) {
      sendMessageArr.push(elem);
    }
  });
  console.log(sendMessageArr);

  return (
    <form
      className="login-form"
      className="login-form"
      onSubmit={async (event) => {
        event.preventDefault();

        try {
          const result = await messages(messageContent, personaldata);
          console.log(result, "component");
        } catch (error) {
          console.log(error);
        } finally {
          //   clearPostId();
          history.push("/posts");
          alert("Message Sent!");
        }
      }}
    >
      <div className="container">
        <h1 className="login-title">Message User</h1>
        <div className="imgcontainer">
          <i className="far fa-envelope fa-5x"></i>
        </div>
        {sendMessageArr.map((elem) => {
          const {
            title,
            description,
            price,
            location,
            author,
            willDeliver,
            isAuthor,
          } = elem;

          return (
            <div className="post" key={`post-${postId}`}>
              <div className="post-header">
                <h1>{title}</h1>
                <h2 className="username">{author.username}</h2>
              </div>
              <div className="post-content">
                <p>{description}</p>
                <p className="price">{price}</p>
                <p>{location}</p>
              </div>
            </div>
          );
        })}
        <p></p>
        <>
          <label htmlFor="email">
            <b>Write a message</b>
          </label>
          <input
            type="text"
            placeholder="Text"
            name=""
            id="email"
            required
            value={messageContent}
            onChange={(event) => {
              console.log(event.target.value);
              setMessageContent(event.target.value);
            }}
          />
        </>

        <button type="submit" className="registerbtn">
          Send
        </button>
      </div>
    </form>
  );
}
