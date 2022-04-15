import React  from "react";
import { useDispatch } from 'react-redux';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { AddProduct } from '../../../actions/shoppingCart';
import useStyles from '../Product/styles'

import { useSelector } from 'react-redux';
const Product = ({ product }) => {

    const dispatch = useDispatch();

    const shoppingCart = useSelector((state) => state.shoppingCart);

    const loader = 'https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png'

    const classes = useStyles();
    const image = product.images_url[0]? product.images_url[0] : `${loader}`

    return (
        <Card elevation={0} sx={{ maxWidth: 330, minWidth:330, maxHeight: 560}}>
        <CardMedia
          
          component="img"
          height="250"
          image={image}
          alt=" green iguana"
        />
        <CardContent className={classes.CardContentStyle}>
          <Typography variant="h5" color="secondary">
            {product.title}
          </Typography>
          <Typography variant="h4" color="secondary">
            ${product.price}
          </Typography>
        </CardContent>
        <CardActions style={{justifyContent: 'center'}}>
            <Button color="primary"onClick={() => {
              console.log(shoppingCart)
              dispatch(AddProduct(product))        
            }}>Add to Cart</Button>
        </CardActions>
      </Card>
    )

}

export default Product;