import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Home, Login, Profile, Posts, Navbar, Register, NewPost, EditPost } from "./components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  //Redirect,
} from "react-router-dom";

import {getToken} from "./auth"

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [defaultPosts, setDefaultPosts] = useState([]);

  useEffect(() => {
    const TOKEN = getToken();
    if (TOKEN) {
      setIsLoggedIn(true);
    }
  }, [])

  return (
    <div id="App">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <Route path="/posts">
          <Posts
            defaultPosts={defaultPosts}
            setDefaultPosts={setDefaultPosts}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        </Route>
        <Route path="/profile">
          <Profile defaultPosts={defaultPosts} isLoggedIn={isLoggedIn}
            setIsLoading={setIsLoading}
            setIsLoggedIn={setIsLoggedIn}
            setDefaultPosts={setDefaultPosts}/>
        </Route>
        <Route path="/login">
          <Login
            isLoggedIn={isLoggedIn}
            setIsLoading={setIsLoading}
            setIsLoggedIn={setIsLoggedIn}
          />
        </Route>
        <Route path="/register">
          <Register setIsLoading={setIsLoading} setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/newpost">
          <NewPost isLoggedIn={isLoggedIn}
            setIsLoading={setIsLoading}
            setIsLoggedIn={setIsLoggedIn}/>
        </Route>
        <Route path ="/editpost">
          <EditPost isLoggedIn={isLoggedIn}
            setIsLoading={setIsLoading}
            setIsLoggedIn={setIsLoggedIn}/>
        </Route>
        <Route path="/">
          <Home />
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
