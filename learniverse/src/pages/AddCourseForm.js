// src/pages/AddCourseForm.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

function AddCourseForm() {
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h4">Add New Course</Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Course Name"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Course Description"
        multiline
        rows={4}
        value={courseDescription}
        onChange={(e) => setCourseDescription(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
}

export default AddCourseForm;
