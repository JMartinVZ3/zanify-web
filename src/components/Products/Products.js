import { CircularProgress, Grid } from "@material-ui/core";
import React, {useEffect} from "react";

import Product from './Product/Product';

const Products = ({products}) => {

    return(
        !products.length ? <CircularProgress/> : (
            <Grid container alignItems="stretch" spacing={3}>
                {products.map((product) => (
                    <Grid key={product._id} itemxs={12} sm={12}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        )
    );

}

export default Products;