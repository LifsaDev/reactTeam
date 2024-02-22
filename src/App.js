import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/about" Component={About}/>
          <Route path="/contact" Component={Contact}/>
          <Route path="/" Component={Home}/>
        </Routes>
    </Router>
  );
}

export default App;
