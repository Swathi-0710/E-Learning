import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  Box  from '@mui/material/Box';
export default function Update() {
  return (
    <Box style={{ display: 'flex', justifyContent: 'center' }}>
      <Grid item xs={12} sm={6}>
        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, width: "100%", maxWidth: "500px" }}>
          <Typography variant="h6" gutterBottom style={{ fontSize: "25px", fontWeight: "600" }}>Update Profile</Typography>
          <TextField variant="filled" placeholder='Enter your name' style={{ marginBottom: 10, width: '100%' }} />
          <TextField variant="filled" placeholder='Enter your email' style={{ marginBottom: 10, width: '100%' }} />
          <TextField variant="filled" placeholder='Previous password' style={{ marginBottom: 10, width: '100%' }} />
          <TextField variant="filled" placeholder='Enter your new password' style={{ marginBottom: 10, width: '100%' }} />
          <TextField variant="filled" placeholder='Confirm your new password' style={{ marginBottom: 10, width: '100%' }} />
          <Button variant='outlined' style={{ backgroundColor: "#eec60a", border: "1px solid #eec60a", color: "white", width: '100%' }}>Update</Button>
        </Card>
      </Grid>
    </Box>
  );
}
