import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import Loginsignup from './Components/Loginsignup/Loginsignup.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <Link to="/" className="nav-link">Recruitments Portal</Link>
          <Link to="/loginsignup" className="nav-link">Login/Signup</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginsignup" element={<Loginsignup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
