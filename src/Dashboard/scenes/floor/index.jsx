import { FileUpload } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import FlexBetween from '../components/FlexBetween';
import Header from '../components/Header';

const Floor = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalFloors, setTotalFloors] = useState(5);
  const [totalUnits, setTotalUnits] = useState(220);
  const [floors, setFloors] = useState([]);
  const [unitsError, setUnitsError] = useState(false);
  const [totalUnitsError, setTotalUnitsError] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleAddFloor = () => {
    if (floors.length < totalFloors) {
      const newFloor = {
        floorNumber: floors.length + 1,
        units: "",
      };
      setFloors((prevFloors) => [...prevFloors, newFloor]);
    }
  };

  const handleUnitChange = (event, index) => {
    const { value } = event.target;

    setFloors((prevFloors) => {
      const updatedFloors = [...prevFloors];
      updatedFloors[index] = {
        ...updatedFloors[index],
        units: value,
      };
      return updatedFloors;
    });

    // Calculate the sum of units
    let sum = 0;
    floors.forEach((floor, i) => {
      if (i === index) {
        sum += parseInt(value) || 0;
      } else {
        sum += parseInt(floor.units) || 0;
      }
    });

    // Validate total units
    if (totalUnits < sum) {
      setTotalUnitsError(true);
    } else {
      setTotalUnitsError(false);
    }

    // Validate individual floor units
    const updatedUnitsError = floors.map((floor, i) => {
      if (i === index) {
        return value === "" ? true : false;
      }
      return floor.units === "" ? true : false;
    });
    setUnitsError(updatedUnitsError);

    console.log("Floors:", floors);
    console.log("Total Units:", totalUnits);
  };

  const handleSubmit = () => {
    // Validate units per floor
    let error = false;
    floors.forEach((floor) => {
      if (floor.units === "") {
        error = true;
      }
    });
    setUnitsError(error);
  
    // Validate total units
    let sum = 0;
    floors.forEach((floor) => {
      sum += parseInt(floor.units);
    });
  
    if (sum > totalUnits) {
      setTotalUnitsError(true);
    } else {
      setTotalUnitsError(false);
  
      if (!error) {
        const formData = new FormData();
        // formData.append("totalFloors", totalFloors);
        // formData.append("totalUnits", totalUnits);
         formData.append("Floors", JSON.stringify(floors));
        // formData.append("image", selectedImage);
        console.log(floors);
  
        // Set total units per floor in the FormData object
        // floors.forEach((floor, index) => {
        //   formData.append(`unitsPerFloor[${index}]`, floor.units);
        // });
  
        // Log the form data
        console.log("Form Data:", Object.fromEntries(formData));
  
        // Perform the submit logic with the formData
      }
    }
  };
  
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Floor" subtitle="Total Floors of Building" />

      <Box  mt='20px'>
          <h2>Total Floors: <strong>{totalFloors}</strong></h2>
          <h2>Total Units: <strong>{totalUnits}</strong></h2>
      </Box>
      <Button variant="contained" color="primary" onClick={handleAddFloor}>
        Add Units/Floor
      </Button>

      <Box display="flex" flexWrap="wrap" mt={2}>
        {floors.map((floor, index) => (
          <Box key={index} width={1 / 2} maxWidth="150px" mt={2} pr={2}>
            <Typography variant="subtitle1">Floor {floor.floorNumber}: {floor.units} Units</Typography>
            <TextField
              label={`Units for Floor ${floor.floorNumber}`}
              value={floor.units}
              onChange={(event) => handleUnitChange(event, index)}
              fullWidth
              margin="normal"
              error={totalUnitsError}
            />
          </Box>
        ))}
      </Box>

      {totalUnitsError && (
        <Typography color="error" variant="body2">
          The total units do not match the sum of units per floor.
        </Typography>
      )}

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Save
      </Button>
    </Box>
  );
};

export default Floor;