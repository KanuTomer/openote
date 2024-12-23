import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage';
import SignupPage from './components/SignupPage';
import SignupPage2 from './components/SignupPage2';
import Navbar from './components/navbar';
import Footer from './components/footer'
import NotesPage from './components/main_notes';
import AssignmentsPage from './components/main_assignments';
import PastYear from './components/main_pastyear';
import QnA from './components/main_QnA';
import Syllabus from './components/main_Syllabus';
import Login from './components/login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup2" element={<SignupPage2 />} /> 
        <Route path="/main_notes" element={<NotesPage />} />
        <Route path="/main_assignments" element={<AssignmentsPage />} />
        <Route path="/main_pastyear" element={<PastYear />} />
        <Route path="/main_QnA" element={<QnA />} />
        <Route path="/main_Syllabus" element={<Syllabus />} />
        <Route path="/login" element={<Login />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
