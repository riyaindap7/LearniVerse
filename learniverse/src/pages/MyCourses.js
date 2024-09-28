// src/pages/MyCourses.js
import React from 'react';
import { Box, Typography, Card, CardContent, CardActions, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const MyCourses = ({ courses }) => { // Accept courses as a prop
  const handleDeleteCourse = (index) => {
    // Handle course deletion (implementation omitted for now)
  };

  const handleEditCourse = (index, updatedCourse) => {
    // Handle course editing (implementation omitted for now)
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        My Courses
      </Typography>

      <Box display="flex" flexWrap="wrap" gap={2}>
        {courses.map((course, index) => (
          <Card key={index} sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {course.name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {course.description}
              </Typography>
              <Typography color="text.secondary">
                Instructor: {course.instructor} {/* Display instructor name */}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleEditCourse(index, { ...course, name: 'Updated Name' })}>
                Edit
              </Button>
              <Button size="small" onClick={() => handleDeleteCourse(index)}>
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default MyCourses;
