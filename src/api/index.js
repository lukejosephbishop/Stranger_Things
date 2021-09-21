import axios from "axios";
import {storeToken, getToken, clearCurrentUser} from "../auth"

const BASE = "https://strangers-things.herokuapp.com";
const COHORT = "2106-CPU-RM-WEB-PT"
export async function loginUser(username, password) {
  try {
    const data = await fetch(
      `${BASE}/api/${COHORT}/users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer TOKEN_STRING_HERE",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      }
    ).then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
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
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  } catch (error) {
    throw error;
  }
}

export async function getTodosByUser(userId) {
  try {
    const { data } = await axios.get(`${BASE}/users/${userId}/todos`);
    return data;
  } catch (error) {
    throw error;
  }
}
