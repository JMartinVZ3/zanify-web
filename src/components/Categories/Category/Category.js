import React, {useEffect}  from "react";
import { Container, Typography } from '@material-ui/core';

import Products from '../../Products/Products';

import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';

import { getProducts } from '../../../actions/products';

const Category = ({ category }) => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getProducts());

    }, [dispatch]);

    const products = useSelector((state) =>
         state.categories[1].products
    );

    console.log(products);

    return (
        <Container>
            <Typography variant='h4'>{category?.title}</Typography>
            <Products products={products}/>
        </Container>
    )

}

export default Category;