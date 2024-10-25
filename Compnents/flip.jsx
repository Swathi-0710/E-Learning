// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import { Typography, Button, TextField } from '@mui/material';
// import { motion } from 'framer-motion';
// import Im from "..//assets/maker.svg";

// export default function Fli() {
//   const [isClicked, setIsClicked] = useState(false);
//   const [isSignUp, setIsSignUp] = useState(false); // State to track if it's sign up mode

//   const handleButtonClick = () => {
//     setIsClicked(!isClicked);
//     setIsSignUp(!isClicked); // Toggle the sign-up form state
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         height: '100vh', // Full viewport height
//         overflow: 'hidden', // Hide overflowing content
//         flexDirection: { xs: 'column', md: 'row' }, // Column layout on small screens, row layout on medium and larger screens
//       }}
//     >
//       {/* Brown Side */}
//       <motion.div
//         initial={{ x: 0 }}
//         animate={{ x: isClicked ? '100%' : 0 }} // Move to the right when clicked
//         transition={{ duration: 0.5 }}
//         style={{
//           flex: 1,
//           backgroundColor: '#613a00', // Brown color
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           padding: '20px',
//           borderRadius: isClicked ? '0px 8px 8px 0px' : '8px 0px 0px 8px', // Adjust border radius based on animation
//         }}
//       >
//         {/* Login Form */}
//         <Box
//           sx={{
//             width: '80%', // Adjust width as needed
//             padding: '20px',
//             borderRadius: '8px',
//             position: 'relative',
//             display: isClicked || isSignUp ? 'none' : 'block',
//           }}
//         >
//           <Typography variant='h2' sx={{ position: 'absolute', top: '10px', left: '20px', color: 'white' }}>
//             Login Form
//           </Typography>
//           {/* Your login form components go here */}
//           <TextField label="Email" variant="outlined" fullWidth margin="normal" />
//           <TextField label="Password" variant="outlined" fullWidth margin="normal" />
//           <Button variant="contained" fullWidth>
//             Login
//           </Button>
//         </Box>
//         {isSignUp && <img src={Im} alt="Logo" style={{ width: "50vw", height: "50vh" }} />}
//       </motion.div>

//       {/* Pink Side */}
//       <motion.div
//         initial={{ x: 0 }}
//         animate={{ x: isClicked ? '-100%' : 0 }} // Move to the left when clicked
//         transition={{ duration: 0.5 }}
//         style={{
//           flex: 1,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           width: isClicked ? '50%' : '100%', // Adjust width when sign-up form is visible
//           backgroundColor: "white",
//           borderRadius: isClicked ? '8px 0px 0px 8px' : '0px 8px 8px 0px', // Adjust border radius based on animation
//         }}
//       >
//         {/* Sign Up Form and Image */}
//         <Box
//           sx={{
//             width: '80%', // Adjust width as needed
//             padding: '20px',
//             borderRadius: '8px',
//             backgroundColor: 'white',
//             textAlign: 'center',
//             display: 'block', // Always show the sign-up form
//           }}
//         >
//           <Typography variant='h2' sx={{ color: 'black' }}>
//             Sign Up Form
//           </Typography>

//           {/* Your sign up form components go here */}
//           <TextField label="Name" variant="outlined" fullWidth margin="normal" />
//           <TextField label="Email" variant="outlined" fullWidth margin="normal" />
//           <TextField label="Password" variant="outlined" fullWidth margin="normal" />
//           <Button variant="contained" fullWidth>
//             Sign Up
//           </Button>
//         </Box>
//       </motion.div>

//       {/* Button to trigger animation */}
//       <Button variant="contained" onClick={handleButtonClick}>
//         {isClicked ? 'Move to Original' : 'Move Sides'}
//       </Button>
//     </Box>
//   );
// }
import React from 'react';
import Gir from '..//assets/coff.jpg';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Card from '@mui/material/Card';
import Logo from "..//assets/logo1.png"
import Chub from "..//assets/br.jpg"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Telegram } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import PersistentDrawerLeft from './Drawer';
import useNavigation from './useNavigation';
export default function Fli({ handleGetStarted }) {
  const courses = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
  const Cont=["Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains."]
  const iconStyle = {
    color: '#ee2a7b',
    backgroundImage: '-webkit-linear-gradient(135deg, #f9ce34 27%, #ee2a7b 61%, #6228d7 88%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    textFillColor: 'transparent',
    WebkitTextFillColor: 'transparent',
  };
  
  return (
    <Box style={{ position: 'relative',margin:"-1%"}}>
      <Grid container spacing={0} style={{ top: 0, margin: 0, alignItems: 'flex-end' }}>
        <Grid item xs={12} style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end' }}>
          <img
            src={Gir}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              maxHeight: '90vh',
            }}
          />
          <Box
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              textAlign: 'center',
              padding: '10px',
              color: 'white'
            }}>
              <img src={Logo} style={{width:"100%",height:"100%",maxHeight:"15vh"}}/>
          </Box>
          <Box
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              textAlign: 'center',
              padding: '10px',
              color: 'white'
            }}>
            <Button variant='outlined' style={{ borderRadius: "30px", color: "white", backgroundColor: "#613a00", border: "1px solid #613a00", margin: "5px", background: "linear-gradient(90deg, rgba(147,14,104,1) 10%, rgba(97,58,0,1) 98%)" }}>Sign UP </Button>
            <Button variant='outlined' style={{ borderRadius: "30px", color: "white", backgroundColor: "#613a00", background: "linear-gradient(90deg, rgba(147,14,104,1) 10%, rgba(97,58,0,1) 98%)", border: "1px solid #613a00", margin: "5px", borderRight: "1px solid #930e68" }}>Login </Button>
          </Box>
          <Box
            style={{
              position: 'absolute',
              bottom: '15%',
              right: '20px',
              textAlign: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '20px',
              height: "60%",
            }}>
            <Typography variant='h4' style={{ fontWeight: '600', color: 'white', marginBottom: "1rem", marginTop: "5rem" }}>
              Learn from anywhere
            </Typography>
            <Typography variant='h6' style={{ fontWeight: '100', color: 'white', fontSize: "15px", marginBottom: "1rem" }}>
              Build skills with courses,certificates,degrees,online from world-class universities and companies
            </Typography>
            <TextField
              variant='outlined'
              placeholder='Search'
              style={{ backgroundColor: "#f5f5f5", width: "60%", height: "45px", borderRadius: "5px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
              InputProps={{
                startAdornment: (
                  <SearchIcon />
                ),
                style: { height: "100%", fontSize: "14px" },
                endAdornment: (
                  <Button
                    variant="contained"
                    style={{ height: "79%", width: "88%", borderRadius: "10px", fontSize: "15px", textTransform: "lowercase" }}>
                    Search
                  </Button>
                ),
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '5px' }}>
  <Link to="/hello" style={{ textDecoration: 'none' }}> {/* Use Link component and specify the "to" attribute with the desired route */}
    <Button variant='outlined' style={{ color: 'white', borderColor: '#613a00', backgroundColor: "#613a00", border: "1px solid #613a00", background: "linear-gradient(90deg, rgba(147,14,104,1) 10%, rgba(97,58,0,1) 98%)" }} onClick={handleGetStarted}>
      Get Started
      <KeyboardDoubleArrowRightIcon color='white' style={{ paddingLeft: "5px" }} />
    </Button>
  </Link>
</Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', marginLeft: '2%' }}>
            <Typography variant='h5'>Popular Courses</Typography>
          </Grid>
          {courses.map((course, index) => (
            <Grid item xs={4} key={index} style={{ display: 'flex', justifyContent: 'center' }}>
              <Card style={{ width: "60%", height: "100%", padding: "10px", backgroundColor: "#d3a284" }}>
                <Typography style={{ fontWeight: 600 }}>{course}</Typography>
                <Typography >{Cont[0]}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid container justify="flex-end" alignItems="flex-end">
  <Card style={{ width: "100%", height: "150%", marginTop: "5%", backgroundColor: "#bf9073" }}>
    <Box style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "0 20px" }}>
      <Grid container spacing={2}>
    <Grid item xs={12} md={12}>
  <Typography variant='h5' style={{ margin: "1%", marginTop: "3%", }}>
    Contact Us
  </Typography>
</Grid>
<Grid item xs={12} md={12} style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
  <img src={Chub} style={{ width: "100%", height: "auto", borderRadius: "50%", objectFit: "cover", maxHeight: "50vh", maxWidth: "50vh" }}/>
</Grid>
<Grid item xs={12} style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
  <Button style={{borderRadius:"50%",}}><WhatsAppIcon style={{color:"green",fontSize:"35px"}}/></Button>
  <Button style={{ borderRadius: "50%", padding: 0 }}>
        <InstagramIcon style={{color:"pink",fontSize:"35px"}} />
    </Button>
  <Button style={{borderRadius:"50%"}}> <Telegram style={{fontSize:"35px"}}/></Button>
</Grid>
<Grid container style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
<Grid container style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
  <Card style={{ borderLeft:" 1px solid #930e68", borderTop:" 1px solid #930e68",borderRadius: "5%", width: "22vw", height: "14vh", display: "flex", alignItems: "center", justifyContent: "center", margin: "3%", background: "linear-gradient(164deg, rgba(190,141,115,1) 31%, rgba(191,144,115,1) 31%, rgba(147,14,104,1) 98%, rgba(180,110,112,1) 99%)" }}>
    <Typography>97-1283478773</Typography>
  </Card>
  <Card style={{ borderLeft:" 1px solid #930e68", borderTop:" 1px solid #930e68",borderRadius: "5%", width: "22vw", height: "14vh", display: "flex", alignItems: "center", justifyContent: "center", margin: "3%", background: "linear-gradient(164deg, rgba(190,141,115,1) 31%, rgba(191,144,115,1) 31%, rgba(147,14,104,1) 98%, rgba(180,110,112,1) 99%)" }}>
    <Typography>Yasha@gmail.com</Typography>
  </Card>
  <Card style={{ borderLeft:" 1px solid #930e68", borderTop:" 1px solid #930e68",borderRadius: "5%", width: "20vw", height: "10vh", display: "flex", alignItems: "center", justifyContent: "center", margin: "3%", padding: "1%", background: "linear-gradient(164deg, rgba(190,141,115,1) 31%, rgba(191,144,115,1) 31%, rgba(147,14,104,1) 98%, rgba(180,110,112,1) 99%)" }}>
    <Typography>No 47, main street, Chennai-609805</Typography>
  </Card>
</Grid>

</Grid>

</Grid>

    </Box>
   
  </Card>
</Grid>



      </Grid>
    </Box>
  );
}
