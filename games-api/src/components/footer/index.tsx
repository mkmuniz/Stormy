import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import { Avatar, Box, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';

export default function Footer() {
    return <>
        <BottomNavigation sx={{ textAlign: 'center', color: 'secondary.main' }}>
            <Grid container >
                <Grid item xs={4}>
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <h4>Apresentação</h4>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    ASDSAD
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Photos" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    ASDSAD
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Work" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    SDAD
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Vacation" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={4}>
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <h4>Suporte</h4>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    ASDSAD
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Photos" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    ASDSAD
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Work" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    SDAD
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Vacation" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={4}>
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <h4>Contato</h4>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    ASDSAD
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Photos" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    ASDSAD
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Work" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    SDAD
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Vacation" />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </BottomNavigation>
    </>
}