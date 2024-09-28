// src/pages/AddCourseForm.js
import React, { useState } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AddCourseForm({ onAddCourse }) {
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCourse = {
      id: Date.now(), // Use timestamp as unique ID
      name: courseName,
      description: courseDescription,
    };

    onAddCourse(newCourse);

    // Redirect to My Courses page after adding course
    navigate('/my-courses');
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>
        Add New Course
      </Typography>
      <TextField
        fullWidth
        label="Course Name"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Course Description"
        value={courseDescription}
        onChange={(e) => setCourseDescription(e.target.value)}
        margin="normal"
        required
      />
      <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
        Add Course
      </Button>
    </Box>
  );
}

export default AddCourseForm;
