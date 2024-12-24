/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './main_QnA.css';
import { Link } from 'react-router-dom';

const QnA = () => {
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
        <div className="menu"><p><Link to="/main_assignments">Assignments</Link></p></div>
        <div className="menu1"><p>Q&As</p></div>
        <div className="menu"><p><Link to="/main_pastyear">Test Papers</Link></p></div>
        <div className="menu2"><p><Link to="/main_Syllabus">Syllabus</Link></p></div>
        </div>
        <div className='lib-right-main'>
          <div className='ques'>
            <div className='lib-a-h'>
              <p>Name</p>
              <p2>Download</p2>
            </div>
            <div className='lib-ass-cont'>
              <div className='lib-ass-ele'>
              <p>Sample Problem Questions 1</p>
              <p2><img src="/download.png" alt="User Icon" className="download-logo" /></p2>
              </div>
              <div className='lib-ass-ele'><p>Sample Problem Questions 2</p>
              <p2><img src="/download.png" alt="User Icon" className="download-logo" /></p2></div>
              <div className='lib-ass-ele'><p>Sample Problem Questions 3</p>
              <p2><img src="/download.png" alt="User Icon" className="download-logo" /></p2></div>
              <div className='lib-ass-ele'><p>Sample Problem Questions 4</p>
              <p2><img src="/download.png" alt="User Icon" className="download-logo" /></p2></div>
              <div className='lib-ass-ele'><p>Sample Problem Questions 5</p>
              <p2><img src="/download.png" alt="User Icon" className="download-logo" /></p2></div>
              <div className='lib-ass-ele'><p>Sample Problem Questions 6</p>
              <p2><img src="/download.png" alt="User Icon" className="download-logo" /></p2></div>
              <div className='lib-ass-ele'><p>Sample Problem Questions 7</p>
              <p2><img src="/download.png" alt="User Icon" className="download-logo" /></p2></div>
              <div className='lib-ass-ele'><p>Sample Problem Questions 8</p>
              <p2><img src="/download.png" alt="User Icon" className="download-logo" /></p2></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  };
  
  export default QnA;
  