// src/components/Sidebar.js
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { Dashboard, School, ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar = ({ open, onClose }) => {
  const [studentsOpen, setStudentsOpen] = useState(false);
  const navigate = useNavigate();

  const handleStudentsClick = () => {
    setStudentsOpen(!studentsOpen);
  };

  const handleStudentDashboardClick = () => {
    onClose(); // Close the sidebar after navigating
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
        <ListItem button component={Link} to="/courses">
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Courses" />
        </ListItem>

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
