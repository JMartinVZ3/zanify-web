import React , {useState} from "react";
import { useDispatch } from 'react-redux';

import { PostOrder } from "../../actions/shoppingCart";

import {
  Container,
  Typography,
  Box,
  Grid,
  Grow,
  CircularProgress,
  Button,
  Divider,
} from "@material-ui/core";

import { useSelector} from "react-redux";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import useStyles from "./styles";
import ShoppingCartObject from "../../components/ShoppingCartObject/ShoppingCartObject";

const ShoppingCart = () => {
  const shoppingCart = useSelector((state) => state.shoppingCart);

  const [sent, setSent] = useState(false);

  const classes = useStyles();

  const dispatch = useDispatch();

  const handleClick = () => {

    dispatch(PostOrder());

    setSent(true);
  }

  let total = 0;

  for (let i = 0; i < shoppingCart.length; i++) {
    total += shoppingCart[i].price * shoppingCart[i].quantity;
  }

  return(
  <>
  {!sent ? (
    <>  
    <Box sx={{ mt: 12, bgcolor: "#E5E7EB" }} />
        <Grow in>
      <Grid
        container
        alignItems="stretch"
        style={{ padding: "0px 36px 0px 36px" }}
        spacing={2}
      >
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Box
            sx={{ bgcolor: "#F9FAFB" }}
            className={classes.box}
            style={{ padding: "16px" }}
          >
            <Typography variant="h4" color="secondary">
              Carrito de Compra
            </Typography>
            <Box
              className={classes.row}
              style={{ padding: "0px 0px 8px 0px", margin: "0px" }}
            >
              <Typography variant="body1" color="secondary">
                Esta es la orden que se enviará a la tienda
              </Typography>
              <Typography variant="body1" color="secondary">
                Precio
              </Typography>
            </Box>
            <Box style={{ paddingTop: "8px" }}></Box>
            <>
              {!shoppingCart?.length ? (
                <CircularProgress />
              ) : (
                shoppingCart.map((product) => (
                  <Grid key={product._id} itemxs={12} sm={12}>
                    <Divider />
                    <ShoppingCartObject product={product} />
                  </Grid>
                ))
              )}
            </>
          </Box>
        </Grid>
        <Grid item md={4} lg={4} xl={4}>
          <Box sx={{ bgcolor: "#F9FAFB" }} className={classes.box}>
            <Typography
              variant="h4"
              color="secondary"
              style={{ paddingBottom: "16px" }}
            >
              Resumen del pedido
            </Typography>
            <Divider style={{ marginBottom: "16px" }}></Divider>
            <>
              {!shoppingCart?.length ? (
                <CircularProgress />
              ) : (
                shoppingCart.map((product) => (
                  <Grid key={product._id} itemxs={12} sm={12}>
                    <ShoppingCartProduct product={product} />
                  </Grid>
                ))
              )}
              <Divider style={{ marginTop: "16px" }}></Divider>
              <Box
                className={classes.boxRow}
                style={{ margin: "16px 0px 16px 0px" }}
              >
                <Typography variant="h5" color="secondary">
                  Total
                </Typography>
                <Typography variant="h5" color="secondary">
                  ${total}
                </Typography>
              </Box>
              <Grid container justify="flex-end">
                <Button variant="contained" color="primary" disableElevation onClick={handleClick}>
                  Enviar Pedido
                </Button>
              </Grid>
            </>
          </Box>
        </Grid>
      </Grid>
    </Grow>
    
    </>

  ) : (
    <>
  <Box sx={{ mt: 12, bgcolor: "#E5E7EB" }} />
  <Grow in>
    <Grid
      container
      alignItems="center"
      style={{ padding: "0px 36px 0px 36px" }}
      spacing={2}
      direction="column"
      justifyContent="center"
    >
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Box
          sx={{ bgcolor: "#F9FAFB" }}
          className={classes.box}
          style={{ padding: "16px" }}
        >
          <Typography align='center' variant="h4" color="secondary" >
            Tu orden ha sido enviada
          </Typography>
          <Box><CheckCircleIcon/></ Box>

          <Box style={{ paddingTop: "8px" }}></Box>
          <>
            {!shoppingCart?.length ? (
              <CircularProgress />
            ) : (
              shoppingCart.map((product) => (
                <Grid key={product._id} itemxs={12} sm={12}>
                  <Divider />
                  <ShoppingCartObject product={product} />
                </Grid>
              ))
            )}
          </>
        </Box>
      </Grid>
    </Grid>
  </Grow>
</>
  )}
  </>
  );
};

const ShoppingCartProduct = ({ product }) => {
  const classes = useStyles();

  let total = product.price * product.quantity;

  return (
    <Box className={classes.boxRow}>
      <Typography variant="body1" color="secondary">
        {product.title} ({product.quantity})
      </Typography>
      <Typography variant="body1" color="secondary">
        ${total}
      </Typography>
    </Box>
  );
};

export default ShoppingCart;

