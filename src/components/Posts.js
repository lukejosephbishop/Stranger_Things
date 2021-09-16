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
    <div>

      {defaultPosts.map((post, indx) => {
        return (
          <div className="post" key={`post-${indx}`}>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <p>{post.price}</p>
            <p>{post.location}</p>
          </div>
        );
      })}
    </div>
  );
}
