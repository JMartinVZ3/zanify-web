import { CircularProgress, Grid, Box } from "@material-ui/core";
import React, {useEffect} from "react";

import Category from './Category/Category';

import {
  selectCategory,
  getCategories
} from '../../features/category';

import {
    useAppDispatch,
    useAppSelector,
} from '../../app/hooks';

import Products from '../Products/Products';

type CategoriesProps = {
    shopName: string,
    userName: string
}

const Categories = ({shopName, userName}: CategoriesProps) => {

    const dispatch = useAppDispatch();

    useEffect(() => {

        dispatch(getCategories({userName, shopName}));

    }, [dispatch]);

    const categories = useAppSelector(selectCategory);

    console.log(categories);

    return(
        !categories?.length ? <CircularProgress/> : (
            categories.map((category: { products: any; _id: string; title: string; }) => (
                console.log(categories),
                category.products.length > 0 && (
                <>
                    <Box style={{paddingBottom: '48px', margin:'0px'}} sx={{ mt: 4}}/>
                    <Category category={category}/>
                    <Grid key={category._id} item xs={12} sm={12}>
                        <Products products={category.products}/>
                    </Grid>
                </>
            )))
        )
    );

}

export default Categories;