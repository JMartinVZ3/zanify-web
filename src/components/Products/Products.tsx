import { Grid } from "@material-ui/core";
import React from "react";

import Product from './Product/Product';
import useStyles from './styles'

type ProductsProps = {
    products: Array<ProductProps>
}

type ProductProps = {
    _id: string
    title: string,
    price: number,
    images_url: any
}

const Products = ({products}: ProductsProps) => {

    return(
        (
            <Grid container spacing={3}>
                {products.map((product: ProductProps) => (
                    <Grid key={product._id} item xs={12} sm={4} md={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        )
    );

}

export default Products;