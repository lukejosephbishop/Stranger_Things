import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  Home,
  Login,
  Profile,
  Posts,
  Navbar,
  Register,
  NewPost,
  EditPost,
  EditMyPost,
  SendMessage,
} from "./components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  //Redirect,
} from "react-router-dom";

import { getToken} from "./auth";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [defaultPosts, setDefaultPosts] = useState([]);
  const [postId, setPostId] = useState("");
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const TOKEN = getToken();
    if (TOKEN) {
      setIsLoggedIn(true);
    }
  }, []);

  

  return (
    <div id="App">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <Route path="/posts/:username">
          <SendMessage
            defaultPosts={defaultPosts}
            setDefaultPosts={setDefaultPosts}
            postId={postId}
            setPostId={setPostId}
          />
        </Route>
        <Route path="/posts">
          <Posts
            setPostId={setPostId}
            postId={postId}
            userName={userName}
            defaultPosts={defaultPosts}
            setDefaultPosts={setDefaultPosts}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        </Route>
        <Route path="/profile">
          <Profile
            userName={userName}
            setUserName={setUserName}
            defaultPosts={defaultPosts}
            isLoggedIn={isLoggedIn}
            setIsLoading={setIsLoading}
            setIsLoggedIn={setIsLoggedIn}
            setDefaultPosts={setDefaultPosts}
          />
        </Route>
        <Route path="/login">
          <Login
            userName={userName}
            setUserName={setUserName}
            isLoggedIn={isLoggedIn}
            setIsLoading={setIsLoading}
            setIsLoggedIn={setIsLoggedIn}
          />
        </Route>
        <Route path="/register">
          <Register setIsLoading={setIsLoading} setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/newpost">
          <NewPost
            isLoggedIn={isLoggedIn}
            setIsLoading={setIsLoading}
            setIsLoggedIn={setIsLoggedIn}
          />
        </Route>
        <Route path="/editpost">
          <EditPost
            postId={postId}
            setPostId={setPostId}
            setDefaultPosts={setDefaultPosts}
            defaultPosts={defaultPosts}
            isLoggedIn={isLoggedIn}
            setIsLoading={setIsLoading}
            setIsLoggedIn={setIsLoggedIn}
          />
        </Route>
        <Route path="/edit/:id">
          <EditMyPost
            postId={postId}
            setPostId={setPostId}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
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
