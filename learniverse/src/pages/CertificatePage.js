import React, { useState } from 'react';
import { Button, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import jsPDF from 'jspdf';

const CertificatePage = () => {
  const [certificateType, setCertificateType] = useState('single');
  const [studentName, setStudentName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [rating, setRating] = useState('');

  const handleGenerateCertificate = () => {
    const doc = new jsPDF();

    doc.text(`Certificate of Completion`, 20, 20);
    doc.text(`This is to certify that`, 20, 30);
    doc.text(`${studentName}`, 20, 40);
    doc.text(`has successfully completed the course`, 20, 50);
    doc.text(`${courseName}`, 20, 60);
    doc.text(`Instructor: ${instructorName}`, 20, 70);
    doc.text(`Rating: ${rating}`, 20, 80);

    doc.save('certificate.pdf');
  };

  const handleGenerateMultipleCertificates = () => {
    // Logic for generating multiple certificates
    // For example, you could loop over a list of students and generate a certificate for each
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (certificateType === 'single') {
      handleGenerateCertificate();
    } else {
      handleGenerateMultipleCertificates();
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Generate Certificate</h2>
      <form onSubmit={handleSubmit}>
        <FormControl variant="outlined" fullWidth margin="normal">
          <InputLabel id="certificate-type-label">Certificate Type</InputLabel>
          <Select
            labelId="certificate-type-label"
            id="certificate-type"
            value={certificateType}
            onChange={(e) => setCertificateType(e.target.value)}
            label="Certificate Type"
          >
            <MenuItem value="single">Single Certificate</MenuItem>
            <MenuItem value="multiple">Multiple Certificates</MenuItem>
          </Select>
        </FormControl>

        {certificateType === 'single' && (
          <>
            <TextField
              label="Student Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
            />
            <TextField
              label="Instructor Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={instructorName}
              onChange={(e) => setInstructorName(e.target.value)}
              required
            />
            <TextField
              label="Course Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              required
            />
            <TextField
              label="Rating"
              variant="outlined"
              fullWidth
              margin="normal"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
          </>
        )}

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Generate Certificate
        </Button>
      </form>
    </div>
  );
};

export default CertificatePage;
