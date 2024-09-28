import React, { useState } from 'react';
import StudentForm from './StudentForm';
import GuruForm from './GuruForm';

const PopupForm = ({ onClose }) => {
  const [isGuru, setIsGuru] = useState(false);

  const handleRoleSelection = (role) => {
    setIsGuru(role === 'guru');
  };

  const handleStudentSubmit = (data) => {
    // Submit the student data to your backend
    console.log(data);
    onClose(); // Close the popup
  };

  const handleGuruSubmit = (data) => {
    // Submit the guru data to your backend
    console.log(data);
    onClose(); // Close the popup
  };

  return (
    <div className="popup">
      <h2>Are you a Student or Guru?</h2>
      <button onClick={() => handleRoleSelection('student')}>Student</button>
      <button onClick={() => handleRoleSelection('guru')}>Guru</button>
      {isGuru ? (
        <GuruForm onSubmit={handleGuruSubmit} />
      ) : (
        <StudentForm onSubmit={handleStudentSubmit} />
      )}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default PopupForm;
