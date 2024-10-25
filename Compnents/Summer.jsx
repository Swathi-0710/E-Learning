// import React, { useState } from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Drawer from '@mui/material/Drawer';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Unstable_Grid2';
// import Ill from "..//assets/ill.png";
// import Ill2 from "..//assets/autumn.jpg";
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// const GridItem = ({ imageUrl, handleFav, isFilled, type }) => (
//   <Grid item xs={12} sm={6} md={4}>
//     <Item>
//       <img
//         src={imageUrl}
//         alt="Your Alt Text"
//         style={{
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//         }}
//       />
//       <Grid item>
//         <Typography variant="h5" align="center" style={{ fontFamily: 'Georgia', fontSize: '20px' }}>
//           {type.propertyName}
//         </Typography>
//       </Grid>
//       <Grid container>
//         <IconButton onClick={handleFav} style={{ width: '20%', height: '30%', marginLeft: 'auto' }}>
//           {isFilled ? <FavoriteIcon style={{ color: 'pink', fontSize: '1.5rem' }} /> : <FavoriteBorderIcon style={{ fontSize: '1.5rem' }} />}
//         </IconButton>
//       </Grid>
//     </Item>
//   </Grid>
// );

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   marginLeft: 'auto',
//   width: '20vw',
//   height: 'auto',
// }));

// const StyledBox = styled(Box)({
//   display: 'flex',
//   justifyContent:" center",
//   alignItems: 'center', // Center vertically
//   height: 'auto', // Set the height to cover the entire viewport
//   // backgroundColor: 'pink',
//   width: '100%',
//   margin: 0,
//   padding: 0,
// });

// const Summer = ({ open }) => {
//   const drawerWidth = 240;
//   const [isFilled1, setIsFilled1] = useState(false);
//   const [isFilled2, setIsFilled2] = useState(false);
//   const [isFilled3, setIsFilled3] = useState(false);

//   const handleFav1 = () => setIsFilled1(!isFilled1);
//   const handleFav2 = () => setIsFilled2(!isFilled2);
//   const handleFav3 = () => setIsFilled3(!isFilled3);

//   return (
//     <>
//       <StyledBox>
//         <Grid container spacing={4}>
//           <GridItem imageUrl={Ill} handleFav={handleFav1} isFilled={isFilled1} type={{ propertyName: 'hello' }} />
//           <GridItem imageUrl={Ill2} handleFav={handleFav2} isFilled={isFilled2} type={{ propertyName: 'Autumn climate' }} />
//           <GridItem imageUrl={Ill} handleFav={handleFav3} isFilled={isFilled3} type={{ propertyName: 'example' }} />
//           {/* Add more items as needed */}
          
//         </Grid>
//       </StyledBox>
//     </>
//   );
// };

// export default Summer;

import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import BarChartIcon from '@mui/icons-material/BarChart';
import CreateIcon from '@mui/icons-material/Create';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import ScienceIcon from '@mui/icons-material/Science';
import Avatar from '@mui/material/Avatar';
import HtmlBadge from "..//assets/html.png"
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Saas from "..//assets/saas.png"
import Boot from "..//assets/Bootstrap_logo.svg.png"
import Jimage from "..//assets/jquery.png"
import Js from "..//assets/jse.png";
import CSSS from "..//assets/cssnew.svg"
import Divider from '@mui/material/Divider';
const QuickOptionsCard = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant='subtitle1' style={{ fontWeight: "600" }}>Likes and comments</Typography>
        <Typography variant='subtitle1' style={{ color: " #A8A8A8" }}>total likes: 25</Typography>
        <Button variant='outlined' style={{ backgroundColor: "#eec60a", color: "white", border: "1px solid #eec60a", fontSize: "17px", textTransform: "lowercase" }}>View Likes</Button>
        <Typography variant='subtitle1' style={{ color: " #A8A8A8" }}>total comments: 12</Typography>
        <Button variant='outlined' style={{ backgroundColor: "#eec60a", color: "white", border: "1px solid #eec60a", fontSize: "17px", textTransform: "lowercase" }}>View Comments</Button>
        <Typography variant='subtitle1' style={{ color: " #A8A8A8" }}>saved playlists: 4</Typography>
        <Button variant='outlined' style={{ backgroundColor: "#eec60a", color: "white", border: "1px solid #eec60a", fontSize: "17px", textTransform: "lowercase" }}>View Playlists</Button>
      </CardContent>
    </Card>
  );
}

const CategoryButton = (props) => {
  return (
    <Button variant="contained" style={{ backgroundColor: "#d8d7d7", textTransform: "lowercase", color: "black", margin: "10px" }}>
      {props.icon} {props.name}
    </Button>
  );
}

const CategoryCard = ({ title, categories, paragraph }) => {
  return (
    <Card variant="outlined" >
      <CardContent>
        <Typography variant='subtitle1' style={{ fontWeight: "600" }}>{title}</Typography>
        <Typography variant='subtitle1' style={{ fontWeight: "200" }}>{paragraph}</Typography>
        {categories.map((category, index) => (
          <CategoryButton key={index} icon={category.icon} name={category.name} />
        ))}
      </CardContent>
    </Card>
  );
}

 export const Videos = ({ title, date, buttons, images, paragraph, buttonses ,stylein,styleimg,}) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card variant="outlined" >
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar src="/broken-image.jpg" style={{ backgroundColor: "pink" }} />
            </Grid>
            <Grid item>
              <Typography>{title}</Typography>
              <Typography variant='caption' style={{ color: "grey" }}>{date}</Typography>
            </Grid>
          </Grid>

          <Card style={stylein}>
            <Grid container justify="center" alignItems="center">
              <Button variant="contained" disabled style={{ color: "white", margin: "12px", width: "auto", height: "6vh", borderRadius: "5px" }}>
                {buttons}
              </Button>
            </Grid>
            <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <CardMedia
                component="img"
                alt="My Image"
                image={images}
                style={styleimg}
              />
            </Box>
          </Card>

          <Typography variant='h6' style={{ marginTop: "20px" }}>{paragraph}</Typography>
          <Button variant='outlined' style={{ backgroundColor: "#eec60a", color: "white", border: "1px solid #eec60a", fontSize: "17px", textTransform: "lowercase", marginTop: "10px" }}>{buttonses}</Button>
        </CardContent>
      </Card>
    </Grid>
  )
}

const Summer = () => {
  const categoriesDevelopment = [
    { icon: '</>', name: 'development' },
    { icon: <BarChartIcon />, name: 'business' },
    { icon: <CreateIcon />, name: 'design' },
    { icon: <ShowChartOutlinedIcon />, name: 'marketing' },
    { icon: <MusicNoteIcon />, name: 'music' },
    { icon: <CameraAltIcon />, name: 'photography' },
    { icon: <SettingsIcon />, name: 'software' },
    { icon: <ScienceIcon />, name: 'science' },
  ];

  const categoriesTopics = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'Javascript' },
    { name: 'react' },
    { name: 'PHP' },
    { name: 'bootstrap' },
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} >
            <Typography variant='h5' align='start'style={{marginTop:"3%"}}>Quick Options</Typography>
            <Divider  style={{backgroundColor:"black",marginTop: '15px', marginBottom: '15px'}}/>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} md={4}>
                <QuickOptionsCard />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <CategoryCard title="Top Categories" categories={categoriesDevelopment} />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <CategoryCard title="Popular Topics" categories={categoriesTopics} />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant='subtitle1' style={{ fontWeight: "600" }}>Become A Tutor</Typography>
                    <Typography variant='subtitle1' style={{ fontSize: "20px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <Typography variant='h5' align='start' style={{marginTop:"5%"}}>Our Courses</Typography>
            <Divider  style={{backgroundColor:"black",marginTop: '15px', marginBottom: '15px'}}/>
          </Grid>
        
          <Videos title="Swathi" date="21-10-2022" buttons="10 videos" images={HtmlBadge} paragraph="complete HTML tutorial" buttonses="View Playlists" stylein={{backgroundColor: "#C62F2F", marginTop: "20px",minHeight: "40vh"  }} styleimg={{ width: '120px', height: "120px" }}/>
          <Videos title="Name2" date="22-10-2022" buttons="10 videos" images={CSSS} paragraph="complete CSS tutorial" buttonses="View Playlists" stylein={{backgroundColor: "#001861", marginTop: "20px",minHeight: "40vh"  }} styleimg={{ width: '120px', height: "120px" }} />
          <Videos title="Name3" date="2-10-2022" buttons="10 videos" images={Js} paragraph="complete JS tutorial" buttonses="View Playlists" stylein={{backgroundColor: "#ED9121", marginTop: "20px",minHeight: "40vh"  }} styleimg={{ width: '120px', height: "120px" }}/>
          <Videos title="Name4" date="4-10-2022" buttons="10 videos" images={Boot} paragraph="complete Bootstrap tutorial" buttonses="View Playlists" stylein={{backgroundColor: "#002db3", marginTop: "20px",minHeight: "40vh"  }} styleimg={{ width: '150px', height: "120px" }} />
          <Videos title="Name5" date="5-10-2022" buttons="10 videos" images={Jimage} paragraph="complete JQuery tutorial" buttonses="View Playlists" stylein={{backgroundColor: "#001861", marginTop: "20px",minHeight: "40vh"  }}styleimg={{ width: '140px', height: "140px" }} />
          <Videos title="Name6" date="4-1-2022" buttons="10 videos" images={Saas} paragraph="complete SASS tutorial" buttonses="View Playlists"  stylein={{backgroundColor: "#b35a73", marginTop: "20px",minHeight: "40vh"  }}styleimg={{ width: '50%', height: "50%" }}/>
        </Grid>
        <Grid item xs={12} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
         
          <Button variant='outlined' style={{ backgroundColor: "#613a00", color: "white", border: "1px solid #eec60a", fontSize: "17px", textTransform: "lowercase", marginTop: "10px" }}>
          View All courses</Button>
          </Grid>
      </Box>
    </>
  );
}

export default Summer;
