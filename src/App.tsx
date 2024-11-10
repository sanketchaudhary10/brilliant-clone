// src/App.tsx
// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../src/pages/LandingPage/LandingPage'
import Dashboard from '../src/pages/Dashboard/Dashboard';
import Signup from '../src/pages/Authentication/signup';
import Login from '../src/pages/Authentication/loginpage';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
