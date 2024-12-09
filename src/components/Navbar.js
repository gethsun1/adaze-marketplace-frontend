import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, useMediaQuery, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Menu } from '@mui/icons-material';
import logo from '../assets/images/logo.png'; 

function Navbar() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Menu Items
  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'Markets', link: '/markets' },
    { text: 'Dashboard', link: '/dashboard' },
  ];

  return (
    <AppBar position="static" color="primary" sx={{ backgroundColor: '#003366' }}>
      <Toolbar>
        {/* Logo and Title */}
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
          <img
            src={logo} 
            alt="Logo"
            style={{
              width: '40px',
              height: 'auto',
              marginRight: '8px',
              border: '3px solid #ed018d', 
              borderRadius: '8px', 
              padding: '4px', 
            }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: isMobile ? 1 : 'inherit', // Center the title on mobile view
              mr: isMobile ? 0 : 2, // Adjust margin based on view
            }}
          >
            Adaze Marketplace
          </Typography>
        </Box>

        {isMobile ? (
          // Mobile View: Hamburger Menu with Drawer
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ ml: 'auto' }} // Align menu to the right
            >
              <Menu />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {menuItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemButton component="a" href={item.link}>
                        <ListItemText primary={item.text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          // Desktop View: Full Links
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            {menuItems.map((item, index) => (
              <Button key={index} color="inherit" href={item.link} sx={{ mx: 1 }}>
                {item.text}
              </Button>
            ))}
          </Box>
        )}
        <Button
          color="secondary"
          variant="outlined"
          sx={{
            borderColor: '#ed018d',
            '&:hover': { backgroundColor: '#f8bbd0', color: '#003366' },
          }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
