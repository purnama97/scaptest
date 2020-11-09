import React from 'react';
import "./css/App.css";
import Navigation from './components/Navigation/Navigation';
import GridMovie from './components/GridMovie/GridMovie';
import ShareMovie from './components/ShareMovie/ShareMovie';

const App = () => {
  return (
    <>
      <Navigation />
      <div className="App">
        {/* <ShareMovie /> */}
        <GridMovie />
      </div>
    </>
  )
}

export default App;
