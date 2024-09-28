// src/pages/MyCourses.js
import React from 'react';
import { Typography } from '@mui/material';

function MyCourses() {
  return (
    <div>
      <Typography variant="h4">My Courses</Typography>
      <Typography paragraph>
        Here you can view and manage your courses.
        {/* Add logic to display the list of courses */}
      </Typography>
    </div>
  );
}

export default MyCourses;
