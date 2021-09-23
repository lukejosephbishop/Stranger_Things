import axios from "axios";
import {storeToken, getToken, clearCurrentUser} from "../auth"

const BASE = "https://strangers-things.herokuapp.com";
const COHORT = "2106-CPU-RM-WEB-PT"
const TOKEN = getToken();

export async function loginUser(username, password) {
  try {
    const data = await fetch(
      `${BASE}/api/${COHORT}/users/login`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          }
        })
      }).then(response => response.json())
        .then(result => {
          return result.data
        })
        return data
  } catch (error) {
    console.log( error);
  }
}

export async function registerUser(username, password) {
  try {
    const data = await fetch(
      `${BASE}/api/${COHORT}/users/register`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username, password
          }
        })
      }).then(response => response.json())
        .then(result => {
          return result.data
        })
        return data
  } catch (error) {
    throw error;
  }
}

export async function createNewPost(title, description, price, location, willDeliver){
  try {
    fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/posts', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    post: {
      title: title,
      description: description,
      price: price,
      location: location,
      willDeliver: willDeliver
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  } catch (error) {
    console.log(error)
  }
}

export async function getPost() {
  try {
    const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2106-CPU-RM-WEB-PT/posts"
    );
    const data = await response.json();
    console.log(data.data.posts);
    const posts = data.data.posts;
    
    return posts
  } catch (error) {
    console.log(error);
  } finally {
  }
};


export async function getMessages() {
  try {
    const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2106-CPU-RM-WEB-PT/users/me",
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN}`
        },
      }).then(response => response.json())
        .then(result => {
          return result
        })
        return response
  } catch (error) {
    console.log(error);
  } finally {
  }
};