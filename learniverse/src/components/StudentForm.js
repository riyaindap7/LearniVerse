import React, { useState } from 'react';
import { TextField, Button, Container, Typography, MenuItem } from '@mui/material';
import './form.css'; // Import your custom CSS if needed

const StudentForm = ({ onSubmit }) => {
  const [studentData, setStudentData] = useState({
    name: '',
    dob: '',
    age: '',
    gender: '',
    schoolOrCollege: '',
    email: '',
  });

  const handleChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(studentData); // Call the parent function to handle form submission
  };

  return (
    <Container maxWidth="sm" className="form-container">
      <Typography variant="h4" gutterBottom>
        Student Registration
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={studentData.name}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Date of Birth"
          type="date"
          name="dob"
          value={studentData.dob}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Age"
          type="number"
          name="age"
          value={studentData.age}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          select
          label="Gender"
          name="gender"
          value={studentData.gender}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </TextField>
        <TextField
          label="School/College"
          name="schoolOrCollege"
          value={studentData.schoolOrCollege}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={studentData.email}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
    </Container>
  );
};

export default StudentForm;
