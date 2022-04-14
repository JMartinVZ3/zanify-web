import { CircularProgress, Grid } from "@material-ui/core";
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
            <Grid container alignItems="stretch" spacing={3}>
                {categories.map((category) => (
                    <Grid key={category._id} itemxs={12} sm={12}>
                        <Category category={category}/>
                        <Products products={category.products}/>
                    </Grid>
                ))}
            </Grid>
        )
    );

}

export default Categories;