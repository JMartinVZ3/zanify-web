import React from 'react';
import { Container, Typography, Box, Grid, Grow, CircularProgress, Button } from '@material-ui/core';
import { SendOutlined } from '@material-ui/icons/SendOutlined'; 

import { useSelector } from 'react-redux';

import useStyles from './styles';
import ShoppingCartObject from '../../components/ShoppingCartObject/ShoppingCartObject';



const ShoppingCart = () => {

    const shoppingCart = useSelector((state) => state.shoppingCart);

    const classes = useStyles();

    let total = 0;

    for (let i = 0; i < shoppingCart.length; i++) {
      total += shoppingCart[i].price * shoppingCart[i].quantity
    }

    return (
        <>
        <Box sx={{ mt:12, bgcolor: "#E5E7EB"}}/>
        <Grow in>
          <Grid container alignItems="stretch">
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#F9FAFB' }} className={classes.box}>
                  <Typography variant='h3' color="secondary">Carrito de Compra</Typography>
                  <Box className={classes.row}>
                    <Typography variant='body1' color="secondary">Esta es la orden que se enviará a la tienda</Typography>
                    <Typography variant='body1' color="secondary">Precio</Typography>
                  </Box>
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
            <Box sx={{ bgcolor: '#F9FAFB' }} className={classes.box}>
              <Typography variant='h4' color="secondary">Resumen del pedido</Typography>
              <>
                {!shoppingCart?.length ? <CircularProgress/> : (
                  shoppingCart.map((product) => (
                    <Grid key={product._id} itemxs={12} sm={12}>
                      <ShoppingCartProduct product={product}/>
                    </Grid>
                  ))
                )}
              </>
            </Box>
            <Box className={classes.boxRow}>
              <Typography variant='h5' color="secondary">Total</Typography>
              <Typography variant='h5' color="secondary">${total}</Typography>
            </Box>
            <Button variant="contained" color="primary" disableElevation>Enviar Pedido</Button>
            </Container>
          </Grid>
        </Grow>
        </>
    )
}

const ShoppingCartProduct = ({product}) => {

  const classes = useStyles();

  let total = product.price * product.quantity;

  return(
    <Box className={classes.boxRow}>
      <Typography variant='body1' color="secondary">{product.title} ({product.quantity})</Typography>
      <Typography variant='body1' color="secondary">${total}</Typography>
    </Box>
  )
}

export default ShoppingCart;