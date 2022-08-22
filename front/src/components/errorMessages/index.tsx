import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styleErrorMessage, styleSucessMessage } from './style/';

export default function ErroTemplate(tipo: string, message: string) {

    return <>
        {tipo === 'error' &&
            <Card sx={styleErrorMessage}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {message}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        }

        {tipo === 'sucess' &&
            <Card sx={styleSucessMessage}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {message}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        }

    </>
}