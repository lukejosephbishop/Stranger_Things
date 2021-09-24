import React, { useEffect, useState } from "react";
import { getPost, loginUser, personalInfo } from "../api";

export default function EditPost(props) {
  const {
    defaultPosts,
    isLoggedIn,
    setIsLoading,
    setIsLoggedIn,
    setDefaultPosts,
  } = props;

  const [personaldata, setPersonal] = useState([]);

  useEffect(async () => {
    
    setIsLoggedIn(true);
    const Info = await personalInfo();
    setPersonal(Info.data.posts);
    
  }, []);



  return (
    <div className="post-page">
      {personaldata.map((post, indx) => {
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
            
              <div>
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </div>
            
          </div>
        );
      })}
    </div>
  );
}

const Edit = () => {
  return
}

const Delete = () => {
  return
}