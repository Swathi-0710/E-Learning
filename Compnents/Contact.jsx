import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Con from '../assets/condraw.svg';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Contact() {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>Contact Us</Typography>
            <Divider sx={{ marginBottom: 2 }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={Con} width="100%" height="auto" alt="Contact Drawing" style={{ marginTop: "90px", maxWidth: "100%" }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, width: "100%", maxWidth: "500px" }}>
              <Typography variant="h6" gutterBottom style={{ fontSize: "25px", fontWeight: "600" }}>Get in Touch</Typography>
              <TextField variant="filled" placeholder='Enter your name' style={{ marginBottom: 10, width: '100%' }} />
              <TextField variant="filled" placeholder='Enter your email' style={{ marginBottom: 10, width: '100%' }} />
              <TextField variant="filled" placeholder='Enter your number' style={{ marginBottom: 10, width: '100%' }} />
              <TextField variant="filled" placeholder='Enter your message' style={{ marginBottom: 10, width: '100%' }} multiline rows={6} />
              <Button variant='outlined' style={{ backgroundColor: "#eec60a", border: "1px solid #eec60a", color: "white" }}>Send Message</Button>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
