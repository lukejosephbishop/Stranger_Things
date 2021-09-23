import React, { useEffect, useState } from "react";
import { getPost, loginUser } from "../api";

export default function EditPost(props) {
  const {
    defaultPosts,
    isLoggedIn,
    setIsLoading,
    setIsLoggedIn,
    setDefaultPosts,
   
  } = props;
  useEffect(async () => {
    const posts = await getPost();
    setDefaultPosts(posts);
    
  }, []);

//   const edit = defaultPosts.filter((posts) => {
    
//     return posts.author.username === 
//   });

  return (
    <div className="post-page">
      {edit.map((post, indx) => {
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
