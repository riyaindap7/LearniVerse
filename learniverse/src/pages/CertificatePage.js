import React, { useState } from 'react';
import jsPDF from 'jspdf';
import { TextField, Button } from '@mui/material';

const Certificate = () => {
  const [studentName, setStudentName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [rating, setRating] = useState('');

  const generateCertificate = () => {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text('Certificate of Completion', 20, 30);

    doc.setFontSize(16);
    doc.text(`This certifies that`, 20, 50);
    doc.setFontSize(20);
    doc.text(studentName, 20, 65);

    doc.setFontSize(16);
    doc.text(`has successfully completed the course`, 20, 85);
    doc.setFontSize(20);
    doc.text(courseName, 20, 100);

    doc.setFontSize(16);
    doc.text(`under the instruction of`, 20, 120);
    doc.setFontSize(20);
    doc.text(instructorName, 20, 135);

    doc.setFontSize(16);
    doc.text(`with a rating of`, 20, 155);
    doc.setFontSize(20);
    doc.text(rating, 20, 170);

    doc.setFontSize(14);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 190);

    doc.save('certificate.pdf');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>Generate Certificate</h2>
      <form noValidate autoComplete="off">
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
        <Button
          variant="contained"
          color="primary"
          onClick={generateCertificate}
          style={{ marginTop: '20px' }}
        >
          Generate Certificate
        </Button>
      </form>
    </div>
  );
};

export default Certificate;
