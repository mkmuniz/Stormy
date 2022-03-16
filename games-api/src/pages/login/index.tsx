import React from 'react';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { styleContainer } from './style/style';

export default function Login() {
    return<>
        <Container color="primary" sx={styleContainer}>
          <Box alignItems="center">
            <Button variant="contained" color="primary"> Login</Button>
          </Box>
        </Container>
    </>
}