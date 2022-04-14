import { Grid } from "@material-ui/core";
import React from "react";

import Product from './Product/Product';

const Products = ({products}) => {

    return(
        (
            <Grid container alignItems="stretch" spacing={0}>
                {products.map((product) => (
                    <Grid key={product._id} itemxs={3} sm={6} md={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        )
    );

}

export default Products;