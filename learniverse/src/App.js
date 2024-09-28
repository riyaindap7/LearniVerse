// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import InstructorDashboard from './pages/InstructorDashboard';
import CourseForm from './components/CourseForm';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<InstructorDashboard />} />
      <Route path="/add-course" element={<CourseForm />} />
      {/* Add other routes as needed */}
    </Routes>
  );
};

export default App;
