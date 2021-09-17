import React, { useEffect } from "react";


export default function Posts(props) {
  const { defaultPosts, setDefaultPosts } = props;

  const getPost = async function () {
    try {
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2106-CPU-RM-WEB-PT/posts"
      );
      const data = await response.json();
      console.log(data.data.posts);
      const posts = data.data.posts;
      setDefaultPosts(posts);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  useEffect(() => {
    getPost();
  }, []);

  return (
    <div >

      {defaultPosts.map((post, indx) => {
        const {title, description, price, location, author} = post
        const {username} = author
        return (
          <div className="post" key={`post-${indx}`}>
            <div className="post-header">
            <h1>{title}</h1>
            <h2 className="username">{username}</h2>
            </div>
            <p>{description}</p>
            <p className="price">{price}</p>
            <p>{location}</p>
          </div>
        );
      })}
    </div>
  );
}
