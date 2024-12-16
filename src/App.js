import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import Consulting from './components/Consulting';
import Research from './components/Research';
import Technology from './components/Technology'; 


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/research" element={<Research />} />
          <Route path="/technology" element={<Technology />} />
          {/* Add other routes here */}
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
