import React, { useState, useEffect } from 'react';
import './landingpage.css';
import UserTypePopup from './UserTypePopup'; // Import the UserTypePopup component

const LandingPage = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const fullText = 'Ready to Dive into the Universe of Learning?';
  let index = 0;

  useEffect(() => {
    const typeWriterEffect = () => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
        setTimeout(typeWriterEffect, 100); // Adjust typing speed here (100 ms)
      }
    };

    typeWriterEffect(); // Start the typing effect
  }, []); // Empty dependency array to run once on mount

  const handleSignIn = () => {
    setShowPopup(true); // Show the popup instead of redirecting
  };

  const handleUserSelect = (role) => {
    setShowPopup(false); // Close the popup
    if (role === 'student') {
      window.location.href = '/student-form'; // Adjust this URL
    } else if (role === 'guru') {
      window.location.href = '/guru-form'; // Adjust this URL
    }
  };

  return (
    <div className="main">
      <title>Learniverse</title>
      <div style={{ width: '100%', height: '100vh' }}>
        <iframe
          src="https://my.spline.design/portalwithparticlesfromsplinecoursecom-94f2ca6afa074b30feb8c8ab5cc614e0/"
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="Spline 3D Scene"
        ></iframe>

        <div className="overlaying">
          <h1>{displayedText}</h1>
          
          <button className="sign-in-btn" onClick={handleSignIn}>Sign In</button>
          {showPopup && <UserTypePopup onClose={() => setShowPopup(false)} onSelect={handleUserSelect} />}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
