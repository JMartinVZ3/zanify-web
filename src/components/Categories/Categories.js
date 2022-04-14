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
            categories.map((category) => (
                <>
                    <Category category={category}/>
                    <Grid key={category._id} itemxs={12} sm={12}>
                        <Products products={category.products}/>
                    </Grid>
                </>
            ))
        )
    );

}

export default Categories;