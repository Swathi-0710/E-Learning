import React, { useState, useRef } from 'react';
import { Box, Tooltip, IconButton, Avatar, Menu, MenuItem, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Autumn from "../assets/autumn.jpg";
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

function ImageUpload() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
        handleClose();
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      <Tooltip title="Account settings" placement="bottom">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={anchorEl ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={Boolean(anchorEl)}
        >
          <Avatar sx={{ width: 32, height: 32 }} src={profileImage}>
            M
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            width: "20vw", // Full width on mobile
            maxHeight: "80vh", // Limit height on smaller screens
            backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.2), rgba(255, 0, 0, 0.2)), url(${Autumn})`,
            backgroundSize: '100% 20%',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item>
            <MenuItem>
              <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Avatar sx={{ width: 60, height: 60, border: "1px solid #613a00" }} />
              </Link>
            </MenuItem>
          </Grid>
          <Grid item xs={12}>
            <MenuItem>
              <Button variant="outlined" style={{ color: "white", backgroundColor: "#eec60a", border: "1px solid #eec60a", width: "100%", textTransform: "none" }}>Update Profile</Button>
            </MenuItem>
          </Grid>
          <Grid item xs={12}>
            <MenuItem>
              <Button onClick={handleClose} variant="outlined" style={{ color: "white", backgroundColor: "#eec60a", border: "1px solid #eec60a", width: "100%", textTransform: "none" }}><LogoutIcon />Log Out</Button>
            </MenuItem>
          </Grid>
        </Grid>
      </Menu>
    </Box>
  );
}

export default ImageUpload;
