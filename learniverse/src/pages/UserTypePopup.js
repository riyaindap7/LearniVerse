import React from 'react';
import './UserTypePopup.css';

const UserTypePopup = ({ onClose, onSelect }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>Select Your Role</h2>
        <button onClick={() => onSelect('student')}>Student</button>
        <button onClick={() => onSelect('guru')}>Guru</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UserTypePopup;
