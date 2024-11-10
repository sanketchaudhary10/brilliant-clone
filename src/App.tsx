// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../src/pages/LandingPage/LandingPage'
import Dashboard from '../src/pages/Dashboard/Dashboard';
import Signup from '../src/pages/Authentication/signup';
import Login from '../src/pages/Authentication/loginpage';
import CourseCatalog from './components/CategoryTab/CourseCatagory';
import DashboardCourses from './pages/Dashboard/DashboardCourses';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/CourseCatalog" element={<CourseCatalog />} />
        <Route path="/DashboardCourses" element={<DashboardCourses />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
