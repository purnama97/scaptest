import React from 'react';
import "./css/App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navigation from './components/Navigation/Navigation';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Movie from './pages/Movie';
import ShareMovie from './components/ShareMovie/ShareMovie';

const App = () => {
  return (
    <>
    <div className="App">
    <Router>
    <Navigation />
        <Switch>
            <PrivateRoute path="/share" component={ShareMovie} />
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
