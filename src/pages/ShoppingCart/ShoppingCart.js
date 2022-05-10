import React , {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';

import { GetShoppingCartProducts, PostOrder } from "../../actions/shoppingCart";

import {
  Typography,
  Box,
  Grid,
  Grow,
  CircularProgress,
  Button,
  Divider,
  TextField,
} from "@material-ui/core";

import { useFormik } from 'formik';
import * as yup from 'yup';

import { useSelector} from "react-redux";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import useStyles from "./styles";
import ShoppingCartObject from "../../components/ShoppingCartObject/ShoppingCartObject";

const validationSchema = yup.object({
  name: yup
    .string('Enter your name')
    .required('Name is required'),
  lastName: yup
    .string('Enter your LastName')
    .required('Last Name is required'),
});

const ShoppingCart = () => {

  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories);

  useEffect(() => {

    dispatch(GetShoppingCartProducts(categories));

  }, [dispatch]);
  
  const shoppingCart = useSelector((state) => state.shoppingCart);

  const [sent, setSent] = useState(false);

  const classes = useStyles();

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
              <Box>
                  <PostOrderForm setSent={setSent}/>
              </Box>
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

const PostOrderForm = ({setSent}) => {

  const dispatch = useDispatch();

  const shoppingCart = useSelector((state) => state.shoppingCart);

  const shopId = useSelector((state) => state.categories[0].shop);

  console.log(shopId);

  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

      var ProductList = []

      for (let i = 0; i < shoppingCart.length; i++) {
        const product = {
          
          "product": shoppingCart[i]._id,
          "quantity": shoppingCart[i].quantity
        
        }
        ProductList.push(product);

    }

      console.log(ProductList);

      dispatch(PostOrder(values.name, values.lastName, ProductList, shopId));

      setSent(true);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Nombre"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="lastName"
          name="lastName"
          label="Apellido"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Enviar Pedido
        </Button>
      </form>
    </div>
  )

}

export default ShoppingCart;

