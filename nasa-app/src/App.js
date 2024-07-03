import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Apod from './pages/Apod';
import MarsRover from './pages/MarsRoverPhotos';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apod" element={<Apod />} />
          <Route path="/mars-rover" element={<MarsRover />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
