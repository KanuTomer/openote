import React, { useState } from "react";

function LeftPanel() {
    const [subjectsOpen, setSubjectsOpen] = useState(false);
    const [libraryOpen, setLibraryOpen] = useState(false);

    return (
        <div className="left-panel">
            <button className="upload-btn">
                <img src="Vector.png" alt="Upload" className="icon" />
                Upload File
            </button>
            <button className="home-btn">Home</button>

            <div className="dropdown-section">
                <div className="dropdown">
                    <div
                        className="dropdown-header"
                        onClick={() => setSubjectsOpen(!subjectsOpen)}
                    >
                        Subjects
                        <img
                            src="Dropdown Button.png"
                            alt="Dropdown"
                            className={`dropdown-icon ${subjectsOpen ? "open" : ""}`}
                        />
                    </div>
                    {subjectsOpen && (
                        <ul className="dropdown-list">
                            <li>Internet Of Things</li>
                            <li>Soft Computing Techniques</li>
                            <li>Machine Learning</li>
                            <li>Cloud Computing</li>
                            <li>Simulation And Modeling</li>
                        </ul>
                    )}
                </div>

                <div className="dropdown">
                    <div
                        className="dropdown-header"
                        onClick={() => setLibraryOpen(!libraryOpen)}
                    >
                        Library
                        <img
                            src="Dropdown Button.png"
                            alt="Dropdown"
                            className={`dropdown-icon ${libraryOpen ? "open" : ""}`}
                        />
                    </div>
                    {libraryOpen && (
                        <ul className="dropdown-list">
                            <li>Favourites</li>
                            <li>Recents</li>
                            <li>Uploads</li>
                            <li>Read Later</li>
                        </ul>
                    )}
                </div>
            </div>

            <div className="username-section">
                <div className="user-icon"></div>
                Username
            </div>
        </div>
    );
}

export default LeftPanel;
