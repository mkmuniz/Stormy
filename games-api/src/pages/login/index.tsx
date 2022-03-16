import React from 'react';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';

export default function Login() {
    return<>
        <Container sx={{
            minWidth: 300,
            bgcolor: 'background.paper'
        }}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        color: 'primary.color',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: 1,
        fontWeight: 'bold',
      }}
    />
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
            <Button variant="contained"> Login</Button>
        </Container>
    </>
}