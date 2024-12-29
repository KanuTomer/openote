import React from "react";
import LeftPanel from './leftpanel.js';
import RightPanel from './rightpanel.js';
import './css/style.css';

function Dashboard() {
    return (
      <>
      <div className="dashboard">
        <LeftPanel />
        <RightPanel />
      </div>
      </>
    );
  }
  
  export default Dashboard;
  