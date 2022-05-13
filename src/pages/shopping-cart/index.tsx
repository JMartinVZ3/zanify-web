import React , {useState, useEffect} from "react";

import {
  useAppDispatch,
  useAppSelector,
} from '../../hooks';

import {
  selectCategory,
} from '../../features/category';

import { 
  GetShoppingCartProducts, 
  PostOrder, 
  selectShoppingCart 
} from "../../features/shoppingCart";

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

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import useStyles from "./styles";

import ShoppingCartObject from "../../components/ShoppingCartObject/ShoppingCartObject";

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Name is required'),
  lastName: yup
    .string()
    .required('Last Name is required'),
});

const ShoppingCart = () => {

  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategory);

  useEffect(() => {

    dispatch(GetShoppingCartProducts(categories));

  }, [dispatch]);

  const shoppingCart = useAppSelector(selectShoppingCart);

  console.log(shoppingCart)

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
                shoppingCart.map((product: any) => (
                  <Grid key={product._id} sm={12}>
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
                shoppingCart.map((product: any) => (
                  <Grid key={product._id} sm={12}>
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
              shoppingCart.map((product: any) => (
                <Grid key={product._id} item xs={12} sm={12}>
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

const ShoppingCartProduct = ({ product } : any) => {
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

const PostOrderForm = ({setSent} : any) => {

  const dispatch = useAppDispatch();

  const shoppingCart = useAppSelector(selectShoppingCart);

  const categories: Array<any> = useAppSelector(selectCategory);

  type ProductsListProps = {
    product: any;
    quantity: any;
  }

  console.log(categories);


  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

      const name = values.name;

      const lastName = values.lastName

      var products = []

      for (let i = 0; i < shoppingCart.length; i++) {

        
        const product:ProductsListProps = {
          
          "product": shoppingCart[i]._id,
          "quantity": shoppingCart[i].quantity
        
        }

        products.push(product);

      }

      const shopId:string = "2323";

      console.log(products);

      dispatch(PostOrder({name, lastName, products, shopId}))

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

