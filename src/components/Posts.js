import React, { useEffect } from "react";
import { NewPost } from "./NewPost"
import { getPost} from "../api"

import {useHistory} from 'react-router-dom'

export default function Posts(props) {
  const { defaultPosts, setDefaultPosts, isLoggedIn, setIsLoggedIn } = props;
  const history = useHistory()

  
  useEffect(async() => {
    const posts = await getPost();
    setDefaultPosts(posts)
  }, []);

  return (
    <div className="post-page">
      {isLoggedIn === true ? (
        <div className="post-actionbuttons">
          <button className="create-post" onClick={(event) => {
            event.preventDefault()
           window.location.href="/newpost"
            
          }}> Create Post
          </button>
          <button className="edit-mypost" onClick={(event) => {
            event.preventDefault()
           window.location.href="/editpost"
            
          }}> Edit my Posts</button>
        </div>
      ) : null}
      {defaultPosts.map((post, indx) => {
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
