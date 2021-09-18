import React, { useEffect } from "react";
import { loginUser } from "../api";

export default function Login() {
  const username = "superman27";
  const password = "krypt0n0rbust";
  useEffect(() => {
    loginUser(username, password);
  }, []);

  return (
    <form className="login-form" action="action_page.php" method="post">
      <h1 className="login-title"> <span>Stranger's Things</span> Login</h1>
      <div className="imgcontainer">
        <i className="far fa-user fa-5x"></i>
      </div>

      <div className="login-container">
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <button type="submit">Login</button>

        <label className="checkbox">
          <input type="checkbox" name="remember" /> Remember me
        </label>
        <a href="./Register.jsx">Have you created an Account? Sign up here.</a>
      </div>

      <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
        <button type="button" className="cancelbtn">
          Cancel
        </button>
        <span className="psw">
          Forgot <a href="#">password?</a>
        </span>
      </div>
    </form>
  );
}
