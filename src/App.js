import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './layouts/home';
import PageNotFound from './layouts/page-not-found';
import ArticlePage from './layouts/article-page';


import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/article-page.html">
        <ArticlePage />
      </Route>
      <Route exact path="*">
        <PageNotFound />
      </Route>
    </Switch>
  </Router>
);

export default App;
