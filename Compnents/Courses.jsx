import React from 'react'
import { Videos } from './Summer'
import  Box  from '@mui/material/Box'
import  Typography  from '@mui/material/Typography'
import  Grid  from '@mui/material/Grid'
import  Divider  from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar';
import HtmlBadge from "..//assets/html.png"
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Saas from "..//assets/saas.png"
import Boot from "..//assets/Bootstrap_logo.svg.png"
import Jimage from "..//assets/jquery.png"
import Js from "..//assets/jse.png";
import CSSS from "..//assets/cssnew.svg"
import PHP from "..//assets/phpii.svg"
import Sqlim from "..//assets/sqli.svg"
import Reactj from "..//assets/reacti.svg"
import Playlist from './Playlist'
import { Link } from 'react-router-dom'
export default function Courses() {
  return (
   <Box>
     <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <Typography variant='h5' align='start' style={{marginTop:"1%"}}>Our Courses</Typography>
            <Divider  style={{backgroundColor:"black",marginTop: '15px', marginBottom: '15px'}}/>
          </Grid>
        
          <Videos 
                title="Swathi" 
                date="21-10-2022" 
                buttons="10 videos" 
                images={HtmlBadge} 
                paragraph="complete HTML tutorial" 
                // Pass the URL as a string
                buttonses="/playlist" 
                stylein={{backgroundColor: "#C62F2F", marginTop: "20px",minHeight: "40vh"}} 
                styleimg={{ width: '120px', height: "120px" }}
            />
          <Videos title="Name2" date="22-10-2022" buttons="10 videos" images={CSSS} paragraph="complete CSS tutorial" buttonses="View Playlists" stylein={{backgroundColor: "#001861", marginTop: "20px",minHeight: "40vh"  }} styleimg={{ width: '120px', height: "120px" }} />
          <Videos title="Name3" date="2-10-2022" buttons="10 videos" images={Js} paragraph="complete JS tutorial" buttonses="View Playlists" stylein={{backgroundColor: "#ED9121", marginTop: "20px",minHeight: "40vh"  }} styleimg={{ width: '120px', height: "120px" }}/>
          <Videos title="Name4" date="4-10-2022" buttons="10 videos" images={Boot} paragraph="complete Bootstrap tutorial" buttonses="View Playlists" stylein={{backgroundColor: "#002db3", marginTop: "20px",minHeight: "40vh"  }} styleimg={{ width: '150px', height: "120px" }} />
          <Videos title="Name5" date="5-10-2022" buttons="10 videos" images={Jimage} paragraph="complete JQuery tutorial" buttonses="View Playlists" stylein={{backgroundColor: "#001861", marginTop: "20px",minHeight: "40vh"  }}styleimg={{ width: '140px', height: "140px" }} />
          <Videos title="Name6" date="4-1-2022" buttons="10 videos" images={Saas} paragraph="complete SASS tutorial" buttonses="View Playlists"  stylein={{backgroundColor: "#b35a73", marginTop: "20px",minHeight: "40vh"  }}styleimg={{ width: '50%', height: "50%" }}/>
          <Videos title="Name4" date="4-10-2022" buttons="10 videos" images={PHP} paragraph="complete Bootstrap tutorial" buttonses="View Playlists" stylein={{backgroundColor: "#787cb5", marginTop: "20px",minHeight: "40vh"  }} styleimg={{ width: '60%', height: "60%" }} />
          <Videos title="Name5" date="5-10-2022" buttons="10 videos" images={Sqlim} paragraph="complete JQuery tutorial" buttonses="View Playlists" stylein={{backgroundColor: "#191919", marginTop: "20px",minHeight: "40vh"  }}styleimg={{ width: "50%", height: "50%" }} />
          <Videos title="Name6" date="4-1-2022" buttons="10 videos" images={Reactj} paragraph="complete SASS tutorial" buttonses="View Playlists"  stylein={{backgroundColor: "#055e6b", marginTop: "20px",minHeight: "40vh"  }}styleimg={{ width: '30%', height: "30%" }}/>
        
        </Grid>
   </Box>
  )
}
