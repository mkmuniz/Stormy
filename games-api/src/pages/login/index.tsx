import React from 'react';
import Container from '@mui/material/Container';
import { Button, FormControl, InputLabel, Grid, Link } from '@mui/material';
import { State } from './interface';
import Box, { BoxProps } from '@mui/material/Box';
import { InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import { IconButton } from '@mui/material';
import './index.css';

export default function Login() {
    const [values, setValues] = React.useState<State>({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });

    const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
    setValues({
        ...values,
        showPassword: !values.showPassword,
      });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    const doLogin = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      console.log("Logged sucessfully!")
    }

    const styles = {
      container: {
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(45deg, #aa6775 30%, #984355 90%)' // Works
      },
    
      child: {
        backgroundColor: 'yellow' // Does nothing
      }
    };
    
    return<>
    <Grid container direction="column" alignItems="center" justifyContent="center" bgcolor="white" width="30%" margin="auto" marginTop="10%" height="100%" minHeight="400px" borderRadius="2%" mx="auto">
    <Box justifyContent="center">
          <FormControl onSubmit={doLogin}>
          <FormControl sx={{ m: 1, width: '25ch', bgcolor: 'white', borderRadius: 1 }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Username</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              label="Text"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch', bgcolor: 'white', borderRadius: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          <Link href="">Did you forget password?</Link>
          <Link href="/user/signup">Dont have an account?</Link>
        </FormControl>
            <Box textAlign="center">
              <Button variant="contained" color="primary" onClick={doLogin}> Login</Button>
            </Box>
        </FormControl>
        </Box>
    </Grid>
    </>
}