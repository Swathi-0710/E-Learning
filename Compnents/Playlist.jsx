import React from 'react'
import  Box  from '@mui/material/Box'
import  Typography  from '@mui/material/Typography'
import  Card  from '@mui/material/Card'
import  Divider  from '@mui/material/Divider'
import  Grid  from '@mui/material/Grid'
import { CardHeader } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Button from '@mui/material/Button'
import HtmlBadge from "..//assets/html.png"
import Avatar from '@mui/material/Avatar'
export default function Playlist() {
  return (
    <>

<Grid container justify="center">
  <Box>
    <Typography variant='h5' style={{ fontSize: "19px", marginTop: "1%" }}>Playlist Details</Typography>
    <Divider style={{ marginTop: "3%", marginBottom: "2%" }} />

    <Card style={{ display: "flex", flexDirection: "column", width: "90%" }}>
      <Box style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", marginTop:"2%",marginLeft:"1%" }}>
        <Button style={{ fontSize: "12px", height: "20%", width: "auto", marginBottom: "10px",backgroundColor:"#d3d3d3" ,border:"1px solid #d3d3d3",color:"black"}} variant='outlined'>
          <BookmarkBorderIcon style={{color:"black"}}/> Saved Playlist
        </Button>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={6} style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
          <Card style={{ backgroundColor: "#C62F2F", height: "48vh", width: "40vw", display: "flex", justifyContent: "center", alignItems: "center" ,margin:"2%"}}>
            <img src={HtmlBadge} style={{ width: '150px', height: "150px" }} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4} style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column"}}>
  <Box style={{ display: "flex", alignItems: "flex-start" }}>
    <Avatar style={{ fontSize: "40px", marginRight: "10px" }} />
    <div>
      <Typography variant='h6'>Name1</Typography>
      <Typography variant="caption">21-10-2002</Typography>
    </div>
  </Box>
  <Typography variant='h6' style={{ marginTop: "10px" }}>Complete HTML tutorial</Typography>
  <Typography variant='body2' style={{ marginTop: "14px" }}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  </Typography>
  <Button variant='outlined' style={{ width: "50%", backgroundColor: "#eec60a", border: "1px solid #eec60a", color: "white", marginTop: "10px" }}>View Profile</Button>
</Grid>

      </Grid>
    </Card>
  </Box>
</Grid>
<Grid container justify="center">
  <Grid item xs={12}>
    <Box>
      <Typography variant='h5' style={{ fontSize: "19px", marginTop: "4%" }}>Playlist Videos</Typography>
      <Divider style={{ marginTop: "3%", marginBottom: "2%" }} />
    </Box>
  </Grid>
  <Grid container spacing={6}>
  <Grid item xs={12} sm={4} md={4} style={{ margin: "10px" }}>
    <Card style={{ width: "34vw" }}>
      <Box style={{ backgroundColor: "#C62F2F", height: "48vh", width: "30vw", position: "relative", margin: "5%" }}>
        <img src={HtmlBadge} style={{ width: '150px', height: "150px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
        <Typography variant='h3' style={{ color: "white", fontWeight: "600", position: "absolute", top: "10px", right: "10px" }}>#1</Typography>
      </Box>
      <Typography variant='h6' style={{ margin: "5%" }}>Complete HTML tutorial</Typography>
    </Card>
  </Grid>
  <Grid item xs={12} sm={4} md={4} style={{ margin: "10px" }}>
    <Card style={{ width: "34vw" }}>
      <Box style={{ backgroundColor: "#C62F2F", height: "48vh", width: "30vw", position: "relative", margin: "5%" }}>
        <img src={HtmlBadge} style={{ width: '150px', height: "150px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
        <Typography variant='h3' style={{ color: "white", fontWeight: "600", position: "absolute", top: "10px", right: "10px" }}>#1</Typography>
      </Box>
      <Typography variant='h6' style={{ margin: "5%" }}>Complete HTML tutorial</Typography>
    </Card>
  </Grid>
  <Grid item xs={12} sm={4} md={4} style={{ margin: "10px" }}>
    <Card style={{ width: "34vw" }}>
      <Box style={{ backgroundColor: "#C62F2F", height: "48vh", width: "30vw", position: "relative", margin: "5%" }}>
        <img src={HtmlBadge} style={{ width: '150px', height: "150px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
        <Typography variant='h3' style={{ color: "white", fontWeight: "600", position: "absolute", top: "10px", right: "10px" }}>#1</Typography>
      </Box>
      <Typography variant='h6' style={{ margin: "5%" }}>Complete HTML tutorial</Typography>
    </Card>
  </Grid>
</Grid>


</Grid>

</>
     )
}
