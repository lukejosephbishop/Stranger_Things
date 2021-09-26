import React, { useEffect, useState } from "react";
import { loginUser } from "../api";
import { storeToken, getToken, storeUserName, getUserName  } from "../auth";
import { useHistory, Link, Redirect } from "react-router-dom";

export default function Login(props) {
const {userName, setUserName, isLoggedIn, setIsLoading, setIsLoggedIn } = props
  
  const [password, setPassword] = useState("");

  const history = useHistory()

  useEffect(() => {
    const TOKEN = getToken();
    if (TOKEN) {
      setIsLoggedIn(true);
    }
    
  }, []);

  if (isLoggedIn === false) {
    return (
      <form
        className="login-form"
        onSubmit={async (event) => {
          event.preventDefault();
          setIsLoading(true);

          try {
            const results = await loginUser(userName, password);
            (results, "in login");
            storeToken(results.token);
            setIsLoggedIn(true);
            
            setPassword("");
          
            history.push("/posts")
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
              storeUserName(event.target.value)
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
          
            <button className ="submit-button" type="submit">Login</button>
          
          <label className="checkbox">
            <input type="checkbox" name="remember" /> Remember me
          </label>
          Have you created an Account?<a href="/Register"> Sign up here.</a>
        </div>
      </form>
    );
  } else {
    return null;
  }
}
