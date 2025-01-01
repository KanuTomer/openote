import React from "react";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";

// Notes Component (Default Grid View)
const Notes = () => (
    <div className="notes-grid">
        {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className="document-card">
                <img src="doc_logo.png" alt="Document" className="document-icon" />
                <div className="document-details">
                    <p>Document Name {index + 1}</p>
                    <p>24/11/2024</p>
                </div>
            </div>
        ))}
    </div>
);

// Assignments Component
const Assignments = () => (
    <div className="assignments-content">
        <table className="assignments-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Download</th>
                    <th>Due Date</th>
                    <th>Submitted</th>
                </tr>
            </thead>
            <tbody>
                {Array.from({ length: 10 }).map((_, index) => (
                    <tr key={index}>
                        <td>MA402 Assignment {index + 1}</td>
                        <td>
                            <button className="download-btn">
                                <img src="download.png" alt="Download" className="download-icon" />
                            </button>
                        </td>
                        <td>24/11/2024</td>
                        <td>Submitted</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const QAs = () => (
    <div className="qa-content">
        <table className="qa-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Download</th>
                </tr>
            </thead>
            <tbody>
                {Array.from({ length: 8 }).map((_, index) => (
                    <tr key={index}>
                        <td>Sample Problem Questions {index + 1}</td>
                        <td>
                            <button className="download-btn">
                                <img src="download.png" alt="Download" className="download-icon" />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const TestPapers = () => (
    <div className="test-papers-content">
        <table className="assignments-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Download</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                {Array.from({ length: 10 }).map((_, index) => (
                    <tr key={index}>
                        <td>MA402 Test Paper {index + 1}</td>
                        <td>
                            <button className="download-btn">
                                <img src="download.png" alt="Download" className="download-icon" />
                            </button>
                        </td>
                        <td>{2024 - index}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

function RightPanel() {
    const location = useLocation();

    // Function to determine if a tab is active
    const isActive = (path) => location.pathname === path;

    return (
        <div className="right-panel">
            {/* Tabs */}
            <div className="tabs">
                <Link to="/notes">
                    <button className={`tab-btn ${isActive("/notes") ? "active" : ""}`}>
                        Notes
                    </button>
                </Link>
                <Link to="/assignments">
                    <button className={`tab-btn ${isActive("/assignments") ? "active" : ""}`}>
                        Assignments
                    </button>
                </Link>
                <Link to="/qa">
                    <button className={`tab-btn ${isActive("/qa") ? "active" : ""}`}>
                        Q&As
                    </button>
                </Link>
                <Link to="/testpaper">
                    <button className={`tab-btn ${isActive("/testpaper") ? "active" : ""}`}>
                        Test Papers
                    </button>
                </Link>
                <Link to="/syllabus">
                    <button className={`tab-btn ${isActive("/syllabus") ? "active" : ""}`}>
                        Syllabus
                    </button>
                </Link>
            </div>

            {/* Dynamic Content Rendering */}
            <div className="content-section">
                <Routes>
                    <Route path="/note" element={<Navigate to="/notes" />} />
                    <Route path="/notes" element={<Notes />} />
                    <Route path="/assignments" element={<Assignments />} />
                    <Route path="/qa" element={<QAs />} />
                    <Route path="/testpaper" element={<TestPapers />} />
                </Routes>
            </div>
        </div>
    );
}

export default RightPanel;
