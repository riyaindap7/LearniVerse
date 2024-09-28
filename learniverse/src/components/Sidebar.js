// src/components/Sidebar.js
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { Dashboard, School, ExpandLess, ExpandMore, LibraryBooks, Add, PictureAsPdf } from '@mui/icons-material'; // Import PDF icon
import { useNavigate } from 'react-router-dom';
import './sidebar.css';

const Sidebar = ({ open, onClose }) => {
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [studentsOpen, setStudentsOpen] = useState(false);
  const navigate = useNavigate();

  const handleCoursesClick = () => {
    setCoursesOpen(!coursesOpen);
  };

  const handleStudentsClick = () => {
    setStudentsOpen(!studentsOpen);
  };

  const handleAddCourseClick = () => {
    onClose(); 
    navigate('/add-course');
  };

  const handleMyCoursesClick = () => {
    onClose();
    navigate('/my-courses');
  };

  const handleStudentDashboardClick = () => {
    onClose();
    navigate('/student-dashboard');
  };

  const handleCertificateClick = () => {
    onClose();
    navigate('/certificate');
  };

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          backgroundColor: 'rgb(25,25,112,0.5)',
          color: '#fff',
          padding: '20px',
          boxShadow: '2px 0 5px rgba(0, 0, 0, 0.2)',
          borderRight: '1px solid #ADD8E6',
        },
      }}
    >
      <List>
        {/* Courses Section */}
        <ListItem button onClick={handleCoursesClick}>
          <ListItemIcon sx={{ color: '#fff' }}>
            <LibraryBooks />
          </ListItemIcon>
          <ListItemText primary="Courses" sx={{ color: '#fff' }} />
          {coursesOpen ? <ExpandLess sx={{ color: '#fff' }} /> : <ExpandMore sx={{ color: '#fff' }} />}
        </ListItem>
        <Collapse in={coursesOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button onClick={handleAddCourseClick} sx={{ pl: 4 }}>
              <ListItemIcon sx={{ color: '#fff' }}>
                <Add />
              </ListItemIcon>
              <ListItemText primary="Add Course" sx={{ color: '#fff' }} />
            </ListItem>
            <ListItem button onClick={handleMyCoursesClick} sx={{ pl: 4 }}>
              <ListItemText primary="My Courses" sx={{ color: '#fff' }} />
            </ListItem>
          </List>
        </Collapse>

        {/* Students Section */}
        <ListItem button onClick={handleStudentsClick}>
          <ListItemIcon sx={{ color: '#fff' }}>
            <School />
          </ListItemIcon>
          <ListItemText primary="Students" sx={{ color: '#fff' }} />
          {studentsOpen ? <ExpandLess sx={{ color: '#fff' }} /> : <ExpandMore sx={{ color: '#fff' }} />}
        </ListItem>
        <Collapse in={studentsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button onClick={handleStudentDashboardClick} sx={{ pl: 4 }}>
              <ListItemText primary="Student Dashboard" sx={{ color: '#fff' }} />
            </ListItem>
          </List>
        </Collapse>

        {/* Certificate Section */}
        <ListItem button onClick={handleCertificateClick}>
          <ListItemIcon sx={{ color: '#fff' }}>
            <PictureAsPdf />
          </ListItemIcon>
          <ListItemText primary="Certificate" sx={{ color: '#fff' }} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
