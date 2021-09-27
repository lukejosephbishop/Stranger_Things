import React, { useEffect } from "react";

import { getPost } from "../api";
import { Link } from "react-router-dom";
import { storePostId } from "../auth";

import Search from "./Search";

export default function Posts(props) {
  const {
    defaultPosts,
    setDefaultPosts,
    isLoggedIn,
    setIsLoggedIn,
    userName,
    setPostId,
    postId,
    setSearchWord,
    searchWord,
    
  
  } = props;
  

  useEffect(async () => {
    const posts = await getPost();
    setDefaultPosts(posts);
  }, []);

  return (
    <div className="post-page">
      <Search
        setSearchWord={setSearchWord}
        searchWord={searchWord}
        defaultPosts={defaultPosts}
      />
      {isLoggedIn === true ? (
        <div className="post-actionbuttons">
          <button
            className="create-post"
            onClick={(event) => {
              event.preventDefault();
              window.location.href = "/newpost";
            }}
          >
            {" "}
            Create Post
          </button>
          <button
            className="edit-mypost"
            onClick={(event) => {
              event.preventDefault();
              window.location.href = "/editpost";
            }}
          >
            {" "}
            Edit my Posts
          </button>
        </div>
      ) : null}
      {defaultPosts.map((post, indx) => {
        console.log(defaultPosts)
        const { title, description, price, location, author, willDeliver, _id } =
          post;

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
              {willDeliver === true?<p>Will Deliver</p>:null}
            </div>
            {(userName != username) & (isLoggedIn === true) ? (
              <div>
                <Link to={`/posts/${username}`}>
                  <button
                    className="submit-button"
                    onClick={(event) => {
                      storePostId(_id);
                    }}
                  >
                    Send Message
                  </button>
                </Link>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
