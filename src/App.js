import React from 'react';
import "./css/App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navigation from './components/Navigation/Navigation';
import Movie from './pages/Movie';
import ShareMovie from './components/ShareMovie/ShareMovie';

const App = () => {
  return (
    <>
    <div className="App">
    <Router>
    <Navigation />
        <Switch>
            <Route path="/share">
              <ShareMovie />
            </Route>
            <Route path="/">
              <Movie />
            </Route>
        </Switch>
    </Router>
    </div>
    </>
  )
}

export default App;
