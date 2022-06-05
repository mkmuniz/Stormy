import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import jwtDecode from 'jwt-decode';

export default function ButtonAppBar() {
  const getToken: any = localStorage.getItem('token');
  const token = jwtDecode(getToken);

  console.log(token);
  return (
    <Box sx={{ flexGrow: 1, color: "#D100F3" }}>
      <AppBar position="static" sx={{ bgcolor: "#D100F3" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Stormy
          </Typography>
          <Button color="inherit">Bem-Vindo!</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
