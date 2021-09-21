import React, { useEffect, useState } from "react";
import { loginUser } from "../api";
import { storeToken } from "../auth";

export default function Login({ setIsLoading, setIsLoggedIn }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    loginUser();
  }, []);

  return (
    <form
      className="login-form"
      onSubmit={async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
          const results = await loginUser(userName, password);
          console.log(results);
          // storeToken(results.data.token);
          setIsLoggedIn(true);
          setUserName("");
          setPassword("");
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      }}
    >
      <h1 className="login-title">
        {" "}
        <span>Stranger's Things</span> Login
      </h1>
      <div className="imgcontainer">
        <i className="far fa-user fa-5x"></i>
      </div>

      <div className="login-container">
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          required
          value={userName}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button type="submit">Login</button>

        <label className="checkbox">
          <input type="checkbox" name="remember" /> Remember me
        </label>
        Have you created an Account?<a href="/Register"> Sign up here.</a>
      </div>
    </form>
  );
}
