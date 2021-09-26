import React, { useEffect } from "react";
import { NewPost } from "./NewPost"
import { getPost} from "../api"
import {Link} from "react-router-dom"
import {storePostId} from "../auth"
import {useHistory} from 'react-router-dom'

export default function Posts(props) {
  const { defaultPosts, setDefaultPosts, isLoggedIn, setIsLoggedIn, userName, setPostId, postId } = props;
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
        
        const { title, description, price, location, author, isAuthor, _id } = post;
        
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
            {userName != username ? (
              <div>
                <Link to={`/posts/${username}`}><button className="submit-button" onClick={(event)=>{
                  
                  storePostId(_id)
                }}>Send Message</button></Link>

              </div>
            ) : <h1>Your Post</h1>}
          </div>
        );
      })}
    </div>
  );
}
