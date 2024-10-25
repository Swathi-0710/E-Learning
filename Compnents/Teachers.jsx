import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import Button from 'react-bootstrap/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Autocomplete from '@mui/material/Autocomplete';

export default function Teachers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  // Sample data for teachers
  const teachers = [
    { name: 'John Doe', profession: 'Developer', playlist: 4, totalVideos: 2, totalLikes: 1, totalComments: 4 },
    { name: 'Jane Smith', profession: 'Designer', playlist: 3, totalVideos: 2, totalLikes: 2, totalComments: 4 }
    // Add more teachers as needed
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    const filteredSuggestions = teachers.filter(teacher =>
      teacher.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSelection = (event, value) => {
    setSelectedTeacher(value);
    setSearchQuery(value ? value.name : '');
  };

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Box p={2}>
        <Typography variant="h6">Expert Tutor</Typography>
        <Divider style={{ marginBottom: "20px", marginTop: "20px" }} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <Autocomplete
              options={suggestions}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  type='search'
                  placeholder="search"
                  style={{ width: "100%" }}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <IconButton>
                        <SearchIcon style={{ color: "black" }} />
                      </IconButton>
                    ),
                    style: { borderRadius: "5px", backgroundColor: "white", height: "45px" }
                  }}
                  variant="outlined"
                  value={searchQuery}
                  onChange={handleInputChange}
                />
              )}
              value={selectedTeacher}
              onChange={handleSelection}
            />
          </Grid>

          {/* Rendering "Become a Tutor" section if search bar length is 0 */}
          {searchQuery.length === 0 && (
            <Grid item xs={12} sm={4} md={4} lg={3}>
              <Card style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", padding: "3%" }}>
                <Typography variant="h5">Become a Tutor</Typography>
                <Typography paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</Typography>
                <Button variant="contained" style={{ width: "50%", height: "12%", backgroundColor: "#eec60a", color: "white", borderRadius: "3px", border: "1px solid #eec60a" }}>Get Started</Button>
              </Card>
            </Grid>
          )}

          {/* Rendering selected teacher */}
          {selectedTeacher && (
            <Grid item xs={12} sm={4} md={4} lg={3}>
              <Card style={{ padding: "5%" }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Avatar fontSize="large" />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">{selectedTeacher.name}</Typography>
                    <Typography variant="caption">{selectedTeacher.profession}</Typography>
                  </Grid>
                </Grid>
                <Box p={1} pt={2}>
                  <Typography paragraph>Playlist: {selectedTeacher.playlist}</Typography>
                  <Typography paragraph>Total videos: {selectedTeacher.totalVideos}</Typography>
                  <Typography paragraph>Total likes: {selectedTeacher.totalLikes}</Typography>
                  <Typography paragraph>Total comments: {selectedTeacher.totalComments}</Typography>
                  <Button variant="contained" style={{ width: "50%", height: "18%", backgroundColor: "#eec60a", border: "1px solid #eec60a", color: "white", borderRadius: "3px" }}>View Profile</Button>
                </Box>
              </Card>
            </Grid>
          )}

          {/* Rendering filtered teachers */}
          {!selectedTeacher && filteredTeachers.map((teacher, index) => (
            <Grid key={index} item xs={12} sm={4} md={4} lg={3}>
              <Card style={{ padding: "5%" }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Avatar fontSize="large" />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">{teacher.name}</Typography>
                    <Typography variant="caption">{teacher.profession}</Typography>
                  </Grid>
                </Grid>
                <Box p={1} pt={2}>
                  <Typography paragraph>Playlist: {teacher.playlist}</Typography>
                  <Typography paragraph>Total videos: {teacher.totalVideos}</Typography>
                  <Typography paragraph>Total likes: {teacher.totalLikes}</Typography>
                  <Typography paragraph>Total comments: {teacher.totalComments}</Typography>
                  <Button variant="contained" style={{ width: "50%", height: "12%", backgroundColor: "#eec60a", border: "1px solid #eec60a", color: "white", borderRadius: "3px" }}>View Profile</Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
