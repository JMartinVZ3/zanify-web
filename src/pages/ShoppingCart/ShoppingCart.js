import React from 'react';
import { Container, Typography, Box, Grid, Grow, CircularProgress } from '@material-ui/core';

import { useSelector } from 'react-redux';

import useStyles from './styles';
import ShoppingCartObject from '../../components/ShoppingCartObject/ShoppingCartObject';



const ShoppingCart = () => {

    const shoppingCart = useSelector((state) => state.shoppingCart);

    console.log(shoppingCart)

    const classes = useStyles();

    return (
        <>
        <Box sx={{ mt: 12}}/>
        <Grow in>
          <Grid container alignItems="stretch">
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#F9FAFB' }} className={classes.box}>
                  <Typography variant='h3' color="secondary">Carrito de Compra</Typography>
                  <Typography variant='body1' color="secondary">Esta es la orden que se enviará a la tienda</Typography>
                  <>
                    {!shoppingCart?.length ? <CircularProgress/> : (
                      shoppingCart.map((product) => (
                        <Grid key={product._id} itemxs={12} sm={12}>
                          <ShoppingCartObject product={product}/>
                        </Grid>
                      ))
                    )}
                  </>
                </Box>
            </Container>
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
            </Container>
          </Grid>
        </Grow>
        </>
    )
}

export default ShoppingCart;