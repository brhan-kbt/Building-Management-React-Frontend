import React, { useEffect, useMemo } from 'react'
import { useState } from 'react'

import {CssBaseline, ThemeProvider} from '@mui/material'
import {createTheme} from '@mui/material/styles'
import { useSelector } from 'react-redux'
import { themeSettings } from './Dashboard/theme'
import {BrowserRouter , Navigate, Route, Routes, useNavigate} from 'react-router-dom'
import Dashboard from './Dashboard/scenes/dashboard'
import Layout from './Dashboard/scenes/layout'
import Home from './frontpages/home'
import Login from './frontpages/login'
import Register from './frontpages/register'
import Product from './Dashboard/scenes/products'
import Users from './Dashboard/scenes/users'
import Pricing from './frontpages/pricing'
import About from './frontpages/about'
import Overview from './Dashboard/scenes/overview'
import Tenant from './Dashboard/scenes/tenant'
import MaintenanceExpert from './Dashboard/scenes/mexperts'
import Building from './Dashboard/scenes/building'
import Floor from './Dashboard/scenes/floor'
import Unit from './Dashboard/scenes/unit'
import BuildingCreator from './Dashboard/scenes/new/new'



function App() {
  const mode =useSelector((state:any)=>state.global.mode);
  const theme =useMemo(()=>createTheme(themeSettings(mode)),[mode]);
  const [loggedIn, setLoggedIn] = useState('');
  const navigate = useNavigate(); // Get the navigate function from the Router
  
  useEffect(() => {
    const token = localStorage.getItem('nodetoken') as string;
    setLoggedIn(token)
    
    // if (!token) {
    //   navigate('/login'); // Navigate to the login page if not logged in
    // }
  }, [loggedIn, navigate]);

  return (
    <div className="app h-full">
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/pricing' element={<Pricing />}/>
            <Route path='/about' element={<About />}/>
            {loggedIn && (
              <Route element={<Layout />}>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/users' element={<Users />} />
                <Route path='/tenant' element={<Tenant />} />
                <Route path='/technicians' element={<MaintenanceExpert />} />
                <Route path='/overview' element={<Overview />} />

                <Route path='/building' element={<Building />} />
                <Route path='/floor' element={<Floor />} />
                <Route path='/units' element={<BuildingCreator />} />

              </Route>
            )}
          </Routes>
        </ThemeProvider>
    </div>
  )
}

export default App

{/* <Route path='/products' element={<Product />} /> */}