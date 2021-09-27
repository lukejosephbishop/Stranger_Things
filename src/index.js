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
  SearchPage,
} from "./components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  
} from "react-router-dom";

import { getToken } from "./auth";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [defaultPosts, setDefaultPosts] = useState([]);
  const [postId, setPostId] = useState("");
  const [userName, setUserName] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [delivery, setDelivery] = useState(false);
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
            delivery={delivery}
            setDelivery={setDelivery}
            searchWord={searchWord}
            setSearchWord={setSearchWord}
            setPostId={setPostId}
            postId={postId}
            userName={userName}
            defaultPosts={defaultPosts}
            setDefaultPosts={setDefaultPosts}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            setSearchWord={setSearchWord}
            searchWord={searchWord}
          />
        </Route>
        <Route exact path="/searchpage">
          <SearchPage
            defaultPosts={defaultPosts}
            searchWord={searchWord}
            userName={userName}
            isLoggedIn={isLoggedIn}
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
            delivery={delivery}
            setDelivery={setDelivery}
            isLoggedIn={isLoggedIn}
            setIsLoading={setIsLoading}
            setIsLoggedIn={setIsLoggedIn}
          />
        </Route>
        <Route path="/editpost">
          <EditPost
           delivery={delivery}
           setDelivery={setDelivery}
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
          delivery={delivery}
          setDelivery={setDelivery}
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
