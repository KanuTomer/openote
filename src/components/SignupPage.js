import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';
// import Footer from './footer';

const SignupPage = () => {
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    navigate('/signup2'); // Navigate to SignupPage2
  };

  return (
    <div className="signup-page">
      <div className="image-container">
      <div className="signup-container">
        <h1 className="logo">openote.</h1>
        <h2>Start your openote journey now</h2>
        <form className="signup-form" onSubmit={handleContinue}>
          <label>
            <h3>Username</h3>
            <input type="text" placeholder="Choose your username" />
          </label>
          <label>
            <h3>Email</h3>
            <input type="email" placeholder="Enter your email address..." />
          </label>
          <label>
            <h3>Password</h3>
            <input type="password" placeholder="Choose Password..." />
          </label>
          <label>
            <h3>Re-enter Password</h3>
            <input type="password" placeholder="Re-enter Password..." />
          </label>
          <button type="submit" className="continue-button">Continue</button>
        </form>
        </div>
      </div>
    </div>
  
    
  );
};

export default SignupPage;
