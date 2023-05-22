import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Add } from '@mui/icons-material';
import { Box } from '@mui/system';
import { MenuItem, useTheme } from '@mui/material';
import FlexBetween from './FlexBetween';
import { useState } from 'react';

export default function FormDialog({ onSubscribe, onClose }) {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email:"",
    phone_number: "",
    confirm_email:'',
    role: "",
    password:"",
    photo: null,
  });
//  const theme =useTheme();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onClose(); // Call the onClose function provided as a prop
  };

  const handleSubscribe = () => {
    handleSubscribe();
    handleFormSubmit();
    handleClose(); // Close the dialog after subscribing
  };
  // const dialogStyle = {
  //   maxWidth: '1000px', 
  // };

  const currencies = [
    {
      value: 'Admin',
      label: 'Admin',
    },
    {
      value: 'Manager',
      label: 'Manager',
    },
    {
      value: 'Maintenance Expert',
      label: 'Maintenance Expert',
    },
    {
      value: 'Staff',
      label: 'Staff',
    },
  ];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];

  //   setFormData((prevState) => ({
  //     ...prevState,
  //     photo: file,
  //   }));
  //   console.log(file);
  // };


  const handleFormSubmit =  (e) => {
    e.preventDefault();
   
    console.log(formData);
      // const formDataSent = new FormData();
      // formDataSent.append("email", formData.email);
      // formDataSent.append("name", formData.name);
      // formDataSent.append("phone_number", formData.phone_number);
      // formDataSent.append("date", formData.date);
      // formDataSent.append("cardBirr", formData.cardBirr);
      // formDataSent.append("photo", formData.photo);

  }
 
  
  return (


    <div>
      <Button variant="outlined" sx={{ backgroundColor:'orange'}} onClick={handleClickOpen} startIcon={<Add/>}>
              Add User
      </Button>
      <form onSubmit={handleFormSubmit}>
        <Dialog open={open} onClose={handleClose} 
        
        >
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
          <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%', maxWidth:'70' },
        }}
        noValidate
        autoComplete="off"
      >
          <div className='flex flex-col md:flex-row w-[100%]'>
          <TextField
          id="firstName"
          label="First Name"
          type="text"
          value={formData.firstName}
          onChange={handleFormChange}
          name='firstName'
          autoComplete="firstName"
          />
          
          <TextField
            id="lastName"
            label="Last Name"
            type="text"
            value={formData.lastName}
            onChange={handleFormChange}
            name='lastName'
            autoComplete="lastName"
          />
          </div>
          <div className='flex flex-col md:flex-row'>
          <TextField
            id="username"
            label="Username"
            type="text"
            name='username'
            value={formData.username}
            onChange={handleFormChange}
            autoComplete="username"
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            name='password'
            value={formData.password}
            onChange={handleFormChange}
            autoComplete="password"
          />
          </div>
          <div className='flex flex-col md:flex-row'>
          <TextField
            id="email"
            label="Email"
            type="email"
            name='email'
            value={formData.email}
            onChange={handleFormChange}
            autoComplete="email"
          />
          <TextField
              id="confirm_email"
              label="Confirm Email"
              type="email"
              name='confirm_email'
              value={formData.confirm_email}
              onChange={handleFormChange}
              autoComplete="confirm_email"
          />
          </div>
          <div className='flex flex-col md:flex-row'>
          <TextField 
          id="phone_number"
          label="Phone Number"
          type="text"
          name='phone_number'
          value={formData.phone_number}
          onChange={handleFormChange}
          autoComplete="phone_number"
          />
          <TextField
            select
            id="role"
            label="Select Role"
            type="text"
            name='role'
            value={formData.role}
            onChange={handleFormChange}
            autoComplete="role"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          </div>
      </Box>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined"  sx={{borderColor:'red', color:'red'}} onClick={handleClose}>Cancel</Button>
            <Button variant="outlined" sx={{borderColor:'orange', color:'orange'}} onClick={handleSubscribe}>Save</Button>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}


