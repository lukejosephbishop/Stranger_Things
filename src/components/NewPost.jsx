import React from "react";

function NewPost() {
  return (
    <form className="newpost">
      <h1 className="newpost-title"> Create New Post</h1>
      <div className="imgcontainer"><i class="fas fa-pen-square fa-5x" style={{color:"rgb(200, 117, 7)"}}></i></div>
      
      <div className="">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" placeholder="title" required></input>
        <label htmlFor="description">Description</label>
        <input type="text" name="description" placeholder="description" required></input>
        <label htmlFor="price">Price</label>
        <input type="text" name="price" placeholder="price" required></input>
        <label htmlFor="location">Location</label>
        <input type="text" name="location" placeholder="location" required></input>
        <label className="checkbox">
            <input type="checkbox" name="delivery" /> Willing to Deliver
          </label>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default NewPost;
