// src/components/Sidebar.js
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { Dashboard, School, ExpandLess, ExpandMore, LibraryBooks, Add } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

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
    onClose(); // Close the sidebar after navigating
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

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
        },
      }}
    >
      <List>
        <ListItem button onClick={handleCoursesClick}>
          <ListItemIcon>
            <LibraryBooks />
          </ListItemIcon>
          <ListItemText primary="Courses" />
          {coursesOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={coursesOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button onClick={handleAddCourseClick} sx={{ pl: 4 }}>
              <ListItemIcon>
                <Add />
              </ListItemIcon>
              <ListItemText primary="Add Course" />
            </ListItem>
            <ListItem button onClick={handleMyCoursesClick} sx={{ pl: 4 }}>
              <ListItemText primary="My Courses" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={handleStudentsClick}>
          <ListItemIcon>
            <School />
          </ListItemIcon>
          <ListItemText primary="Students" />
          {studentsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={studentsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button onClick={handleStudentDashboardClick} sx={{ pl: 4 }}>
              <ListItemText primary="Student Dashboard" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Sidebar;
