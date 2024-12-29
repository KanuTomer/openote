import React from 'react';
import './Css/footer.css';

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='footer-first'><h3>Openote.</h3>
                <p>2024 Openote.</p>
            </div>
            <div className='footer-second'>
            <div class="leftfoot">
        <div class="aboutfoot">
            <h3>About</h3>
            <p>Company</p>
            <p>Community</p>
            <p>Connections</p>
        </div>
        <div class="blogfoot">
            <h3>Study Materials</h3>
            <p>Courses Notes</p>
            <p>Question Papers</p>
            <p>Assignments</p>
        </div>
        <div class="productfoot">
            <h3>Links</h3>
            <p>Instagram</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
        </div>
    </div>
            </div>
        </div>
    )
}



export default Footer;