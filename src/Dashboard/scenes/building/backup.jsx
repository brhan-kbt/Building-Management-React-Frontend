import { ExpandMore, ExpandMoreOutlined, FavoriteOutlined, FileUpload, MoreVertOutlined, Save, Share } from '@mui/icons-material'
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Grid, IconButton, TextareaAutosize, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import FlexBetween from '../components/FlexBetween'
import Header from '../components/Header'

const Building = () => {
  const [formData, setFormData] = useState({
    buildingName: '',
    buildingType: '',
    description: '',
    role: '',
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleUpload = () => {
    // Perform upload logic using the selectedImage
    if (selectedImage) {
      console.log('Uploading image:', selectedImage);
      // Add your upload code here
    }
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box m="1.5rem 2.5rem">
    <Header title="Building" subtitle="Building Identity" />
    <Box sx={{ flexGrow: 1 }} mt="40px">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {/* First Section */}
          <Box sx={{  p: 2 }}>
            <Card sx={{backgroundColor:'transparent'}}>
                <CardHeader
                    avatar={
                    <Avatar  aria-label="recipe">
                        R
                    </Avatar>
                    }
                
                    title={formData.buildingName}
                    subheader={formData.buildingType}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={selectedImage ? URL.createObjectURL(selectedImage) : "/static/images/cards/paella.jpg"}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    {formData.description}
                    </Typography>
                </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* Second Section */}
          <Box sx={{  p: 2 }}>
          <Box>
            <input
                accept="image/*"
                id="image-upload-input"
                type="file"
                style={{ display: 'none' }}
                onChange={handleImageUpload}
            />
            <label htmlFor="image-upload-input">
            <Button variant="contained" sx={{marginBottom:'20px'}} component="span" startIcon={<FileUpload />}>
                Upload Logo
            </Button>
            </label>
            {/* {selectedImage && (
                <Box mt={2}>
                <img src={URL.createObjectURL(selectedImage)} alt="Selected" width="200" />
                </Box>
            )} */}
            {/* {selectedImage && (
                <Button variant="contained" color="primary" onClick={handleUpload}>
                Upload
                </Button>
            )} */}
            </Box>
                <Box
                    component="form"
                    sx={{
                    '& .MuiTextField-root': { my: 1, width: '100%', maxWidth:'70' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField
                    id="buildingName"
                    label="Building Name"
                    type="text"
                    value={formData.buildingName}
                    onChange={(e) => setFormData({ ...formData, buildingName: e.target.value })}
                    name='buildingName'
                    autoComplete="buildingName"
                    />
                    
                    <TextField
                        id="buildingType"
                        label="Building Type"
                        type="text"
                        value={formData.buildingType}
                        onChange={(e) => setFormData({ ...formData, buildingType: e.target.value })}
                        name='buildingType'
                        autoComplete="buildingType"
                    />
                

                    <TextareaAutosize
                        id="description"
                        placeholder="Enter your description here"
                        type="text"
                        name='description'
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        autoComplete="description"
                        minRows={3} // Specify the minimum number of rows to display
                        maxRows={6} // Specify the maximum number of rows to display
                        style={{ width: '100%',background: 'transparent',borderRadius:5 }} // Adjust the width as needed
                    />

                    <Button type='submit' variant="contained" sx={{marginTop:'20px'}} component="span" startIcon={<Save />}>
                        Save
                    </Button>
                        
                </Box> 
            </Box>
        </Grid>
      </Grid>
    </Box>
  </Box>  
  
  )
}

export default Building