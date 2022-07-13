import React, { useEffect} from "react";

import Category from './Category/Category';

import Products from '../Products/Products';

import { useCategories } from "../../application/categories";
import { useCategoriesStorage} from "../../services/categoriesAdapter";

type CategoriesProps = {
    shopName: string,
    userName: string
}

const Categories = ({userName, shopName}: CategoriesProps) => {

    const { useGetCategories } = useCategories();


    useEffect(() => {

        useGetCategories(userName, shopName);

    }, [userName, shopName]);

    const { categories } = useCategoriesStorage();

    return(
        !categories?.length ? <div></div> : (
            categories.map((category) => (
                
                category.products.length > 0 && (
                <>
                    <Category category={category}/>
                    <div>
                        <Products products={category.products}/>
                    </div>
                </>
            )))
        )
    );

}

export default Categories;