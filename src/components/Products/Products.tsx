import { Grid } from "@material-ui/core";
import React from "react";

import { Product } from "../../domain/product";

import ProductDetail from './Product/ProductDetail';

type ProductsProps = {
    products: Product[]
}


const Products = ({products}: ProductsProps) => {

    return (
        (
            <Grid container spacing={3}>
                {products.map((product: Product) => (
                    <Grid item xs={12} sm={4} md={3}>
                        <ProductDetail product={product}/>
                    </Grid>
                ))}
            </Grid>
        )
    );

}

export default Products;