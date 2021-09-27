import React from "react";
import { Link } from "react-router-dom";
import { storePostId } from "../auth";

const SearchPage = ({ userName, defaultPosts, searchWord, isLoggedIn }) => {
  const filteredPosts = defaultPosts.filter((e) => {
    const title = e.title.toLowerCase();
    
    const description = e.description.toLowerCase();
    const price = String(e.price);
    const queryArr = searchWord.toLowerCase().split(" ");

    for (let i = 0; i < queryArr.length; i++) {
      if (
        title.includes(queryArr[i]) ||
        description.includes(queryArr[i]) ||
        price.includes(queryArr[i]) 
      ) {
        return e;
      }
    }
  });

  return (
    <div>
      {filteredPosts.map((post, indx) => {
        const { title, description, price, location, author,  _id } =
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
};

export default SearchPage;
