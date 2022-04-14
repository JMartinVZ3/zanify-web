import React  from "react";
import { useDispatch } from 'react-redux';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { AddProduct } from '../../../actions/shoppingCart';

const Product = ({ product }) => {

    const dispatch = useDispatch();

    const image = `${product.images_url[0]}`

    return (
        <Card sx={{ maxWidth: 330, minWidth:330, maxHeight: 560}}>
        <CardMedia
          component="img"
          height="400"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" color="secondary">
            {product.title}
          </Typography>
          <Typography variant="h4" color="secondary">
            ${product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="primary"onClick={() => {
            dispatch(AddProduct(product))
          }}>Add to Cart</Button>
        </CardActions>
      </Card>
    )

}

export default Product;