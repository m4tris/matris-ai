import React from 'react';
import './App.css';
import './styles/global.css';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup'; 
import Login from './components/Login';   
import Home from './Pages/Home';  



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
