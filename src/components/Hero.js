import React from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';

function Hero() {
  return (
    <Box
      sx={{
        height: '100vh',
        background: 'linear-gradient(to right, #003366, #ed018d)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 4,
        position: 'relative',
      }}
    >
      {/* Background Image Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("/path-to-your-image.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
          zIndex: 1,
        }}
      />
      <Box sx={{ position: 'relative', zIndex: 2, maxWidth: '900px', width: '100%' }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            mb: 3,
            fontSize: { xs: '2rem', sm: '3rem' }, // Responsive typography
          }}
        >
          Welcome to Adaze Marketplace
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 4,
            fontSize: { xs: '1rem', sm: '1.25rem' }, // Responsive typography
          }}
        >
          Your ultimate platform for seamless buying and selling. Explore thriving markets or sell your bales with ease.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                backgroundColor: '#ed018d',
                '&:hover': { backgroundColor: '#f50075' },
                width: '100%', // Ensure full width on small screens
              }}
            >
              Explore Markets
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              sx={{
                borderColor: '#f8bbd0',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#f8bbd0',
                  color: '#003366',
                },
                width: '100%', // Ensure full width on small screens
              }}
            >
              Sell Your Bale
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Highlight Features Section */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 50,
          left: 0,
          right: 0,
          textAlign: 'center',
          px: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            fontSize: { xs: '1.25rem', sm: '1.5rem' }, // Responsive typography
          }}
        >
          Why Choose Adaze Marketplace?
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Box sx={{ px: 2 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Seamless Transactions
              </Typography>
              <Typography variant="body2">
                Experience smooth and secure trading with cutting-edge technology.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ px: 2 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Wide Range of Markets
              </Typography>
              <Typography variant="body2">
                Explore a variety of markets tailored to your needs.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ px: 2 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Easy Bale Selling
              </Typography>
              <Typography variant="body2">
                Sell your products effortlessly and maximize your earnings.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Hero;
