import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Im from "../assets/maker.svg"; // Assuming the correct path to the image
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import InputLabel from '@mui/material/InputLabel';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Sign() {
  const [isClicked, setIsClicked] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true); // Set isSignUp to true initially
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Corrected state variable name

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowConfirmPassword = () => { // Corrected function name
    setShowConfirmPassword(!showConfirmPassword); // Corrected state variable name
  };

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
    setIsSignUp(true); // Always set isSignUp to true when button is clicked
    setIsLogin(!isClicked);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '95vh',
        overflow: 'hidden',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      {/* Brown Side */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isClicked ? '100%' : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          flex: 1,
          backgroundColor: '#613a00',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          borderRadius: isClicked ? '0px 8px 8px 0px' : '8px 0px 0px 8px',
        }}
      >
        {isSignUp && <img src={Im} alt="Logo" style={{ width: "30vw", height: "70vh" }} />}
        <Button variant="contained" onClick={handleButtonClick} style={{ width: "10%", height: "10%", alignSelf: "flex-end", justifySelf: "flex-start" }}>
        {isClicked ? 'Move to Original' : 'Move Sides'}
      </Button>
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isClicked ? '-100%' : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: "white",
          borderRadius: isClicked ? '8px 0px 0px 8px' : '0px 8px 8px 0px',
          border:"1px solid red",
        }}
      >
        <Box style={{ width: "80%", maxWidth: "600px" }}> {/* Adjusted width */}
          <Grid container spacing={2} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Grid item xs={12}  style={{margin:"3%"}}>
              <Typography variant="h4" style={{textAlign:"center"}}>Sign Up</Typography>
              <InputLabel htmlFor="name" style={{textAlign:"start",marginLeft:"13%"}}>Name</InputLabel>
              <TextField variant='outlined' placeholder='Name' id="name" InputProps={{
                startAdornment: (
                  <PersonIcon style={{ marginRight: "2%" }} />
                ),
              }}
                sx={{
                  width: "20em",
                  height: "5%",
                  backgroundColor: "whitesmoke",
                  marginTop:"2%",
                  marginBottom:"2%",
                  '&:hover': {
                    backgroundColor: "rosybrown",
                    
                  },
                }} />
              <InputLabel htmlFor="email" style={{textAlign:"start",marginLeft:"13%"}}>Email</InputLabel>
              <TextField variant='outlined' placeholder='sss.gmail.com' id="email" InputProps={{
                startAdornment: (
                  <EmailIcon style={{ marginRight: "2%" }} />
                ),
              }}
                sx={{
                  width: "20em",
                  height: "5%",
                  backgroundColor: "whitesmoke",
                  marginTop:"2%",
                  marginBottom:"2%",
                  '&:hover': {
                    backgroundColor: "rosybrown"
                  },
                }} />
              <InputLabel htmlFor="password" style={{textAlign:"start",marginLeft:"13%"}}>Password</InputLabel>
              <TextField variant='outlined' placeholder='*****' id="password"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  startAdornment: (
                    <LockIcon style={{ marginRight: "2%" }} />
                  ),
                  endAdornment: (
                    <React.Fragment>
                      {showPassword ? (
                        <VisibilityOffIcon
                          onClick={handleClickShowPassword}
                          style={{ cursor: 'pointer' }}
                        />
                      ) : (
                        <VisibilityIcon
                          onClick={handleClickShowPassword}
                          style={{ cursor: 'pointer' }}
                        />
                      )}
                    </React.Fragment>
                  ),
                }}
                sx={{
                  width: "20em",
                  height: "5%",
                  backgroundColor: "whitesmoke",
                  marginTop:"2%",
                  marginBottom:"2%",
                  '&:hover': {
                    backgroundColor: "rosybrown"
                  },
                }} />
              <InputLabel htmlFor="confirmPassword" style={{textAlign:"start",marginLeft:"13%"}}>Confirm Password</InputLabel>
              <TextField variant='outlined' placeholder='*****' id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'} InputProps={{
                startAdornment: (
                  <LockIcon style={{ marginRight: "2%" }} />
                ),
                endAdornment: (
                  <React.Fragment>
                    {showConfirmPassword ? (
                      <VisibilityOffIcon
                        onClick={handleClickShowConfirmPassword}
                        style={{ cursor: 'pointer' }}
                      />
                    ) : (
                      <VisibilityIcon
                        onClick={handleClickShowConfirmPassword}
                        style={{ cursor: 'pointer' }}
                      />
                    )}
                  </React.Fragment>
                ),
              }}
                sx={{
                  width: "20em",
                  height: "5%",
                  backgroundColor: "whitesmoke",
                  marginTop:"2%",
                  marginBottom:"2%",
                  '&:hover': {
                    backgroundColor: "rosybrown"
                  },
                }} />
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center'}}>
              <Button variant='outlined'>Sign Up</Button>
            </Grid>
          </Grid>
        </Box>
      </motion.div>

      {/* Button to trigger animation */}

    </Box>
  );
}
