// src/pages/InstructorDashboard.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ProfileMenu from '../components/ProfileMenu';
import Sidebar from '../components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import StudentDashboard from './StudentDashboard'; // Import the StudentDashboard page
import './InstructorDashboard.css';

function InstructorDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
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
          {/* Add other routes as needed */}
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
