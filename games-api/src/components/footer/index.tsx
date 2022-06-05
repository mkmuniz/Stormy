import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import GroupIcon from '@mui/icons-material/Group';

export default function Footer() {
    return <>
        <BottomNavigation sx={{ textAlign: 'center', color: 'secondary.main' }}>
            <Grid container >
                <Grid item xs={4}>
                    <List sx={{ width: '100%', height: '100%', bgcolor: 'background.paper' }}>
                        <h4>Apresentação</h4>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <VideogameAssetIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Photos" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <GroupIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Work" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={4}>
                    <List sx={{ width: '100%', height: "100%", bgcolor: 'background.paper' }}>
                        <h4>Suporte</h4>
                        <ListItem>
                            Teste
                        </ListItem>
                        <ListItem>
                            Teste
                        </ListItem>
                        <ListItem>
                            Teste
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={4}>
                    <List sx={{ width: '100%', height: "100%", bgcolor: 'background.paper' }}>
                        <h4>Contato</h4>
                        <ListItem>
                            stormyweboficial@gmail.com
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </BottomNavigation>
    </>
}