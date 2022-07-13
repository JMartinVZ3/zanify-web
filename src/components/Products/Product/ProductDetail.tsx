import React  from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

import { Product } from "../../../domain/product";

import { useShoppingCart } from '../../../application/shoppingCart';

import useStyles from './styles'

type ProductProps = {
  product: Product
}


const ProductDetail = ({ product }: ProductProps) => {

    const classes = useStyles();

    const { useAddProduct } = useShoppingCart();

    const loader = 'https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png'

    const image = product.images_url[0]? product.images_url[0] : `${loader}`

    return (
        <Card elevation={0}>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt=" imagen"
        />
        <CardContent className={classes.CardContentStyle} style={{padding: 0, paddingTop:16}}>
          <Typography variant="h5" color="secondary" >
            {product.title}
          </Typography>
          <Typography variant="h4" color="secondary" >
            ${product.price}
          </Typography>
        </CardContent>
        <CardActions style={{justifyContent: 'center', paddingBottom:'16px'}}>
            <Button color="primary" onClick={() => {
              useAddProduct(product);
            }}>Add to Cart</Button>
        </CardActions>
      </Card>
    )

}

export default ProductDetail;