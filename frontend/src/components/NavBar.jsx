import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <AppBar position="static" sx={{ width: '100%', margin: 0 }}>
        <Container maxWidth="lg" >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Button variant="text" color="inherit" sx={{ textTransform: 'none' }} component={Link} to="/">
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    ArtMuseum
                </Typography>
              </Button>
            </Box>
            {/* <Box>
              <Button variant="outlined" color="inherit" sx={{ mr: 1, textTransform: 'none', backgroundColor: '#ffffff',
                  color: '#000000', '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.7)'
                  }}} component={Link} to="/login">
                  Sign in
              </Button>
              <Button variant="contained" color="inherit" sx={{ textTransform: 'none', backgroundColor: '#000000',
                  color: '#ffffff', '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)'
                  }}} component={Link} to="/register">
                  Register
              </Button>
            </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
};