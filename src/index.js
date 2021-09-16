import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Home, Login, Profile, Posts, Navbar } from "./components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  const [defaultPosts, setDefaultPosts] = useState([]);
  return (
    <div id="App">
      <Navbar />
      <Switch>
        <Route path="/posts">
          <Posts
            defaultPosts={defaultPosts}
            setDefaultPosts={setDefaultPosts}
          />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
