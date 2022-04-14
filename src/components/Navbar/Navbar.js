import React from 'react';

import { AppBar, Typography, Box, Toolbar, IconButton, Button } from '@material-ui/core';

import useStyles from './styles';

const Navbar = () => {

    const classes = useStyles();

    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="absolute" className={classes.appBar}>
            <Box sx={{ p: 1, ml: 4}}>
                <Typography variant="h3">
                  Zanify
                </Typography>
            </Box>
            <Box sx={{ mr: 5}}>
                <Button variant="contained" disableElevation className={classes.containedButton}>Ver Carrito</Button>
                <Button variant="outlined" color="inherit">Contactar Tienda</Button>
            </Box>
        </AppBar>
      </Box>
    )


}

export default Navbar;