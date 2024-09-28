// src/pages/MyCourses.js
import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Grid } from '@mui/material';

function MyCourses({ courses }) {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        My Courses
      </Typography>
      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {course.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View Course
                </Button>
                <Button size="small" color="secondary">
                  Edit Course
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default MyCourses;
