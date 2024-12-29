import React from 'react';
import './Css/SignupPage2.css';
import { useNavigate } from 'react-router-dom';

const SignupPage2 = () => {
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    navigate('/main_notes'); // Navigate to main_notes
  };
  return (
    <div className="signup-page2">
     <div className="image-container">
      <div className="signup-container">
        {/* <h1 className="logo">openote.</h1> */}
        <h2>Finish entering your course details</h2>
        <p>Setting up your account allows you to access your dashboard.</p>
        <form className="signup-form" onSubmit={handleContinue}>
          <label>
            <h3>Name</h3>
            <input type="text" placeholder="Enter your name..." />
          </label>
          <label>
            <h3>Roll Number</h3>
            <input type="text" placeholder="Enter your roll number..." />
          </label>
          <label>
            <h3>University</h3>
            <input type="text" placeholder="Enter the name of your university..." />
          </label>
          <label>
            <h3>Enter Course</h3>
            <input type="text" placeholder="Enter course details..." />
          </label>
          <button type="submit" className="finish-button">Finish</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default SignupPage2;
