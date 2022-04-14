import React  from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const Product = ({ product }) => {

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
          <Typography variant="h5">
            {product.title}
          </Typography>
          <Typography variant="body2">
            ${product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={()=>{}}>Add to Cart</Button>
        </CardActions>
      </Card>
    )

}

export default Product;