import React, { useState } from "react";
import { createNewPost } from "../api";

import { useHistory } from "react-router-dom";

function NewPost(props) {
  const { setIsLoading, delivery, setDelivery } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  const [isAuthor, setIsAuthor] = useState(true);

  const history = useHistory();

  return (
    <form
      className="newpost"
      onSubmit={async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setIsAuthor(true);
        setDelivery(false);
        try {
          const results = await createNewPost(
            title,
            description,
            price,
            location,
            delivery,
            isAuthor
          );

          setTitle("");
          setDescription("");
          setPrice("");
          setLocation("");
          setDelivery("");
          alert("New Post Made!");
          history.push("/posts");
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      }}
    >
      <h1 className="newpost-title"> Create New Post</h1>
      <div className="imgcontainer">
        <i
          className="fas fa-pen-square fa-5x"
          style={{ color: "rgb(200, 117, 7)" }}
        ></i>
      </div>

      <div className="">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          required
        ></input>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          placeholder="description"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          required
        ></input>
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          placeholder="price"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
          required
        ></input>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          placeholder="location"
          value={location}
          onChange={(event) => {
            setLocation(event.target.value);
          }}
          required
        ></input>
        <label className="checkbox">
          Willing to Deliver
          <input
            type="checkbox"
            id="myCheck"
            name="delivery"
            value={true}
            onChange={(event) => {
              
                setDelivery(true);
              
            }}
          />{" "}
          Yes
          <input
            type="checkbox"
            id="myCheck"
            name="delivery"
            value={false}
            onChange={(event) => {
             
                setDelivery(false);
              
            }}
          />{" "}
          No
        </label>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default NewPost;
