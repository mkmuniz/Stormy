import React from 'react';
import { Button, FormControl, InputLabel, Grid, Link, TextField } from '@mui/material';
import { State } from './interface';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import './index.css';

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
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

  const onUsernameChange = (e: any) => {
    setUsername(e.target.value);
    console.log(username);
  }

  const onEmailChange = (e: any) => {
    setEmail(e.target.value);
    console.log(email);
  }

  const onPasswordChange = (e: any) => {
    setPassword(e.target.value);
    console.log(password);
  }

  const doRegister = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }

  return <>
    <Grid container direction="column" textAlign="center" justifyContent="center" bgcolor="white" width="30%" margin="auto" marginTop="10%" height="100%" minHeight="400px" borderRadius="2%" mx="auto">
      <h1>Welcome!</h1>
      <Box justifyContent="center" alignItems="center">
        <FormControl onSubmit={doRegister}>
          <FormControl sx={{ m: 1, width: '25ch', bgcolor: '#E3E2E2', borderRadius: 1 }} variant="outlined">
            <TextField onChange={onUsernameChange} value={username} placeholder="Username">
            </TextField>
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch', bgcolor: '#E3E2E2', borderRadius: 1 }} variant="outlined">
            <TextField onChange={onEmailChange} value={email} placeholder="E-mail">
            </TextField>
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch', bgcolor: '#E3E2E2', borderRadius: 1 }} variant="outlined">
            <TextField placeholder="password" onChange={onPasswordChange} value={password} type="password" >Password</TextField>
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch', bgcolor: '#E3E2E2', borderRadius: 1 }} variant="outlined">
            <TextField placeholder="password" onChange={onPasswordChange} value={password} type="password" >Password</TextField>
          </FormControl>
          <Link href="/forgotpassword" underline="none" sx={{ mt: 5 }}>Did you forget password?</Link>
          <Link href="/login" underline="none" sx={{ mb: 5 }}>Do you have an account?</Link>
          <Box textAlign="center" sx={{ mb: 3 }}>
            <Button variant="contained" color="primary" type="submit">Register</Button>
          </Box>
        </FormControl>
      </Box>
    </Grid>
  </>
}