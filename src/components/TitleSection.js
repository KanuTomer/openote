import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './TitleSection.css'; // Import the CSS

function TitleSection() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleGetStartedClick = () => {
    navigate('/signup'); // Navigate to the signup page
  };

  return (
    <div className="title-section">
      <div className="content-wrapper">
        {/* Left-side Text Section */}
        <div className="text-section">
          <div className="title-text">
            Your Collaborative Hub for Sharing and Learning
          </div>
          <button
            className="get-started-btn"
            onClick={handleGetStartedClick} // Add click handler
          >
            get started
          </button>
        </div>

        {/* Glass Effect Image Container */}
        <div className="image-container">
          <img
            src="/Title Screen Image.png"
            alt="Title Screen"
          />
        </div>
      </div>
    </div>
  );
}

export default TitleSection;
