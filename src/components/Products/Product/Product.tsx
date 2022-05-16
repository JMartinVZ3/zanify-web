import React  from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

import {
  useAppDispatch,
  useAppSelector,
} from '../../../app/hooks';

import { 
  AddProduct,
  selectShoppingCart
} from '../../../features/shoppingCart';

import useStyles from './styles'

type ProductProps = {
  product: {
    _id: string
    title: string,
    price: number,
    images_url: any
  }
}


const Product = ({ product }: ProductProps) => {

    const classes = useStyles();

    const dispatch = useAppDispatch();

    const shoppingCart = useAppSelector(selectShoppingCart);

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
              console.log(shoppingCart)
              dispatch(AddProduct(product))        
            }}>Add to Cart</Button>
        </CardActions>
      </Card>
    )

}

export default Product;