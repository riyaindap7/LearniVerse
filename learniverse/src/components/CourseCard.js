// src/components/CourseCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CourseCard = ({ course }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div" fontWeight="bold">
          {course.name}
        </Typography>
        <Typography variant="body2" component="div">
          Instructor: {course.instructor}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
