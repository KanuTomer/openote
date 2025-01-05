import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Css/SignupPage.css';
// import Footer from './footer';

const Login = () => {
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    navigate('/notes'); // Navigate to main_notes
  };

  return (
    <div className="signup-page">
      <div className="image-container">
      <div className="signup-container">
        <h2>Login to your openote. account</h2>
        <form className="signup-form" onSubmit={handleContinue}>
          <label>
            <h3>Username</h3>
            <input type="text" placeholder="Choose your username" />
          </label>
          <label>
            <h3>Password</h3>
            <input type="password" placeholder="Choose Password..." />
          </label>
          <button type="submit" className="continue-button">Login</button>
        </form>
        </div>
      </div>
    </div>
  
    
  );
};

export default Login;
