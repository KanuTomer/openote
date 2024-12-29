// HowItWorksSection.js
import React from 'react';
import './Css/HowItWorksSection.css';
/*import dashboardImg from '../../public/Dashboard.png';
import dashboard2Img from '../../public/Dashboard 2.png';
import subjectsImg from '../../public/Subjects.png';*/

const HowItWorksSection = () => {
  return (
    <div className="how-it-works-section">
      <h2 className="section-title">How It Works</h2>

      <div className="card">
        <img src="/Dashboard.png" alt="Dashboard" className="card-image" />
        <div className="card-content">
          <h3>Sign in to view your dashboard</h3>
          <p>Horizontal card description - this is for a brief description of whatever service we find important.</p>
        </div>
      </div>

      <div className="card_rev">
        <div className="card-content">
          <h3>Control your library</h3>
          <p>Horizontal card description - this is for a brief description of whatever service we find important.</p>
        </div>
        <img src="/Dashboard 2.png" alt="Library Control" className="card-image" />
      </div>

      <div className="card">
        <img src="/Subjects.png" alt="Subjects" className="card-image" /> 
        <div className="card-content">
          <h3>All your courses in one place</h3>
          <p>Horizontal card description - this is for a brief description of whatever service we find important.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
