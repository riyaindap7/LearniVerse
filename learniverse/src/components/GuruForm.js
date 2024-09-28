import React, { useState } from 'react';
import { TextField, Button, Container, Typography,MenuItem } from '@mui/material';
import './form.css'; // Import your custom CSS if needed

const GuruForm = ({ onSubmit }) => {
  const [guruData, setGuruData] = useState({
    name: '',
    gender: '',
    expertise: '',
    email: '',
  });

  const handleChange = (e) => {
    setGuruData({ ...guruData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(guruData); // Call the parent function to handle form submission
  };

  return (
    <Container maxWidth="sm" className="form-container">
      <Typography variant="h4" gutterBottom>
        Guru Registration
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={guruData.name}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          select
          label="Gender"
          name="gender"
          value={guruData.gender}
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
          label="Expertise"
          name="expertise"
          value={guruData.expertise}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={guruData.email}
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

export default GuruForm;
