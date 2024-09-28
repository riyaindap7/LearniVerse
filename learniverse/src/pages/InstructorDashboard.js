// src/pages/InstructorDashboard.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ProfileMenu from '../components/ProfileMenu';
import Sidebar from '../components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import StudentDashboard from './StudentDashboard';
import AddCourseForm from './AddCourseForm';
import MyCourses from './MyCourses';
import './InstructorDashboard.css';

function InstructorDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [courses, setCourses] = useState([]); // Initialize with an empty array

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const handleAddCourse = (newCourse) => {
    setCourses((prevCourses) => [...prevCourses, newCourse]); // Update courses state with the new course
  };

  return (
    <div className="instructor-dashboard">
      <AppBar position="fixed" className="navbar">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleSidebarOpen}
            style={{ marginRight: '20px' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="title">
            Instructor Dashboard
          </Typography>
          <div className="search">
            <InputBase
              placeholder="Search…"
              className="inputBase"
            />
            <IconButton type="submit" className="searchIcon">
              <SearchIcon />
            </IconButton>
          </div>
          <ProfileMenu className="profile-menu" />
        </Toolbar>
      </AppBar>
      <Sidebar open={sidebarOpen} onClose={handleSidebarClose} className="sidebar" />
      <div style={{ padding: '20px', marginTop: '64px' }} className='content'> {/* Added marginTop to avoid content being hidden behind the navbar */}
        <Routes>
          <Route path="student-dashboard" element={<StudentDashboard />} />
          <Route path="add-course" element={<AddCourseForm onAddCourse={handleAddCourse} />} />
          <Route path="my-courses" element={<MyCourses courses={courses} />} /> {/* Pass the courses to MyCourses */}
          <Route
            path="*"
            element={
              <Typography variant="h4">
                Welcome to Your Dashboard!
              </Typography>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default InstructorDashboard;
