import React, { useState, useEffect } from "react";
import { personalInfo, edit, userData, messages } from "../api";
import { getToken } from "../auth";
import { useHistory } from "react-router-dom";

export default function EditMyPost(props) {
  const { postId, setPostId, setIsLoggedIn, isLoggedIn } = props;
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editLocation, setEditLocation] = useState("");
  const [editWillDeliver, setEditWillDeliver] = useState(false);
  const [myToken, setMyToken] = useState("");
  const [personaldata, setPersonal] = useState([]);

  const history = useHistory();
  useEffect(async () => {
    const TOKEN = getToken();
    if (TOKEN) {
      setIsLoggedIn(true);
      setMyToken(TOKEN);
    }

    const Info = await userData();

    setPersonal(Info.data.posts);
  }, []);

  const post = personaldata.filter((elem) => elem._id === postId);
  const { title, description, price, location, author, willDeliver, isAuthor } =
    post;

  return (
    <>
      <div className="container-editpost">
        <h1 className="login-title"> Edit</h1>
        <div className="imgcontainer">
          <i
            className="fas fa-pen-square fa-5x"
            style={{ color: "rgb(200, 117, 7)" }}
          ></i>
        </div>
        {post.map((elem) => {
          const {
            title,
            description,
            price,
            location,
            author,
            willDeliver,
            isAuthor,
          } = elem;

          return (
            <div className="editmypost" key={`post-${postId}`}>
              <div className="post-header">
                <h1>{!editTitle ? title : editTitle}</h1>
              </div>
              <div className="post-content">
                <p>{!editDescription ? description : editDescription}</p>
                <p className="price">{!editPrice ? price : editPrice}</p>
                <p>{!editLocation ? location : editLocation}</p>
              </div>
            </div>
          );
        })}

        <form
          className="login-form"
          onSubmit={async (event) => {
            event.preventDefault();
            try {
              const results = await edit(
                editTitle,
                editDescription,
                editPrice,
                editLocation,
                editWillDeliver,
                postId,
                myToken
              );

              setEditTitle("");
              setEditDescription("");
              setEditPrice("");
              setEditLocation("");
              setEditWillDeliver("");
              alert("Saved Changes To Post!")
              history.push("/editpost")
            } catch (error) {
              console.log(error);
            } finally {
              
            }
          }}
        >
          <div className="login-container">
            <label className="label" htmlFor={editTitle}>
              New title
            </label>
            <input
              type="text"
              name={editTitle}
              placeholder="title"
              value={editTitle}
              onChange={(event) => {
                setEditTitle(event.target.value);
              }}
              required
            ></input>
            <label htmlFor={editDescription}>New Description</label>
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
            <label htmlFor={editPrice}>New Price</label>
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
            <label htmlFor={editLocation}>New Location</label>
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
            <button
              className="submit-button"
              type="submit"
              
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
