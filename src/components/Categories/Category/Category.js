import React  from "react";
import { Container, Typography } from '@material-ui/core';

const Category = ({ category }) => {


    return (
        <Container>
            <Typography variant='h3' color="secondary">{category?.title}</Typography>
        </Container>
    )

}

export default Category;