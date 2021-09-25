import React, { useState, useEffect } from "react";
import { personalInfo, Edit } from "../api";

export default function EditMyPost(props) {
  const { postId, setPostId } = props;
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editLocation, setEditLocation] = useState("");
  const [editWillDeliver, setEditWillDeliver] = useState(false);

  const [personaldata, setPersonal] = useState([]);

  useEffect(async () => {
    const Info = await personalInfo();
    setPersonal(Info.data.posts);
  }, []);

  const post = personaldata.filter((elem) => elem._id === postId);

  return (
    <>
      <div className="change-the-post">
        <h1 className="newpost-title"> Edit</h1>
        <div className="imgcontainer">
          <i
            className="fas fa-pen-square fa-5x"
            style={{ color: "rgb(200, 117, 7)" }}
          ></i>
        </div>
        {post.map((elem) => {
          const { title, description, price, location, author, isAuthor } =
            elem;

          return (
            <div className="post" key={`post-${postId}`}>
              <div className="post-header">
                <h1>{title}</h1>
              </div>
              <div className="post-content">
                <p>{description}</p>
                <p className="price">{price}</p>
                <p>{location}</p>
              </div>
            </div>
          );
        })}

        <form
          className="newpost"
          onSubmit={async (event) => {
            event.preventDefault();
            console.log(postId)
            try {
              const results = await Edit(
                editTitle,
                editDescription,
                editPrice,
                editLocation,
                editWillDeliver,
                postId
              );
              console.log(results);
              setEditTitle("");
              setEditDescription("");
              setEditPrice("");
              setEditLocation("");
              setEditWillDeliver("");
            } catch (error) {
              console.log(error);
            } finally {
            //   setIsLoading(false);
            }
          }}
        >
          <div className="edit-card">
            <label htmlFor={editTitle}>Title</label>
            <input
              type="text"
              name={editTitle}
              placeholder="title"
              value={editTitle}
              onChange={(event) => {
                console.log(event.target.value);
                setEditTitle(event.target.value);
              }}
              required
            ></input>
            <label htmlFor={editDescription}>Description</label>
            <input
              type="text"
              name={editDescription}
              placeholder="description"
              value={editDescription}
              onChange={(event) => {
                setEditDescription(event.target.value);
              }}
              required
            ></input>
            <label htmlFor={editPrice}>Price</label>
            <input
              type="text"
              name={editPrice}
              placeholder="price"
              value={editPrice}
              onChange={(event) => {
                setEditPrice(event.target.value);
              }}
              required
            ></input>
            <label htmlFor={editLocation}>Location</label>
            <input
              type="text"
              name={editLocation}
              placeholder="location"
              value={editLocation}
              onChange={(event) => {
                setEditLocation(event.target.value);
              }}
              required
            ></input>
            <label className="checkbox">
              <input type="checkbox" name="delivery" /> Willing to Deliver
            </label>
            <button className="submit-button" type="submit">
              Submit
            </button>
          </div>
        </form>
        
      </div>
    </>
  );
}
