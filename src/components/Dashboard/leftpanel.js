import React, { useState } from "react";

function LeftPanel() {
    const [subjectsOpen, setSubjectsOpen] = useState(false);
    const [libraryOpen, setLibraryOpen] = useState(false);

    const subjects = [
        "Internet Of Things",
        "Soft Computing Techniques",
        "Machine Learning",
        "Cloud Computing",
        "Simulation And Modeling",
    ];

    const libraryItems = [
        "Favourites",
        "Recents",
        "Uploads",
        "Read Later",
    ];

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
                    <ul className={`dropdown-list ${subjectsOpen ? "open" : ""}`}>
                        {subjects.map((subject, index) => (
                            <li key={index} className="dropdown-item">
                                {subject}
                            </li>
                        ))}
                    </ul>
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
                    <ul className={`dropdown-list ${libraryOpen ? "open" : ""}`}>
                        {libraryItems.map((item, index) => (
                            <li key={index} className="dropdown-item">
                                {item}
                            </li>
                        ))}
                    </ul>
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
