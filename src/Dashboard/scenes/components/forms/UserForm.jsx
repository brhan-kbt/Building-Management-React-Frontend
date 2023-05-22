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
import { useState } from 'react';
import { useCreateUserMutation } from '../../../../state/api';
import { useEffect } from 'react';

export default function UserForm({
  handleEdit,
  handleAdd,
  openDialog,
  onClose,
  user,
}) {

  

  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState('');
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    username: user?.username || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    confirm_email: user?.email || "",
    role: user?.role || "",
    password: user?.password || "",
    photo: null,
  });
  
 const theme =useTheme();
 
 const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onClose(); // Call the onClose function provided as a prop
  };

  useEffect(()=>{
    setOpen(openDialog);
    if (user) {
        setFormData({
          firstName: user.firstName || "",
          lastName: user.lastName || "",
          password: user.password || "",
          username: user.username || "",
          email: user.email,
          confirm_email: user.email || "",
          phoneNumber: user.phoneNumber || "",
          role: user.role || "",
        });
        setId(user._id);
    }
  },[user])

  const handleSubscribe = () => {
    const updatedFormData = id ? { ...formData, id } : formData; // Merge id with formData if editing

    if (user && user._id) {
      handleEdit(updatedFormData); // Call the handleEdit function for editing
    } else {
      handleAdd(formData); // Call the handleAdd function for adding
    }
  };
  

  
  const role = [
    {
      value: 'admin',
      label: 'Admin',
    },
    {
      value: 'mgr',
      label: 'Manager',
    },
    {
      value: 'mxpert',
      label: 'Maintenance Expert',
    },
    {
      value: 'user',
      label: 'User',
    },
  ];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

 
  
  return (


    <div>
      <Button variant="outlined" sx={{ backgroundColor:'orange'}} onClick={handleClickOpen} startIcon={<Add/>}>
              Add User
      </Button>
      <form onSubmit={handleSubscribe}>
        <Dialog open={open} onClose={handleClose} 
        
        >
          <DialogTitle className='text-center'
          sx={{fontSize:20,fontWeight:'700'}}
          >Add User</DialogTitle>
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
          id="phoneNumber"
          label="Phone Number"
          type="text"
          name='phoneNumber'
          value={formData.phoneNumber}
          onChange={handleFormChange}
          autoComplete="phoneNumber"
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
            {role.map((option) => (
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


