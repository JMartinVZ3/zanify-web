import { CircularProgress, Grid, Box } from "@material-ui/core";
import React, { useEffect} from "react";

import Category from './Category/Category';

import Products from '../Products/Products';

import { useCategories } from "../../application/categories";
import { useCategoriesStorage} from "../../services/categoriesAdapter";

type CategoriesProps = {
    shopName: string,
    userName: string
}

const Categories = ({shopName, userName}: CategoriesProps) => {

    const { useGetCategories } = useCategories();

    useEffect(() => {

        useGetCategories();

    }, []);

    const { categories } = useCategoriesStorage();

    return(
        !categories?.length ? <CircularProgress/> : (
            categories.map((category) => (
                
                category.products.length > 0 && (
                <>
                    <Box style={{paddingBottom: '48px', margin:'0px'}} sx={{ mt: 4}}/>
                    <Category category={category}/>
                    <Grid item xs={12} sm={12}>
                        <Products products={category.products}/>
                    </Grid>
                </>
            )))
        )
    );

}

export default Categories;