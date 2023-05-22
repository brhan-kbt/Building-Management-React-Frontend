
import React, { useEffect, useState } from "react";
import { Box, useTheme, IconButton } from "@mui/material";
import {  useCreateUserMutation, useDeleteUserMutation, useEditUserMutation, useGetUsers2Query } from "../../../state/api";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../components/Header";
import { Edit, Delete } from "@mui/icons-material";
import UserForm from "../components/forms/UserForm";


const MaintenanceExpert = () => {
  const theme = useTheme();
  const { data, isLoading,refetch } = useGetUsers2Query();
  const [selectedUser, setSelectedUser] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [editUser] = useEditUserMutation({
    onQueryStarted: () => {
      refetch();
    },
  });
  const [deleteUser]=useDeleteUserMutation({
    onQueryStarted: () => {
      refetch();
    },
  });
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [createUser] = useCreateUserMutation();

  const handleUserFormSubmit = (user) => {
    console.log("User:", user);
    const request = selectedUser && selectedUser._id ? editUser(user) : createUser(user);
    request
      .unwrap()
      .then((data) => {
        console.log(data);
        refetch();
        handleDialogClose();
      })
      .catch((error) => {
        console.error("Failed to edit/create user:", error);
      });
  };


const deleteRow=(id)=>{
  console.log(id);
  deleteUser(id)
      .unwrap()
      .then((data) => {
        console.log("User deleted successfully");
        refetch();
        handleDialogClose();

      })
      .catch((error) => {
        console.error("Failed to delete user:", error);
      });
}
  const handleEdit = (user) => {
    setSelectedUser(user);
    setOpenDialog(true);
  };

  useEffect(() => {
    handleEdit(selectedUser);
  }, [selectedUser]);

  const handleDialogClose = () => {
    setSelectedUser(null);
    setOpenDialog(false);
  };

  const handleButtonClick = () => {
  setSelectedUser({}); // Reset selectedUser to null
};


  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "fullName",
      headerName: "Full Name",
      flex: 0.5,
      valueGetter: (params) =>
        `${params.row.firstName} ${params.row.lastName}`,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      },
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 0.3,
      renderCell: (params) => {
        return (
          <Box>
            <IconButton sx={{ color: "green" }} onClick={() => handleEdit(params.row)}>
              <Edit />
            </IconButton>
            <IconButton sx={{ color: "red" }} onClick={() => deleteRow(params.row._id)}>
              <Delete />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Maintenance Technicians" subtitle="List of Maintenance Technicians" onButtonClick={handleButtonClick} />
        <Box
          mt="40px"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              // border: "none",
            },
            "& .MuiDataGrid-cell": {
              // borderBottom: "none",
              color:theme.palette.primary[1]
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[0],
              // borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.primary.alt,
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[0],
              // borderTop: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${theme.palette.secondary[0]} !important`,
            },
          }}
        >
          <DataGrid
            loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={data || []}
            columns={columns}
          />
        </Box>

        <UserForm
          user={selectedUser}
          openDialog={openDialog}
          onClose={handleDialogClose}
          handleEdit={handleUserFormSubmit}
          handleAdd={handleUserFormSubmit}
        />
    </Box>
  );
};

export default MaintenanceExpert;
