import { CircularProgress, Grid, Box } from "@material-ui/core";
import React, {useEffect} from "react";
import { useDispatch } from 'react-redux';

import Category from './Category/Category';

import { useSelector } from 'react-redux';

import { getCategories } from '../../actions/categories';

import Products from '../Products/Products';

const Categories = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    const categories = useSelector((state) => state.categories);

    return(
        !categories?.length ? <CircularProgress/> : (
            categories.map((category) => (
                console.log(categories),
                category.products.length > 0 && (
                <>
                    <Box style={{paddingBottom: '48px', margin:'0px'}} sx={{ mt: 4}}/>
                    <Category category={category}/>
                    <Grid key={category._id} itemxs={12} sm={12}>
                        <Products products={category.products}/>
                    </Grid>
                </>
            )))
        )
    );

}

export default Categories;