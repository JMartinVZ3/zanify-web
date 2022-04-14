import React  from "react";
import { Container, Typography } from '@material-ui/core';

const Product = ({ product }) => {

    return (
        <Container>
            <Typography variant='h4'>{product?.title}</Typography>
        </Container>
    )

}

export default Product;