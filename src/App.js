import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage';
import SignupPage from './components/SignupPage';
import SignupPage2 from './components/SignupPage2';
import Navbar from './components/navbar';
import Footer from './components/footer'
import Login from './components/login';
import Dashboard from './components/Dashboard/dashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup2" element={<SignupPage2 />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
