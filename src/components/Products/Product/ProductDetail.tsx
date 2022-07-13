import React  from "react";

import { Product } from "../../../domain/product";

import { useShoppingCart } from '../../../application/shoppingCart';


type ProductProps = {
  product: Product
}

const ProductDetail = ({ product }: ProductProps) => {

    const { useAddProduct } = useShoppingCart();

    const loader = 'https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png'

    const image = product.images_url[0]? product.images_url[0] : `${loader}`

    return (
      <div className="max-w-sm rounded overflow-hidden">
        <img className="w-full h-72 md:h-80 bg-cover object-cover" src={image} alt="producto"/>
        <div className="px-6 py-4">
          <p className="text-darkBlue text-2xl font-bold flex justify-center items-center">
            {product.title}
          </p>
          <p className="text-darkBlue text-xl font-semibold flex justify-center items-center">
            ${product.price}
          </p>
        </div>
        <div className="pb-4 flex justify-center items-center">
          <button className="text-base bg-transparent text-blue hover:text-darkBlue" onClick={() => {
            useAddProduct(product);
          }}>
            ADD TO CART
          </button>
        </div>
      </div>
    )

}

export default ProductDetail;