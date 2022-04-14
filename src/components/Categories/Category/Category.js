import React  from "react";
import { Container, Typography } from '@material-ui/core';

const Category = ({ category }) => {


    return (
            <Typography variant='h3' color="secondary">{category?.title}</Typography>
    )

}

export default Category;