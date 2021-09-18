import axios from "axios";

const BASE = "https://strangers-things.herokuapp.com";

export async function loginUser(username, password) {
  try {
    const { data } = await fetch(`${BASE}/api/2106-CPU-RM-WEB-PT/users/login`, {
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
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        return result
        
      });
  } catch (error) {
    throw error;
  }
}

export async function registerUser(username, password) {
  try {
    const { data } = await fetch(
      `${BASE}/api/2106-CPU-RM-WEB-PT/users/register`,
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
