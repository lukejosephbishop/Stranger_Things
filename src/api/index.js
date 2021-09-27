import axios from "axios";
import { storeToken, getToken, clearCurrentUser } from "../auth";

const BASE = "https://strangers-things.herokuapp.com";
const COHORT = "2106-CPU-RM-WEB-PT";
const TOKEN = getToken();

export async function loginUser(username, password) {
  try {
    const data = await fetch(`${BASE}/api/${COHORT}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        return result.data;
      });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function registerUser(username, password) {
  try {
    const data = await fetch(`${BASE}/api/${COHORT}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        const {success, error} = result
        if (success === false) {
         
          return alert(error.message)
        }
        
        
        return result.data;
      });
    return data;
  } catch (error) {
   
    throw error;
    
  }
}

export async function createNewPost(
  title,
  description,
  price,
  location,
  willDeliver
) {
  try {
    const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2106-CPU-RM-WEB-PT/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
          post: {
            title: title,
            description: description,
            price: price,
            location: location,
            willDeliver: willDeliver,
          },
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        return result;
      });

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getPost() {
  try {
    const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2106-CPU-RM-WEB-PT/posts"
    );
    const data = await response.json();

    const posts = data.data.posts;

    return posts;
  } catch (error) {
    console.log(error);
  } finally {
  }
}

export async function personalInfo() {
  try {
    const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2106-CPU-RM-WEB-PT/users/me",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        return result;
      });
    return response;
  } catch (error) {
    console.log(error);
  } finally {
  }
}

export async function DELETE(_id) {
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/${COHORT}/posts/${_id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        return result;
      });
    return response;
  } catch (error) {
    console.log(error);
  }
}
export async function edit(
  title,
  description,
  price,
  location,
  willDeliver,
  postID
) {
  const token = getToken();

  try {
    const { data } = await axios.patch(
      `${BASE}/api/${COHORT}/posts/${postID}`,
      {
        post: {
          title,
          description,
          price,
          location,
          willDeliver,
        },
      },
      {
        headers: {
          "Content-Type": "application/JSON",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function userData() {
  try {
    const response = fetch(`${BASE}/api/${COHORT}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        return result;
      });
    return response;
  } catch (error) {
    consolelog(error);
  }
}

export async function messages(content, postID) {
  try {
    const response = await fetch(
      `${BASE}/api/${COHORT}/posts/${postID}/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
          message: {
            content: `${content}`,
          },
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        return result;
      });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}
