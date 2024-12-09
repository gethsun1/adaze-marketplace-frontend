import React from 'react'; 
import { Box, Button, Typography, Grid } from '@mui/material';
import { ReactTyped } from 'react-typed'; 
import { createTheme, ThemeProvider } from '@mui/material/styles'; 
import backgroundImage from '../assets/images/background.webp'; 

// Custom Theme for Typography
const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif", // Default global font
  },
});

function Hero() {
  return (
    <ThemeProvider theme={theme}>
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
            backgroundImage: `url(${backgroundImage})`,
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
              fontFamily: 'Montserrat, sans-serif', // Apply Montserrat Bold
              fontWeight: 'bold',
              mb: 3,
              fontSize: { xs: '4rem', sm: '3rem' },
              color: '#fff9ad',
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
            }}
          >
            <ReactTyped
              strings={['Welcome To Adaze Marketplace']}
              typeSpeed={150}
              backSpeed={50}
              loop
            />
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Pacifico, cursive', // Apply Pacifico font for the subtitle
              mb: 4,
              fontSize: { xs: '1rem', sm: '1.25rem' },
            }}
          >
            Your ultimate platform for buying and selling high-quality, affordable second-hand clothes. Explore thriving markets or effortlessly sell your bales of Mitumba with ease.
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  fontFamily: 'Ubuntu, sans-serif', 
                  fontWeight: 'bold',
                  backgroundColor: '#ed018d',
                  '&:hover': { backgroundColor: '#f50075' },
                  width: '100%',
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
                  fontFamily: 'Ubuntu, sans-serif', // Apply Ubuntu font for the button
                  borderColor: '#f8bbd0',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#f8bbd0',
                    color: '#003366',
                  },
                  width: '100%',
                }}
              >
                Sell Your Bale
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Hero;
