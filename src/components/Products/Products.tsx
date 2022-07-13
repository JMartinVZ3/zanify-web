import React from "react";

import { Product } from "../../domain/product";

import ProductDetail from './Product/ProductDetail';

type ProductsProps = {
    products: Product[]
}


const Products = ({products}: ProductsProps) => {

    return (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 mt-4">
            {products.map((product: Product) => (
                <ProductDetail product={product}/>
            ))}
        </div>
    );

}

export default Products;