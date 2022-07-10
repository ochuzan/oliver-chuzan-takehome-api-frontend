import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from 'react';
import { Link } from "react-router-dom";
// import "./NavBar.css"
// import logo from "../Images/chatbot-logo.png"

function NavBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  
    return (
      <AppBar position="sticky" sx={{ backgroundColor: "#FE462D", height: "80px", marginBottom: "20px" }}>
        <Container maxWidth="xl" >
          <Toolbar sx={{ marginTop: "10px" }} disableGutters>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1,  }}>
              {/* <img id="navbar-logo" src={logo} alt="Reserva logo"/> */}
            </Box>
              {/* <Link to="/restaurants"> */}
                <Typography
                variant="h6"
                noWrap
                component="a"
                href="/restaurants"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'Cormorant Garamond',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
                >
                Reserva
                </Typography>
              {/* </Link> */}
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <Link to="/restaurants">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography sx={{fontFamily: 'Cormorant Garamond',fontWeight: 700, letterSpacing: '2px'}} textAlign="center">Restaurants</Typography>
                  </MenuItem>
                </Link>
                <Link to="/reservations">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography sx={{fontFamily: 'Cormorant Garamond',fontWeight: 700, letterSpacing: '2px'}} textAlign="center">Reservations</Typography>
                  </MenuItem>
                </Link>
                <Link to="/restaurants/new">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography sx={{fontFamily: 'Cormorant Garamond',fontWeight: 700, letterSpacing: '2px'}} textAlign="center">Add Restaurant</Typography>
                  </MenuItem>
                </Link>
              </Menu>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1,  }}>
              {/* <img id="navbar-logo" src={logo} alt="Reserva logo"/> */}
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/restaurants"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'Cormorant Garamond',
                fontWeight: 900,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Reserva
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Link to="/restaurants">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', textDecoration: "none", fontFamily: 'Cormorant Garamond', fontWeight: 700, letterSpacing: '2px'}}
                >
                  Restaurants
                </Button>
              </Link>
              <Link to="/reservations">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', textDecoration: "none", fontFamily: 'Cormorant Garamond', fontWeight: 700 , letterSpacing: '2px'}}
                >
                  Reservations
                </Button>
              </Link>
              <Link to="/restaurants/new">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', textDecoration: "none", fontFamily: 'Cormorant Garamond', fontWeight: 700 , letterSpacing: '2px'}}
                >
                  Add Restaurant
                </Button>
              </Link>
              {/* <Link to="/news">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', textDecoration: "none", fontFamily: 'Cormorant Garamond',fontWeight: 700 }}
                >
                  News
                </Button>
              </Link> */}
            </Box>
  
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Link to="">
                  <MenuItem  onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                </Link>
                <Link to="">
                  <MenuItem  onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Login</Typography>
                  </MenuItem>
                </Link>
                <Link to="">
                  <MenuItem  onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Sign Up</Typography>
                  </MenuItem>
                </Link>
                <Link to="">
                  <MenuItem  onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Edit Profile</Typography>
                  </MenuItem>
                </Link>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
  
  export default NavBar;
  