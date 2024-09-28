// src/components/CourseForm.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';

const CourseForm = () => {
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [materials, setMaterials] = useState([]);
  const [subtopics, setSubtopics] = useState([]);
  const [subtopic, setSubtopic] = useState('');

  const handleAddMaterial = (event) => {
    const files = Array.from(event.target.files);
    setMaterials([...materials, ...files]);
  };

  const handleAddSubtopic = () => {
    if (subtopic) {
      setSubtopics([...subtopics, subtopic]);
      setSubtopic('');
    }
  };

  const handleDeleteSubtopic = (index) => {
    const newSubtopics = subtopics.filter((_, i) => i !== index);
    setSubtopics(newSubtopics);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Create New Course
      </Typography>
      <TextField
        fullWidth
        label="Course Name"
        variant="outlined"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Course Description"
        variant="outlined"
        multiline
        rows={4}
        value={courseDescription}
        onChange={(e) => setCourseDescription(e.target.value)}
        sx={{ mb: 2 }}
      />
      <input
        type="file"
        multiple
        onChange={handleAddMaterial}
        style={{ marginBottom: '16px' }}
      />
      <List>
        {materials.map((material, index) => (
          <ListItem key={index}>
            <ListItemText primary={material.name} />
          </ListItem>
        ))}
      </List>
      <TextField
        label="Add Subtopic"
        variant="outlined"
        value={subtopic}
        onChange={(e) => setSubtopic(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handleAddSubtopic} startIcon={<Add />}>
        Add Subtopic
      </Button>
      <List>
        {subtopics.map((topic, index) => (
          <ListItem key={index}>
            <ListItemText primary={topic} />
            <IconButton onClick={() => handleDeleteSubtopic(index)}>
              <Delete />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" sx={{ mt: 2 }}>
        Save Course
      </Button>
    </Box>
  );
};

export default CourseForm;
