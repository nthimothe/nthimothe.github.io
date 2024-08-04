// (c) 2024 Nathan Thimothe
import React, { useRef } from 'react';
// ICON IMPORTS
import InfoIcon from '@mui/icons-material/Info';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
// DATA IMPORTS
import aboutMe from './data/aboutMe.json';
import projects from './data/projects';
import experiences from './data/experiences';
import education from './data/education';
import contact from './data/contact';

import Box from '@mui/material/Box';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import WebsiteAppBar from './components/WebsiteAppBar';
import MainContainer from './components/MainContainer';
import './css/App.css';

const App = () => {

  const iconColor = {
    color: "#000"
  }

  const NAV_INFO_ARR = [
    { title: aboutMe.cardTitle, icon: <InfoIcon sx={iconColor} />, href: `#${aboutMe.id}` },
    { title: projects.cardTitle, icon: <CodeRoundedIcon sx={iconColor} />, href: `#${projects.id}` },
    { title: experiences.cardTitle, icon: <BusinessRoundedIcon sx={iconColor} />, href: `#${experiences.id}` },
    { title: education.cardTitle, icon: <SchoolRoundedIcon sx={iconColor} />, href: `#${education.id}` },
    { title: contact.cardTitle, icon: <PermContactCalendarRoundedIcon sx={iconColor} />, href: `#${contact.id}` },
  ];

  // Create a reference to the container element
  const containerRef = useRef(null);

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawerWidth = 320;
  const name = "Nathan  Thimothe"

  return (
    <Box sx={{ display: 'flex' }}>
      <WebsiteAppBar title={name} navItems={NAV_INFO_ARR} handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
      <ResponsiveDrawer drawerWidth={drawerWidth} drawerInfo={NAV_INFO_ARR} container={containerRef} handleDrawerTransitionEnd={handleDrawerTransitionEnd} handleDrawerClose={handleDrawerClose} handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
      <MainContainer title={name} />
    </Box>
  );
}

export default App;
