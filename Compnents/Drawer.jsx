import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Paper from '@mui/material/Paper';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { NavLink } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ListItemText from '@mui/material/ListItemText';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountMenu from './sign';
import { ListItem } from '@mui/material';
import { Route,Routes } from 'react-router-dom';
import Summer from './Summer';
import Gallery from './Gallery';
import Update from './Update';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import About from './About';
import Courses from './Courses';
import Playlist from './Playlist';
import Blob from "..//assets/blob.svg"
import Teachers from './Teachers';
import Contact from './Contact';
import ImageUpload from './Photo';
const drawerWidth = 240;

const StyledBox = styled(Box)({
  display: "flex",
  background: "white",
 backgroundImage:`url(${Blob})`,
 backgroundRepeat: 'no-repeat',
 backgroundSize: 'cover',
  height:"auto"
});

const GridItem = ({ imageUrl, handleFav, isFilled, type }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Paper>
      <img
        src={imageUrl}
        alt="Your Alt Text"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <Grid item>
        <Typography variant="h5" align="center" style={{ fontFamily: 'Georgia', fontSize: '20px' }}>
          {type.propertyName}
        </Typography>
      </Grid>
      <Grid container>
        <IconButton onClick={handleFav} style={{ width: '20%', height: '30%', marginLeft: 'auto' }}>
          {isFilled ? <FavoriteIcon style={{ color: 'pink', fontSize: '1.5rem' }} /> : <FavoriteBorderIcon style={{ fontSize: '1.5rem' }} />}
        </IconButton>
      </Grid>
    </Paper>
  </Grid>
);

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(3),
//   transition: theme.transitions.create('margin', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   marginLeft: `-${drawerWidth}px`,
//   ...(open && {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: '0px',
//     overflowY: 'auto',
//     maxHeight: '100vh',
//   }),
// }));
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
      
    }),
  }),
);
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',

}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  marginLeft: 'auto',
  width: '20vw',
  height: 'auto',
}));

const PersistentDrawerLeft = () => {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const [isFilled1, setIsFilled1] = useState(false);
  const [isFilled2, setIsFilled2] = useState(false);
  const [isFilled3, setIsFilled3] = useState(false);
  const [isCollapse, setIsCollapse] = React.useState(false);

  const handleFav1 = () => setIsFilled1(!isFilled1);
  const handleFav2 = () => setIsFilled2(!isFilled2);
  const handleFav3 = () => setIsFilled3(!isFilled3);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerOpens = () => setShown(true);
  const handleDrawerCloses = () => setShown(false);
  const handleDrawerClose = () => setOpen(false);
  const handleCollapse = () => setIsCollapse(!isCollapse);

  return (
    <StyledBox>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar style={{ backgroundColor: '#613a00', backgroundSize: 'cover', width: 'auto' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" style={{ color: 'white' }} >Education</Typography>
          <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerOpens} style={{ marginLeft: 'auto' }}>
            <SearchIcon />
          </IconButton>
          {shown && (
            <Typography>
              <TextField
                id="filled-basic"
                placeholder="Search"
                variant="filled"
                className="placeholder"
                style={{ marginLeft: 'auto', marginTop: '-1em' }}
                InputProps={{
                  inputProps: { style: { color: 'white' } },
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton onClick={handleDrawerCloses} style={{
                        position: 'absolute',
                        top: '65%',
                        right: '0px',
                        transform: 'translateY(-50%)',
                        color: 'white',
                      }}>
                        <CancelIcon style={{ color: 'white' }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Typography>
          )}
          <ImageUpload />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:"#613a00"
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ backgroundColor: '#613a00' }}>
          <IconButton onClick={handleDrawerClose} edge="start" sx={{ marginRight: 'auto', marginLeft: '2%' }}>
            <MenuIcon style={{ color: 'white' }} />
          </IconButton>
            
       
    
       </DrawerHeader>
        <Divider style={{ color: 'white' }} />
        {/* <List sx={{ backgroundColor: '#613a00' }}>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={handleCollapse}>
            <ListItemButton sx={{ minHeight: 5, justifyContent: open ? 'initial' : 'center', px: 2.5 }}>
              <ListItemText primary="Weather" sx={{ opacity: open ? 1 : 0, color: 'white' }} />
              {isCollapse ? <ExpandLessIcon style={{ color: 'white' }} /> : <ExpandMoreIcon style={{ color: 'white' }} />}
            </ListItemButton>
          </ListItem>
          <Collapse in={isCollapse} timeout="auto" unmountOnExit style={{ color: 'white' }}>
            <NavLink to="/summer" style={{ textDecoration: 'none' }}>
              <ListItem>
                <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, color: 'white' }}>Summer</ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink to="/winter" style={{ textDecoration: 'none' }}>
              <ListItem>
                <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, color: 'white' }}>Winter</ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink to="/rainy" style={{ textDecoration: 'none' }}>
              <ListItem>
                <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, color: 'white' }}>Rainy</ListItemButton>
              </ListItem>
            </NavLink>
          </Collapse>
        </List> */}

   
     <List>
     <ListItemIcon style={{display:"flex",justifyContent:"center"}}>
       <Avatar src="/broken-image.jpg" style={{width:"80px",height:"80px"}}/>
   </ListItemIcon> 

<ListItemButton style={{display:"flex",justifyContent:"center"}}>
   <Button style={{color:"white",border:"1px solid #eec60a",width:"150px",height:"40px",backgroundColor:"#eec60a"}}>
     View Profile
   </Button>
   </ListItemButton>
   </List>
   <List>    
    <NavLink to="/home">   
      <ListItem>

            <ListItemButton style={{ color: 'white' }}>Home</ListItemButton>
          </ListItem>
          </NavLink> 
          <NavLink to="/about">
          <ListItem>
            <ListItemButton style={{ color: 'white' }}>About</ListItemButton>
          </ListItem>
          </NavLink>
          <NavLink to="/courses">
          <ListItem>
            <ListItemButton style={{ color: 'white' }}>Courses</ListItemButton>
          </ListItem>
          </NavLink>
          <NavLink to="/teacher">
          <ListItem>
            <ListItemButton style={{ color: 'white' }}>Teachers</ListItemButton>
          </ListItem>
          </NavLink>
          <NavLink to="/contact">
          <ListItem>
            <ListItemButton style={{ color: 'white' }}>Contact us</ListItemButton>
          </ListItem>
          </NavLink>
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {/* Main content... */}
        <Routes>
  <Route path="/profile" element={<Update />} />
  <Route path="/home" element={<Summer />} /> {/* This route will be the index page */}
  <Route path="/about" element={<About />} />
  <Route path="/courses" element={<Courses />} />
  <Route path="/playlist" element={<Playlist />} />
  <Route path="/teacher" element={<Teachers />} />
  <Route path="/contact" element={<Contact />} />
</Routes>

     </Main>
    </StyledBox>
  );
};

export default PersistentDrawerLeft;
