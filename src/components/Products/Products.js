import { Grid } from "@material-ui/core";
import React from "react";

import Product from './Product/Product';
import useStyles from './styles'

const Products = ({products}) => {

    return(
        (
            <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
                {products.map((product) => (
                    <Grid key={product._id} item xs={12} sm={4} md={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        )
    );

}

export default Products;