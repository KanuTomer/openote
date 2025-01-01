import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
// import Notes from "./notes";
// import Assignments from "./assignments";

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

function RightPanel() {
    return (
        <div className="right-panel">
            {/* Tabs */}
            <div className="tabs">
                <Link to="/notes">
                    <button className="tab-btn">Notes</button>
                </Link>
                <Link to="/assignments">
                    <button className="tab-btn">Assignments</button>
                </Link>
                <Link to="/qa">
                    <button className="tab-btn">Q&As</button>
                </Link>
                <Link to="/testpaper">
                    <button className="tab-btn">Test Papers</button>
                </Link>
                <Link to="/syllabus">
                    <button className="tab-btn">Syllabus</button>
                </Link>
            </div>

            {/* Dynamic Content Rendering */}
            <div className="content-section">
                <Routes>
                    <Route path="/note" element={<Navigate to="/notes" />} />
                    <Route path="/notes" element={<Notes />} />
                    <Route path="/assignments" element={<Assignments />} />
                </Routes>
            </div>
        </div>
    );
}

export default RightPanel;
