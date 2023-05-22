import React from 'react'
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
  StoreMallDirectory,
  Store,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from './FlexBetween';
import profileImage from "../../../assets/profile.jpeg";

const navItems = [
    {
      id:1,
      text: "Dashboard",
      icon: <HomeOutlined />,
    },
    {
      id:2,
      text: "Users Module",
      icon: null,
    },
    {
      id:3,
      text: "Overview",
      icon: <PointOfSaleOutlined />,
    },
    // {
     //id:1,
    // text: "Products",
    //   icon: <ShoppingCartOutlined />,
    // },
    {
      id:4,
      text: "Users",
      icon: <Groups2Outlined />,
    },
    {
      id:5,
      text: "Tenant",
      icon: <ReceiptLongOutlined />,
    },
    {
      id:6,
      text: "Technicians",
      icon: <PublicOutlined />,
    },
    {
      id:7,
      text: "Building Module",
      icon: null,
    },
    {
      id:8,
      text: "Building",
      icon: <ShoppingCartOutlined />,
    },
    {
      id:9,
      text: "Floor",
      icon: <Groups2Outlined />,
    },
    {
      id:10,
      text: "Units",
      icon: <ReceiptLongOutlined />,
    },
   
    {
      id:11,
      text: "Finance Module",
      icon: null,
    },
    {
      id:12,
      text: "Overview",
      icon: <PointOfSaleOutlined />,
    },
    {
      id:13,
      text: "Income",
      icon: <TodayOutlined />,
    },
    {
      id:14,
      text: "Expense",
      icon: <CalendarMonthOutlined />,
    },
    {
      id:15,
      text: "Store Module",
      icon: null,
    },
    {
      id:16,
      text: "Overview",
      icon: <PointOfSaleOutlined />,
    },
    {
      id:17,
      text: "Income",
      icon: <TodayOutlined />,
    },
    {
      id:18,
      text: "Expense",
      icon: <CalendarMonthOutlined />,
    },

    {
      id:19,
      text: "Maintenance Module",
      icon: null,
    },
    {
      id:20,
      text: "Overview",
      icon: <PointOfSaleOutlined />,
    },
    {
      id:21,
      text: "Income",
      icon: <TodayOutlined />,
    },
    {
      id:22,
      text: "Expense",
      icon: <CalendarMonthOutlined />,
    },
    {
      id:23,
      text: "Management",
      icon: null,
    },
    {
      id:24,
      text: "Admin",
      icon: <AdminPanelSettingsOutlined />,
    },
    {
      id:25,
      text: "Performance",
      icon: <TrendingUpOutlined />,
    },
  ];
  const Sidebar = ({
    user,
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    isNonMobile,
  }) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();
  
    useEffect(() => {
      setActive(pathname.substring(1));
    }, [pathname]);
  
    return (
      <Box component="nav">
        {isSidebarOpen && (
          <Drawer
            open={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            variant="persistent"
            anchor="left"
            sx={{
              width: drawerWidth,
              "& .MuiDrawer-paper": {
                color: theme.palette.primary[1],
                backgroundColor: theme.palette.background.alt,
                boxSixing: "border-box",
                borderWidth: isNonMobile ? 0 : "0px",
                width: drawerWidth,
              },
            }}
          >
            <Box width="100%">
              <Box m="1.5rem 2rem 2rem 3rem">
                <FlexBetween color={theme.palette.primary[1]}>

                  <Box display="flex" alignItems="center" gap="0.5rem">
                    <Typography variant="h4" fontWeight="bold" className='text-primary'>
                      Bethelhem SW.
                    </Typography>
                  </Box>
                  {!isNonMobile && (
                    <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                      <ChevronLeft />
                    </IconButton>
                  )}
                </FlexBetween>
              </Box>
              <List>
                {navItems.map(({ text, icon,id }) => {
                  if (!icon) {
                    return (
                      <Typography key={id} sx={{ m: "2.25rem 0 1rem 3rem",fontWeight:'bold' }}>
                        {text}
                      </Typography>
                    );
                  }
                  const lcText = text.toLowerCase();
  
                  return (
                    <ListItem key={id} disablePadding>
                      <ListItemButton
                        onClick={() => {
                          navigate(`/${lcText}`);
                          setActive(lcText);
                        }}
                        sx={{
                          backgroundColor:
                            active === lcText
                              ? 'orange'
                              : "transparent",
                          color:
                            active === lcText
                              ? theme.palette.primary[1]
                              : theme.palette.primary[1],
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            ml: "2rem",
                            color:
                              active === lcText
                                ? theme.palette.primary[1]
                                : theme.palette.primary[1],
                          }}
                        >
                          {icon}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                        {active === lcText && (
                          <ChevronRightOutlined sx={{ ml: "auto" }} />
                        )}
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
  
            {/* <Box position="absolute" bottom="2rem">
              <Divider />
              <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
                <Box
                  component="img"
                  alt="profile"
                  src={profileImage}
                  height="40px"
                  width="40px"
                  borderRadius="50%"
                  sx={{ objectFit: "cover" }}
                />
                <Box textAlign="left">
                  <Typography
                    fontWeight="bold"
                    fontSize="0.9rem"
                    sx={{ color: theme.palette.primary[1] }}
                  >
                    {user.name}
                  </Typography>
                  <Typography
                    fontSize="0.8rem"
                    sx={{ color: theme.palette.primary[1] }}
                  >
                    {user.occupation}
                  </Typography>
                </Box>
                <SettingsOutlined
                  sx={{
                    color: theme.palette.primary[1],
                    fontSize: "25px ",
                  }}
                />
              </FlexBetween>
            </Box> */}
          </Drawer>
        )}
      </Box>
    );
  };
  


export default Sidebar