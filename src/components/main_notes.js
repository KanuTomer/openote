/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './main_notes.css';

const NotesPage = () => {
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
        <div className="menu1"><p>Notes</p></div>
        <div className="menu"><p><Link to="/main_assignments">Assignments</Link></p></div>
        <div className="menu"><p><Link to="/main_QnA">Q&As</Link></p></div>
        <div className="menu"><p><Link to="/main_pastyear">Test Papers</Link></p></div>
        <div className="menu2"><p><Link to="/main_Syllabus">Syllabus</Link></p></div>
        </div>
        <div className='lib-r-main'>
          <div className='main-file1'>
            <div className='main-file'>
              <div className='image'><img src="/doc_logo.png" alt="User Icon" className="logo"/></div>
            <text>Document Name</text>
            <text1>15/11/2024</text1>
            </div>
            <div className='main-file'><div className='image'><img src="/doc_logo.png" alt="User Icon" className="logo"/></div>
            <text>Document Name</text><text1>15/11/2024</text1></div>
            <div className='main-file'><div className='image'><img src="/doc_logo.png" alt="User Icon" className="logo"/></div>
            <text>Document Name</text><text1>15/11/2024</text1></div>
            <div className='main-file'><div className='image'><img src="/doc_logo.png" alt="User Icon" className="logo"/></div>
            <text>Document Name</text><text1>15/11/2024</text1></div>
            <div className='main-file'><div className='image'><img src="/doc_logo.png" alt="User Icon" className="logo"/></div>
            <text>Document Name</text><text1>15/11/2024</text1></div>
            <div className='main-file'><div className='image'><img src="/doc_logo.png" alt="User Icon" className="logo"/></div>
            <text>Document Name</text><text1>15/11/2024</text1></div>
          </div>
          <div className='main-file1'>
            <div className='main-file'><div className='image'><img src="/doc_logo.png" alt="User Icon" className="logo"/></div>
            <text>Document Name</text><text1>15/11/2024</text1></div>
            <div className='main-file'><div className='image'><img src="/doc_logo.png" alt="User Icon" className="logo"/></div>
            <text>Document Name</text><text1>15/11/2024</text1></div>
            <div className='main-file'><div className='image'><img src="/doc_logo.png" alt="User Icon" className="logo"/></div>
            <text>Document Name</text><text1>15/11/2024</text1></div>
            <div className='main-file'><div className='image'><img src="/doc_logo.png" alt="User Icon" className="logo"/></div>
            <text>Document Name</text><text1>15/11/2024</text1></div>
            <div className='main-file'><div className='image'><img src="/doc_logo.png" alt="User Icon" className="logo"/></div>
            <text>Document Name</text><text1>15/11/2024</text1></div>
            <div className='main-file'><div className='image'><img src="/doc_logo.png" alt="User Icon" className="logo"/></div>
            <text>Document Name</text><text1>15/11/2024</text1></div>
          </div>
        </div>
        </div>
      </div>
    );
  };
  
  export default NotesPage;
  