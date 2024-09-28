// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import InstructorDashboard from './pages/InstructorDashboard';
import AddCourseForm from './pages/AddCourseForm';
import LandingPage from './pages/LandingPage';
import StudentForm from './components/StudentForm';
import GuruForm from './components/GuruForm';
import PopupForm from './components/PopupForm';
import CertificatePage from './pages/CertificatePage';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/popupform" element={<PopupForm/>}></Route>
      <Route path="/student-form" element={<StudentForm/>} />
      <Route path="/guru-form" element={<GuruForm/>} />
      <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
      <Route path="/add-course" element={<AddCourseForm />} />
      <Route path="/certificate" element={<CertificatePage />} />
      {/* Add other routes as needed */}
    </Routes>
  );
};

export default App;
