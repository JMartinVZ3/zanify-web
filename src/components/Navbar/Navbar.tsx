import React from 'react';
import Link from 'next/link'

import { AppBar, Typography, Box, Button } from '@material-ui/core';

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
                <Button variant="contained" disableElevation className={classes.containedButton}>
                    
                    <Link href="/shopping-cart" style={{textDecoration: 'none'}}>Ver Carrito</Link>
                </Button>
                <Button variant="outlined" color="inherit" onClick={() => {}}>Contactar Tienda</Button>
            </Box>
        </AppBar>
      </Box>
    )


}

export default Navbar;