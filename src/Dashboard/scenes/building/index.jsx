import { FileUpload } from '@mui/icons-material';
import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useCreateBuildingMutation } from '../../../state/api';
import FlexBetween from '../components/FlexBetween';
import Header from '../components/Header';

const Building = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [code, setCode] = useState('');
  const [type, setTotalUnts] = useState('');
  const [description, setDescription] = useState('');

  const [addBuilding] = useCreateBuildingMutation();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

  };

 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const formData = new FormData();
    formData.append("code", code);
    formData.append("type", type);
    formData.append("description", description);
    formData.append("photo", selectedImage);
  
    // Log the form data

    console.log("Form Data:", Object.fromEntries(formData));
    const request = addBuilding(formData);
    request
      .unwrap()
      .then((data) => {
        console.log(data);
        handleDialogClose();
      })
      .catch((error) => {
        console.error("Failed to edit/create building:", error);
      });
    // Perform the submit logic with the formData
  };
  

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Building" subtitle="Building Identity" />

    <form onSubmit={handleSubmit} >
      <FlexBetween sx={{ gap: '20px' }}>
        <div>
          <input
            accept="image/*"
            id="image-upload-input"
            type="file"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
          <label htmlFor="image-upload-input">
            <Button variant="contained" component="span" startIcon={<FileUpload />}>
              Upload Photo
            </Button>
          </label>
        </div>

        <TextField
          label="Total Floors"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Total Units"
          type="text"
          value={type}
          onChange={(e) => setTotalUnts(e.target.value)}
          fullWidth
          margin="normal"
        />
      </FlexBetween>

      <TextField
        label="Description..."
        multiline
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={8}
        variant="outlined"
        fullWidth
      />

    
      {selectedImage && (
        <Box mt={2}>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      )}

      <Button variant="contained" color="primary" type='submit'>
        Save
      </Button>

      </form>
    </Box>
  );
};

export default Building;
