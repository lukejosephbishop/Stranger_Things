import React, { useEffect, useState } from "react";
import { DELETE, personalInfo, userData } from "../api";
import { useHistory, Link } from "react-router-dom";

export default function EditPost(props) {
  const {
    setIsLoading,

    setPostId,
  } = props;

  const [personaldata, setPersonal] = useState([]);

  const history = useHistory();

  useEffect(async () => {
    setIsLoading(true);
    try {
      const Info = await userData();
      "component", Info;

      await setPersonal(Info.data.posts);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="post-page">
      {personaldata.map((post, indx) => {
        const {
          title,
          description,
          price,
          location,
          author,
          _id,
          willDeliver,
          active,
        } = post;
        const { username } = author;

        if (!active) {
          return null;
        }
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
              {willDeliver === true ? <p>Will Deliver</p> : null}
            </div>

            <div>
              <Link to={`/edit/${_id}`}>
                <button
                  className="edit-button"
                  onClick={(event) => {
                    setPostId("");
                    setPostId(_id);
                  }}
                >
                  Edit
                </button>
              </Link>

              <button
                className="delete-button"
                onClick={async (event) => {
                  const course = confirm(
                    "Are you sure you want to delete this post?"
                  );

                  if (course === true) {
                    event.preventDefault;
                    try {
                      const response = await DELETE(_id);
                      return response;
                    } catch (error) {
                      console.log(error);
                    } finally {
                      const Info = await personalInfo();
                      setPersonal(Info.data.posts);
                      window.location.reload();
                    }
                  }
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
