import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


import Navbar from './components/NavbarFolder/Navbar'


const App = () => {
  return (
    <div id="App">
      <Navbar />
      
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);