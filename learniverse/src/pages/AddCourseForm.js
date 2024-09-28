// src/pages/AddCourseForm.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddCourseForm = ({ onAddCourse }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [instructor, setInstructor] = useState(''); // New state for instructor's name
  const navigate = useNavigate();

  const handleSave = () => {
    const newCourse = { name, description, instructor }; // Include instructor name
    onAddCourse(newCourse); // Call the function passed as a prop
    navigate('/my-courses'); // Redirect to My Courses page after adding the course
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Add Course
      </Typography>
      <TextField
        label="Course Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Course Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Instructor Name" // New input for instructor's name
        value={instructor}
        onChange={(e) => setInstructor(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Box>
  );
};

export default AddCourseForm;
