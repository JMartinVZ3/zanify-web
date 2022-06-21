import React , {useState, useEffect} from "react";

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

import useStyles from "./styles";

import ShoppingCartObject from "../../components/ShoppingCartObject/ShoppingCartObject";
import { useShoppingCart } from "../../application/shoppingCart";

import { useShoppingCartStorage } from "../../services/shoppingCartAdapter";

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Name is required'),
  lastName: yup
    .string()
    .required('Last Name is required'),
});

const ShoppingCart = () => {

  const { useGetShoppingCartProducts } = useShoppingCart();

  useEffect(() => {

    useGetShoppingCartProducts()

  }, []);

  const { shoppingCart } = useShoppingCartStorage();

  console.log(shoppingCart)

  const [sent, setSent] = useState(false);

  const classes = useStyles();

  let total = 0;

  for (let i = 0; i < shoppingCart.length; i++) {
    total += shoppingCart[i].price * shoppingCart[i].quantity;
  }

  return(
  <div>
    <div className={classes.sizedBox}/>
    {!sent ? (
      <Grow in>
        <Grid
          container
          alignItems="stretch"
          className={classes.grid}
          spacing={2}
        >
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <DisplayShoppingCartProducts shoppingCart={shoppingCart}/>
          </Grid>
          <Grid item md={4} lg={4} xl={4}>
            <DisplayTotalShoppingCart shoppingCart={shoppingCart} total={total} setSent={setSent}/>
          </Grid>
        </Grid>
      </Grow>
    ) : (
      <>
      </>
  )}
  </div>
  );
};

const DisplayShoppingCartProducts = ({ shoppingCart } : any) => {
  const classes = useStyles();

  return (
    <Box
    className={classes.box}
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
  )
}

const DisplayTotalShoppingCart = ({ shoppingCart, total, setSent } : any ) => {

  const classes = useStyles();

  return (
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
  )
}

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



  const { shoppingCart } = useShoppingCartStorage();

  //const categories: Array<any> = useAppSelector(selectCategory);

  type ProductsListProps = {
    product: any;
    quantity: any;
  }


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
          
          "product": shoppingCart[i].id,
          "quantity": shoppingCart[i].quantity
        
        }

        products.push(product);

      }

      //const shopId:string = categories[0].shop;

      //console.log(shopId);

      //dispatch(PostOrder({name, lastName, products, shopId}))

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

