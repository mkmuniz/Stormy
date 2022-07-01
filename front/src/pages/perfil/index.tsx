import { Box, Button, Card, Grid, TextField } from '@mui/material';
import jwtDecode from 'jwt-decode';
import React from 'react';
import Footer from '../../components/footer/index';
import NavBar from '../../components/navbar/index';
import Typography from '@mui/material/Typography';
import { mudarUsuario } from '../../api/perfil';

export default function Perfil() {
    const [name, setName] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const getToken: any = localStorage.getItem('token');
    const token: any = jwtDecode(getToken);

    const onChangeUsername = (e: any) => {
        setName(e.target.value);
    }

    const onChangeEmail = (e: any) => {
        setEmail(e.target.value);
    }

    const mudarPerfil = async () => {
        await mudarUsuario(token._id, {"username": name, "email": email})
    }

    return <>
        <NavBar />
        <Box sx={{ m: 0, p: 0, width: "100%", height: "100%", bgcolor: "#ffffff" }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={7} md={4}>
                    <Card sx={{ m: 5, maxWidth: 600, maxHeght: 600 }}>
                        <Typography align='center'>
                            <h2>Perfil</h2>
                            <TextField
                                required
                                id="outlined-required"
                                onChange={onChangeUsername}
                                label="Username"
                                defaultValue={token.username}
                                sx={{ m: 2 }}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                onChange={onChangeEmail}
                                label="E-mail"
                                defaultValue={token.email}
                                sx={{ m: 2 }}
                            />
                            <h4 id="message"></h4>
                            <Button sx={{ m:2 }} variant="contained" onClick={mudarPerfil}>Salvar alterações</Button>
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </Box>
        <Footer />
    </>
}