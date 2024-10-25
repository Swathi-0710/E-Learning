import React from 'react'
import Illustration from "..//assets/illust.svg"
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import SchoolIcon from '@mui/icons-material/School';
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar'
import Rating from '@mui/material/Rating';

export default function About() {
    const [value, setValue] = React.useState(2);

    const Icon = ({ icon, title, caption }) => {
        return (
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card style={{ width: "auto", height: "15vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Box style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                                {React.createElement(icon, { style: { fontSize: "60px", color: "brown" } })}
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box display="flex" flexDirection="column" justifyContent="center" height="100%">
                                <Typography variant='h5'>{title}</Typography>
                                <Typography variant='caption'>{caption}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        )
    }

    const Icons = ({ para, name }) => {
        return (
            <Grid item xs={12} sm={8} md={4}>
                <Card style={{ padding: "20px" }}>
                    <Typography variant='body'>{para}</Typography>
                    <Box style={{ display: 'flex', alignItems: 'center', marginTop: "10px" }}>
                        <Avatar />
                        <Box marginLeft={2}>
                            <Typography variant='h6' style={{ fontSize: "17px" }}>{name}</Typography>
                            <Rating name="read-only" value={value} readOnly style={{ fontSize: "18px", fontWeight: 800 }} />
                        </Box>
                    </Box>
                </Card>
            </Grid>
        )
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <img src={Illustration} style={{ width: "100%", height: "auto" }} alt="Your Illustration" />
                </Grid>
                <Grid item xs={12} sm={6} container justifyContent="flex-end" alignItems="center">
                    <Box>
                        <Typography variant='h5' style={{fontWeight:600,margin:"2%"}}>Why choose us?</Typography>
                        <Typography variant='body1'style={{margin:"2%"}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Typography>
                        <Button variant='outlined' style={{ color: "white", backgroundColor: "#eec60a", border: "1px solid #eec60a" ,margin:"2%"}}>Our Courses</Button>
                    </Box>
                </Grid>
                </Grid>
                <Grid container spacing={2} justifyContent="space-around" style={{marginTop:"5%",marginBottom:"3%"}}>
                    <Icon icon={SchoolIcon} title="+10k" caption="online courses" />
                    <Icon icon={SchoolIcon} title="+10k" caption="online courses" />
                    <Icon icon={SchoolIcon} title="+10k" caption="online courses" />
                    <Icon icon={SchoolIcon} title="+10k" caption="online courses" />
                </Grid>
                <Grid style={{marginBottom:"2%"}}>
                    <Typography variant='h5'>Student's Reviews</Typography>
                </Grid>
                <Divider  style={{marginBottom:"2%"}}/>
                <Grid container spacing={2}>
                    <Icons para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        name="Name1" />
                         <Icons para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        name="Name2" />
                         <Icons para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        name="Name3" />
                         <Icons para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        name="Name4" />
                         <Icons para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        name="Name5" />
                         <Icons para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        name="Name1" />
                </Grid>
           
        </>
    )
}
