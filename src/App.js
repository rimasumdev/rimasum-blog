import React from 'react';
import './App.css';
import Header from './Componets/Header/Header';
import Hero from './Componets/Hero/Hero';
import Blog from './Componets/Blog/Blog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Post from './Componets/Post/Post';
import NotFound from './Componets/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Router>
        <Switch>
          <Route exact path="/">
          <Blog></Blog>
          </Route>
          <Route exact path="/blog">
          <Blog></Blog>
          </Route>
          <Route path="/posts/:id">
            <Post></Post>
          </Route>
          <Route path="*">
          <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
