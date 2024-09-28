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
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: 'Course 1',
      description: 'This is a description of course 1.',
    },
    {
      id: 2,
      name: 'Course 2',
      description: 'This is a description of course 2.',
    },
    // Add initial courses or leave empty
  ]);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  // Function to add a new course
  const handleAddCourse = (newCourse) => {
    setCourses((prevCourses) => [...prevCourses, newCourse]);
  };

  return (
    <div className="instructor-dashboard">
      <AppBar position="static" className="navbar">
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
          <ProfileMenu />
        </Toolbar>
      </AppBar>
      <Sidebar open={sidebarOpen} onClose={handleSidebarClose} />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="student-dashboard" element={<StudentDashboard />} />
          <Route path="add-course" element={<AddCourseForm onAddCourse={handleAddCourse} />} />
          <Route path="my-courses" element={<MyCourses courses={courses} />} />
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
