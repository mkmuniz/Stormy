import React from 'react';
import { Button, FormControl, InputLabel, Grid, Link, TextField } from '@mui/material';
import { State } from './interface';
import Box, { BoxProps } from '@mui/material/Box';
import './index.css';
import { fazerLogin } from '../../api/auth';

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
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

  const onUsernameChange = (e: any) => {
    setUsername(e.target.value);
    console.log(username);
  }

  const onPasswordChange = (e: any) => {
    setPassword(e.target.value);
    console.log(password);
  }

  const doLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    await fazerLogin({ "username": username, "password": password })
  }

  return <>
    <Grid container direction="column" textAlign="center" justifyContent="center" bgcolor="#F1F1F1" width="70%" margin="auto" marginTop="5%" height="100%" minHeight="500px" borderRadius="2%" mx="auto">
      <h1>Welcome!</h1>
      <Box justifyContent="center" alignItems="center">
        <FormControl onSubmit={doLogin}>
          <FormControl sx={{ m: 1, width: '25ch', bgcolor: '#E3E2E2', borderRadius: 1 }} variant="outlined">
            <TextField onChange={onUsernameChange} value={username} placeholder="Username">
            </TextField>
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch', bgcolor: '#E3E2E2', borderRadius: 1 }} variant="outlined">
            <TextField placeholder="password" onChange={onPasswordChange} value={password} type="password" >Password</TextField>
          </FormControl>
          <Link href="/forgotpassword" underline="none" sx={{ mt: 5 }}>Did you forget password?</Link>
          <Link href="/signup" underline="none" sx={{ mb: 5 }}>Dont have an account?</Link>
          <Box textAlign="center" sx={{ mb: 3 }}>
            <Button variant="contained" color="primary" onClick={doLogin}> Login</Button>
          </Box>
        </FormControl>
      </Box>
    </Grid>
  </>
}