/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './main_assignments.css';
import { Link } from 'react-router-dom';

const AssignmentsPage = () => {
    return (
      <div className="lib-main">
        <div className='lib-left'>
          <div className='button-all'>
          <div className="button"><p>Upload Files</p></div>
          <div className="button"><p>Home</p></div>
          <div className="button2"><p>Subjects</p>
          <div className='sub-element'>
            <div className='sub-el'><p>Internet of Things</p></div>
            <div className='sub-el'><p>Soft Computing Techniques</p></div>
            <div className='sub-el'><p>Machine Learning</p></div>
            <div className='sub-el'><p>Cloud Computing</p></div>
            <div className='sub-el'><p>Simulation and Modeling</p></div>
          </div>
          </div>
          <div className="button2"><p>Library</p>
          <div className='sub-element'>
            <div className='sub-el'><p>Favourites</p></div>
            <div className='sub-el'><p>Recents</p></div>
            <div className='sub-el'><p>Uploads</p></div>
            <div className='sub-el'><p>Read Laters</p></div>
          </div>
          </div>
        </div>
        <div className='main-user'><img src="/user-icon.png" alt="User Icon" className="user-icon" /><p>Username</p></div>
        </div>
        <div className='lib-right'>
        <div className='lib-right-menu'>
        <div className="menu"><p><Link to="/main_notes">Notes</Link></p></div>
        <div className="menu1"><p>Assignments</p></div>
        <div className="menu"><p><Link to="/main_QnA">Q&As</Link></p></div>
        <div className="menu"><p><Link to="/main_pastyear">Test Papers</Link></p></div>
        <div className="menu2"><p><Link to="/main_Syllabus">Syllabus</Link></p></div>
        </div>
        <div className='lib-right-main'>
          <div className='lib-assign'>
            <div className='lib-ass-head'>
              <p>Name</p>
              <p>Download</p>
              <p>Due Date</p>
              <p>Submitted</p>
            </div>
            <div className='lib-ass-cont'>
              <div className='lib-a-ele'>
              <p>MA402 Assignment 1</p>
              <p><img src="/download.png" alt="User Icon" className="download-logo" /></p>
              <p>24/11/2024</p>
              <p>Submitted</p>
              </div>
              <div className='lib-a-ele'><p>MA402 Assignment 2</p>
              <p><img src="/download.png" alt="User Icon" className="download-logo" /></p>
              <p>24/11/2024</p>
              <p>Submitted</p></div>
              <div className='lib-a-ele'><p>MA402 Assignment 3</p>
              <p><img src="/download.png" alt="User Icon" className="download-logo" /></p>
              <p>24/11/2024</p>
              <p>Submitted</p></div>
              <div className='lib-a-ele'><p>MA402 Assignment 4</p>
              <p><img src="/download.png" alt="User Icon" className="download-logo" /></p>
              <p>24/11/2024</p>
              <p>Submitted</p></div>
              <div className='lib-a-ele'><p>MA402 Assignment 5</p>
              <p><img src="/download.png" alt="User Icon" className="download-logo" /></p>
              <p>24/11/2024</p>
              <p>Submitted</p></div>
              <div className='lib-a-ele'><p>MA402 Assignment 6</p>
              <p><img src="/download.png" alt="User Icon" className="download-logo" /></p>
              <p>24/11/2024</p>
              <p>Submitted</p></div>
              <div className='lib-a-ele'><p>MA402 Assignment 7</p>
              <p><img src="/download.png" alt="User Icon" className="download-logo" /></p>
              <p>24/11/2024</p>
              <p>Submitted</p></div>
              <div className='lib-a-ele'><p>MA402 Assignment 8</p>
              <p><img src="/download.png" alt="User Icon" className="download-logo" /></p>
              <p>24/11/2024</p>
              <p>Submitted</p></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  };
  
  export default AssignmentsPage;
  